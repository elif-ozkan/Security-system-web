using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.DbModels
{
    public class DbDatabaset : DbContext
    {
        public DbDatabaset(DbContextOptions<DbDatabaset> options) : base(options) { }

        public DbSet<ComputerProducts> ComputerProducts { get; set; }
        public DbSet<Categories> Categories { get; set; }

    }
}
