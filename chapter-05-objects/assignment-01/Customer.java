import payment.PaymentMethod;

public class Customer {
    private String firstName;
    private String lastName;

    private PaymentMethod preferredPayment;

    public Customer(String firstName, String lastName, PaymentMethod paymentMethod) {
        this.firstName = firstName;
        this.lastName = lastName;
        
        this.preferredPayment = paymentMethod;
    }

    public boolean pay(float amount) {
        return this.preferredPayment.processPayment(amount);
    }

    public String getFirstName(){ 
        return this.firstName; 
    }

    public String getLastName(){ 
        return this.lastName; 
    }
}