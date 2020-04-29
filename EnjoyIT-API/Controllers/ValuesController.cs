using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataContext;
using DataContext.Dtos;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EnjoyITAPI.Controllers
{
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Route("api/data")]
    public class ValuesController : ControllerBase
    {
        private DataBaseContext _context;
        private readonly ILogger<ValuesController> _logger;

        public ValuesController(ILogger<ValuesController> logger, DataBaseContext webAPIDataContext)
        {
            _context = webAPIDataContext;
            _context.Database.EnsureCreated();
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _context.Items.ToList();
        }
    }
}
