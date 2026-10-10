export{}
interface Taxable {
  applyTax(amount: number): number;
}
abstract class Worker {
  constructor(public name: string) {}

  abstract calculatePay(): number;

  getDetails(): string {
    return `Name: ${this.name}`;
  }
}

class HourlyWorker extends Worker {
  constructor(
    name: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(name);
  }

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

class SalariedWorker extends Worker implements Taxable {
  constructor(
    name: string,
    private monthlySalary: number
  ) {
    super(name);
  }

  calculatePay(): number {
    return this.monthlySalary;
  }
  applyTax(amount: number): number {
    return amount * 0.90;
  }
}
const hourly = new HourlyWorker("Alice", 20, 160);
console.log(hourly.getDetails());
console.log(`Gross Pay: $${hourly.calculatePay()}`);
const salaried = new SalariedWorker("Bob", 5000);
console.log(salaried.getDetails()); 
const grossPay = salaried.calculatePay();
console.log(`Gross Pay: $${grossPay}`); 
console.log(`Net Pay (After Tax): $${salaried.applyTax(grossPay)}`);