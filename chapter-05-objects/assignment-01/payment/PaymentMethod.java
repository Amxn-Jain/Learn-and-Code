public interface PaymentMethod {
    /**
     * Attempts to process a payment for the specified amount.
     * @param amount The amount to charge.
     * @return true if successful, false if funds insufficient/failed.
     */
    boolean processPayment(float amount);
}