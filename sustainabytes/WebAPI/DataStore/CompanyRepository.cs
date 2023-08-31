using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class CompanyRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public CompanyRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Company> GetAllCompanies()
        {
            return _dbContext.Companies
                .AsNoTracking()
                .ToList();
        }
    }
}
