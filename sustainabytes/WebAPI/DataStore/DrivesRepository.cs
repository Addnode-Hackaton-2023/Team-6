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
                .Include(x => x.Pickups.Where(p => p.GiverId == giverId))
                .Where(x => x.StartTime.Date >= fromDate && x.StartTime.Date <= toDate)
                .OrderBy(x => x.StartTime)
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Drive> GetDrivesByReceiver(int receiverId, DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                //.Include(x => x.Receiver)
                .Where(x => x.StartTime.Date >= fromDate && x.StartTime.Date <= toDate && x.ReceiverId == receiverId)
                .OrderBy(x => x.StartTime)
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Drive> GetDrivesByCompany(int companyId, DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups.Where(p => p.Giver.CompanyId == companyId))
                .Where(x => x.StartTime.Date >= fromDate && x.StartTime.Date <= toDate)
                .OrderBy(x => x.StartTime)
                .AsNoTracking()
                .ToList();
        }

        public IEnumerable<Drive> GetDrives(DateTime fromDate, DateTime toDate)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                .Where(x => x.StartTime.Date >= fromDate && x.StartTime.Date <= toDate)
                .OrderBy(x => x.StartTime)
                .AsNoTracking()
                .ToList();
        }

        public Drive? GetDrive(int id)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                .Include(x => x.Deviations)
                .FirstOrDefault(p => p.Id == id);
        }


        public IEnumerable<Drive> GetOngoingDriveByReceiver(int receiverId)
        {
            return _dbContext.Drives
                .Include(x => x.Pickups)
                .Where(x => x.EndTime == null && x.ReceiverId == receiverId)
                .AsNoTracking()
                .ToList();
        }

    }
}
