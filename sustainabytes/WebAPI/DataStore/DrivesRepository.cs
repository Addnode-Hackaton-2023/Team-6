using Microsoft.EntityFrameworkCore;
using System.ComponentModel.Design;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class DrivesRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public DrivesRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Drive> GetDrivesByGiver(int giverId, DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                    .ThenInclude(x => x.Giver)
                .Where(x => x.StartTime.Date >= fromDate && x.EndTime.Date >= toDate && x.Pickups.Any(p => p.GiverId == giverId))
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Drive> GetDrivesByReceiver(int receiverId, DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                //.Include(x => x.Receiver)
                .Where(x => x.StartTime.Date >= fromDate && x.EndTime.Date >= toDate && x.ReceiverId == receiverId)
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Drive> GetDrivesByCompany(int companyId, DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                    .ThenInclude(x => x.Giver)
                .Where(x => x.StartTime.Date >= fromDate && x.EndTime.Date >= toDate && x.Pickups.Any(p => p.Giver.CompanyId == companyId))
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Drive> GetDrives(DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                .Where(x => x.StartTime.Date >= fromDate && x.EndTime.Date >= toDate)
                .AsNoTracking()
                .ToList();
        }

    }
}
