using DataContext.Dtos;
using Microsoft.EntityFrameworkCore;

namespace DataContext
{
    class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions options) : base(options)
        {

        }

        DbSet<Item> Items { get; set; }
    }
}
