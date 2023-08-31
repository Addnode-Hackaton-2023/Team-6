using Microsoft.EntityFrameworkCore;
using System.ComponentModel.Design;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class StatisticsRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public StatisticsRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }

        public double GetTotalWeight()
        {
            return _dbContext.Pickups.Sum(p => p.Weight);
        }
    }
}
