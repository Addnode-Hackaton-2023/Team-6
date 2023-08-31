using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataStore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ILogger<CompanyController> _logger;
        private readonly CompanyRepository _companyRepository;

        public CompanyController(ILogger<CompanyController> logger,
            CompanyRepository companyRepository)
        {
            _logger = logger;
            _companyRepository = companyRepository;
        }

        [HttpGet(Name = "GetAllCompanies")]
        public IEnumerable<Company> GetAllCompanies()
        {
            return _companyRepository.GetAllCompanies();
        }

    }
}
