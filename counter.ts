// Define a type for our counter state
type CounterState = {
  count: number;
};

// Counter class with TypeScript types
class Counter {
  private state: CounterState;

  constructor(initialCount: number = 0) {
    this.state = { count: initialCount };
  }

  // Method to increment count
  increment(amount: number = 1): void {
    this.state.count += amount;
  }

  // Method to decrement count
  decrement(amount: number = 1): void {
    this.state.count -= amount;
  }

  // Get current count
  getCount(): number {
    return this.state.count;
  }
}

// Usage example
const myCounter = new Counter(5);
console.log(`Initial count: ${myCounter.getCount()}`); // Initial count: 5

myCounter.increment(3);
console.log(`After increment: ${myCounter.getCount()}`); // After increment: 8

myCounter.decrement(2);
console.log(`After decrement: ${myCounter.getCount()}`); // After decrement: 6
