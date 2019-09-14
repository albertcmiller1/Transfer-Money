using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendMoney.Interfaces;
using SendMoney.Models;


namespace SendMoney.Controllers
{
    [Route("api/payment")]
    public class PaymentController : Controller
    {
        private IPaymentService _paymentService;

        public PaymentController(IPaymentService PaymentService)
        {
            _paymentService = PaymentService;
        }




       /* // GET: api/<controller>
        [HttpGet("get")]
        public IEnumerable<Payment> Get()
        {
            return _paymentService.Payments;
        }*/

        // GET: api/<controller>
        [HttpPost("add")]
        public object Post([FromBody] Payment newPayment)
        {
            _paymentService.Payments.Add(newPayment);
            return _paymentService.Payments;
        }
    }
}
