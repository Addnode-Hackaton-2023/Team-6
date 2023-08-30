using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class GiverRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public GiverRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }   

        public IEnumerable<Giver> GetGivers()
        {
            return _dbContext.Givers
                .AsNoTracking()
                .ToList();
        }
    }
}
