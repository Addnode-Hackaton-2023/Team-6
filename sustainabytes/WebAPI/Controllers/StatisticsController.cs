using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataStore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private readonly ILogger<StatisticsController> _logger;
        private readonly StatisticsRepository _statisticsRepository;

        public StatisticsController(ILogger<StatisticsController> logger,
            StatisticsRepository statisticsRepository)
        {
            _logger = logger;
            _statisticsRepository = statisticsRepository;
        }

        [HttpGet(Name = "GetTotalWeight")]
        public Statistics GetTotalWeight()
        {
            return _statisticsRepository.GetTotalWeight();
        }
    }
}
