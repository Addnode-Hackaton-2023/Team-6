using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.DataStore
{
    public class ReceiversRepository
    {
        private readonly SustainaBytesDb _dbContext;

        public ReceiversRepository(SustainaBytesDb dbContext)
        {
            _dbContext = dbContext;
        }   

        public IEnumerable<Receiver> GetAllReceivers()
        {
            return _dbContext.Receivers
                .AsNoTracking()
                .ToList();
        }

        public Receiver? GetReceiver(int id)
        {
            return _dbContext.Receivers.FirstOrDefault(p => p.Id == id);
        }
    }
}
