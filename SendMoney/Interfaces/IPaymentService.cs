using SendMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SendMoney.Interfaces
{
    public interface IPaymentService
    {
        List<Payment> Payments { get; set; } 
    }
}
