using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SendMoney.Models
{  
    public class Payee
    {
        public Payee(string name, int num)
        {
            payeeName = name;
            payeeAccount = num;
        }

       
        public string payeeName { get; set; }
        public int payeeAccount { get; set; }
    }
}
