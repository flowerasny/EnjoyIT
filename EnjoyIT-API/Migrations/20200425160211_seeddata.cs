using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class seeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "Id", "description", "githubPage", "orginator", "rate", "solutionPage", "status", "title" },
                values: new object[] { 2, "opis...", "githubPage..", "orginator..", 3, "solutionPage", (byte)1, "title.." });

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "Id", "description", "githubPage", "orginator", "rate", "solutionPage", "status", "title" },
                values: new object[] { 3, "opis...", "githubPage..", "orginator..", 3, "solutionPage", (byte)1, "title.." });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
