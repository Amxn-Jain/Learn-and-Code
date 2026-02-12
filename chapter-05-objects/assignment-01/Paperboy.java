public class Paperboy {
    public void collectPayment(Customer customer, float paymentAmount) {
        System.out.println("Paperboy: Asking customer for $" + paymentAmount);
        
        boolean isPaid = customer.pay(paymentAmount);
        
        if (isPaid) {
            System.out.println("Paperboy: Thank you!\n");
        } else {
            System.out.println("Paperboy: I'll come back later.\n");
        }
    }
}