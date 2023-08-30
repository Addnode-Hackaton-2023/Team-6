using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class GiversRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public GiversRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }   

        public IEnumerable<Giver> GetAllGivers()
        {
            return _dbContext.Givers
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Giver> GetGiversByCompany(int companyId)
        {
            return _dbContext.Givers
                .Where(x => x.CompanyId == companyId)
                .AsNoTracking()
                .ToList();
        }
        
    }
}
