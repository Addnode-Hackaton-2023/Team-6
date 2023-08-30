using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataStore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GiversController : ControllerBase
    {
        private readonly ILogger<GiversController> _logger;
        private readonly GiversRepository _giverRepository;

        public GiversController(ILogger<GiversController> logger,
            GiversRepository giverRepository)
        {
            _logger = logger;
            _giverRepository = giverRepository;
        }

        [HttpGet(Name = "GetAllGivers")]
        public IEnumerable<Giver> GetAllGivers()
        {
            return _giverRepository.GetAllGivers();
        }

        [HttpGet(Name = "GetGiversByCompany")]
        public IEnumerable<Giver> GetGiversByCompany(int companyId)
        {
            return _giverRepository.GetGiversByCompany(companyId);
        }
    }
}
