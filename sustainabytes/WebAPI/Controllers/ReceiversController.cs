using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataStore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ReceiversController : ControllerBase
    {
        private readonly ILogger<ReceiversController> _logger;
        private readonly ReceiversRepository _receiverRepository;

        public ReceiversController(ILogger<ReceiversController> logger,
            ReceiversRepository receiversRepository)
        {
            _logger = logger;
            _receiverRepository = receiversRepository;
        }

        [HttpGet(Name = "GetAllReceivers")]
        public IEnumerable<Receiver> GetAllReceivers()
        {
            return _receiverRepository.GetAllReceivers();
        }
    }
}
