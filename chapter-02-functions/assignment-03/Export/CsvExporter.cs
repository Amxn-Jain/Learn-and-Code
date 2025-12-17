using System.Text;
using CustomerSearch.Models;
using System.Collections.Generic;

namespace CustomerSearch.Export {
    public class CsvExporter {
        public string ExportToCSV(List<Customer> customers) {
            StringBuilder csvBuilder = new StringBuilder();
            foreach (var customer in customers) {
                csvBuilder.AppendLine($"{customer.CustomerID},{customer.CompanyName},{customer.ContactName},{customer.Country}");
            }
            return csvBuilder.ToString();
        }
    }
}