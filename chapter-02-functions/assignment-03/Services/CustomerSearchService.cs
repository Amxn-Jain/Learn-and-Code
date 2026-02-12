using System.Linq;
using CustomerSearch.Models;
using System.Collections.Generic;

namespace CustomerSearch.Services {
    public class CustomerSearchService {
        private readonly List<Customer> customers;

        public CustomerSearchService(List<Customer> customers) {
            this.customers = customers;
        }

        public List<Customer> SearchByCountry(string country) {
            return customers
                .Where(customer => customer.Country.Contains(country))
                .OrderBy(customer => customer.CustomerID)
                .ToList();
        }

        public List<Customer> SearchByCompanyName(string company) {
            return customers
                .Where(customer => customer.CompanyName.Contains(company))
                .OrderBy(customer => customer.CustomerID)
                .ToList();
        }

        public List<Customer> SearchByContact(string contact) {
            return customers
                .Where(customer => customer.ContactName.Contains(contact))
                .OrderBy(customer => customer.CustomerID)
                .ToList();
        }
    }
}