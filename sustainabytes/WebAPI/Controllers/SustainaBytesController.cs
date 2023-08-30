using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataStore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SustainaBytesController : ControllerBase
    {
        private readonly ILogger<SustainaBytesController> _logger;
        private readonly GiverRepository _giverRepository;

        public SustainaBytesController(ILogger<SustainaBytesController> logger,
            GiverRepository giverRepository)
        {
            _logger = logger;
            _giverRepository = giverRepository;
        }

        [HttpGet(Name = "GetGivers")]
        public IEnumerable<Giver> GetGivers()
        {
            return _giverRepository.GetGivers();
        }
    }
}
