using Microsoft.EntityFrameworkCore;
using System.ComponentModel.Design;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class Statistics
    {
        public double Weight { get; set; }
        public int FoodBags { get; set; }
        public int Price { get; set; }

        public int Co2 { get; set; }
    }

    public class StatisticsRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public StatisticsRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }

        public Statistics GetTotalStatistics()
        {
            double weight = _dbContext.Pickups.Sum(p => p.Weight);
            return new Statistics()
            {
                Weight = weight,
                FoodBags = (int)Math.Round(weight / 5),
                Price = (int)Math.Round(weight * 50),
                Co2 = (int)Math.Round(weight * 2),
            };
        }
    }
}
