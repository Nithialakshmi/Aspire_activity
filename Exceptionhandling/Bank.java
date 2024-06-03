import java.util.*;

class Bank {
    private double balance;

    public Bank(double initialBalance) {
        this.balance = initialBalance;
    }

    public void withdraw(double amount) {
        try {
            if (amount <= 0) {
                throw new IllegalArgumentException("Withdrawal amount must be positive.");
            }
            try {
                if (amount > balance) {
                    throw new InsufficientFundsException("Insufficient funds. Your balance is " + balance);
                }
                balance -= amount;
                System.out.println("Withdrawal successful. Remaining balance: " + balance);
            } catch (InsufficientFundsException e) {
                System.out.println(e.getMessage());
            }
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        Bank myBank = new Bank(1000.0);
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the amount to withdraw: ");
        try {
            double amount = scanner.nextDouble();
            myBank.withdraw(amount);
        } catch (InputMismatchException e) {
            System.out.println("Invalid input. Please enter a numeric value.");
        } finally {
            scanner.close();
        }
    }
}

class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}
