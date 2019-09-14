using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SendMoney.Models
{
    public class Payment
    {
        public Payment(string name, double amount, string memo, string date)
        {
            paymentName = name;
            paymentAmount = amount;
            paymentMemo = memo;
            paymentDate = date;
        }



        public string paymentName { get; set; }
        public double paymentAmount { get; set; }
        public string paymentMemo { get; set; }
        public string paymentDate { get; set; }
    }
}

