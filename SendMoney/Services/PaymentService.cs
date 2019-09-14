using SendMoney.Interfaces;
using SendMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SendMoney.Services
{
    public class PaymentService : IPaymentService
    {
        public List<Payment> Payments { get; set; } = new List<Payment>();
    }
}
