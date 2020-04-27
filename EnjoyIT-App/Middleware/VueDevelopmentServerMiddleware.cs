using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SpaServices;
using VueSPATemplate.Middleware.Util;

namespace VueSPATemplate.Middleware
{
    internal static class VueDevelopmentServerMiddleware
    {
        private const string LogCategoryName = "Microsoft.AspNetCore.SpaServices";
        private static TimeSpan RegexMatchTimeout = TimeSpan.FromSeconds(20);

        public static void Attach(ISpaBuilder spaBuilder, string npmScriptName)
        {
            var sourcePath = spaBuilder.Options.SourcePath;
            if (string.IsNullOrEmpty(sourcePath))
            {
                throw new ArgumentException("Cannot be null or empty", nameof(sourcePath));
            }

            if (string.IsNullOrEmpty(npmScriptName))
            {
                throw new ArgumentException("Cannot be null or empty", nameof(npmScriptName));
            }

            // Start Vue application and attach to middleware pipeline
            var appBuilder = spaBuilder.ApplicationBuilder;            
            var logger = LoggerFinder.GetOrCreateLogger(appBuilder, LogCategoryName);
            var portTask = StartVueDevServerAsync(sourcePath, npmScriptName, logger);

            var targetUriTask = portTask.ContinueWith(
                task => new UriBuilder("http", "localhost", task.Result).Uri);

            SpaProxyingExtensions.UseProxyToSpaDevelopmentServer(spaBuilder, () =>
            {
                var timeout = spaBuilder.Options.StartupTimeout;
                return targetUriTask.WithTimeout(timeout,
                    $"The vue development server did not start listening for requests " +
                    $"within the timeout period of {timeout.Seconds} seconds. " +
                    $"Check the log output for error information.");
            });
        }

        private static async Task<int> StartVueDevServerAsync(
            string sourcePath, string npmScriptName, ILogger logger)
        {
            var portNumber = TcpPortFinder.FindAvailablePort();
            logger.LogInformation($"Starting Vue dev server on port {portNumber}...");

            var npmScriptRunner = new NpmScriptRunner(
                sourcePath, npmScriptName, $"--port {portNumber} --host localhost", null);
            npmScriptRunner.AttachToLogger(logger);

            Match startDevelopmentServerLine;
            using (var stdErrReader = new EventedStreamStringReader(npmScriptRunner.StdErr))
            {
                try
                {
                    startDevelopmentServerLine = await npmScriptRunner.StdOut.WaitForMatch(
                        new Regex("DONE", RegexOptions.None, RegexMatchTimeout));
                }
                catch (EndOfStreamException ex)
                {
                    throw new InvalidOperationException(
                        $"The NPM script '{npmScriptName}' exited without indicating that the " +
                        $"vue development server was listening for requests. The error output was: " +
                        $"{stdErrReader.ReadAsString()}", ex);
                }
            }

            return portNumber;
        }
    }
}