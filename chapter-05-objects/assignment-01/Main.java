
public class Main {
    public static void main(String[] args) {
        Paperboy paperboy = new Paperboy();

        Customer aman = new Customer("Aman", "Jain", new Wallet(696969.0f));
        paperboy.collectPayment(aman, 12.50f);
    }
}