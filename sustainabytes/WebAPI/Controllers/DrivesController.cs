using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataStore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DrivesController : ControllerBase
    {
        private readonly ILogger<GiversController> _logger;
        private readonly DrivesRepository _drivesRepository;

        public DrivesController(ILogger<GiversController> logger,
            DrivesRepository drivesRepository)
        {
            _logger = logger;
            _drivesRepository = drivesRepository;
        }

        [HttpGet(Name = "GetDrivesByGiver")]
        public IEnumerable<Drive> GetDrivesByGiver(int giverId, DateTime fromDate, DateTime toDate)
        {
            return _drivesRepository.GetDrivesByGiver(giverId, fromDate, toDate);
        }

        [HttpGet(Name = "GetDrivesByReceiver")]
        public IEnumerable<Drive> GetDrivesByReceiver(int receiverId, DateTime fromDate, DateTime toDate)
        {
            return _drivesRepository.GetDrivesByReceiver(receiverId, fromDate, toDate);
        }

        [HttpGet(Name = "GetDrivesByCompany")]
        public IEnumerable<Drive> GetDrivesByCompany(int companyId, DateTime fromDate, DateTime toDate)
        {
            return _drivesRepository.GetDrivesByReceiver(companyId, fromDate, toDate);
        }

        [HttpGet(Name = "GetDrives")]
        public IEnumerable<Drive> GetDrives(DateTime fromDate, DateTime toDate)
        {
            return _drivesRepository.GetDrives(fromDate, toDate);
        }

        [HttpGet(Name = "GetDrive")]
        public Drive? GetDrive(int id)
        {
            return _drivesRepository.GetDrive(id);
        }

        [HttpGet(Name = "GetOngoingDriveByReceiver")]
        public IEnumerable<Drive> GetOngoingDriveByReceiver(int receiverId)
        {
            return _drivesRepository.GetOngoingDriveByReceiver(receiverId);
        }
    }
}
