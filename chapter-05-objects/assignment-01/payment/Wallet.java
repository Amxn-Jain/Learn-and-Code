public class Wallet implements PaymentMethod {
    private float currentBalance;

    public Wallet(float initialBalance) {
        this.currentBalance = initialBalance;
    }

    @Override
    public boolean processPayment(float amount) {
        if (hasSufficientFunds(amount)) {
            deductFunds(amount);

            System.out.println("[Wallet] Payment processed: $" + amount);
            return true;
        }

        System.out.println("[Wallet] Insufficient cash.");
        return false;
    }

    private boolean hasSufficientFunds(float amount) {
        return this.currentBalance >= amount;
    }

    private void deductFunds(float amount) {
        this.currentBalance -= amount;
    }

    public float getBalance() {
        return this.currentBalance;
    }
}