using API.Db.Dtos;
using Microsoft.EntityFrameworkCore;

namespace DataContext
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions options) : base(options){ }

        public DbSet<Item> Items { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Item>().HasData(
                new Item() { Id = 1, description = "opis...", githubPage = "githubPage..", orginator = "orginator..", rate = 3, solutionPage = "solutionPage", status = 1, title = "title.." },
                new Item() { Id = 2, description = "opis...", githubPage = "githubPage..", orginator = "orginator..", rate = 3, solutionPage = "solutionPage", status = 1, title = "title.." },
                new Item() { Id = 3, description = "opis...", githubPage = "githubPage..", orginator = "orginator..", rate = 3, solutionPage = "solutionPage", status = 1, title = "title.." });
        }
    }
}
