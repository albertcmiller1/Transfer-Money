using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendMoney.Interfaces;
using SendMoney.Models;


namespace SendMoney.Controllers
{
    [Route("api/payee")]
    public class PayeeController : Controller
    {
        //definetion in our memory
        private IPayeeService _payeeService;

        //dependency injected constructor
        public PayeeController (IPayeeService PayeeService)
        {
            _payeeService = PayeeService;
        }

        // GET: api/<controller>
        [HttpGet("get")]
        public IEnumerable<Payee> Get()
        {
            return _payeeService.Payees;
        }

        // GET: api/<controller>
        [HttpPost("add")]
        public object Post([FromBody] Payee newPayee)
        {
            _payeeService.Payees.Add(newPayee);
            return _payeeService.Payees;
        }    
    }
}
