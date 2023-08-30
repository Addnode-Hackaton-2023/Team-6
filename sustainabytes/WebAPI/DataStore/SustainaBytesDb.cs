using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class SustainaBytesDb : DbContext
    {
        public SustainaBytesDb(DbContextOptions<SustainaBytesDb> options)
        : base(options) { }

        public DbSet<Giver> Giver => Set<Giver>();
    }
}
