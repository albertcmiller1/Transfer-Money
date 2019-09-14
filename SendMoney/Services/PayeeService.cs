using SendMoney.Interfaces;
using SendMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SendMoney.Services
{
    public class PayeeService : IPayeeService
    {
        public List<Payee> Payees { get; set; } = new List<Payee> {
           new Payee("Walmart", 12345),
           new Payee("Target", 98364),
           new Payee("Homeland", 87134)
        };
    }
}

