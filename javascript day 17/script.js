// // level 3
class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = incomes;
      this.expenses = expenses;
    }
    getFullName() {
      let fullName = this.firstname + " " + this.lastname;
      return fullName;
    }
    get getIncomes() {
      return this.incomes;
    }
    get getExpenses() {
      return this.expenses;
    }
    set setIncomes(incomes) {
      this.incomes.push(incomes);
    }
    set setExpenses(expenses) {
      this.expenses.push(expenses);
    }
  
    getInfo() {
      let info = `${this.fullName} has an income of ${this.incomes} and expenses of ${this.expenses}`;
    }
    totalIncome() {
      let sum = 0;
      let arr = [];
      for (let i = 0; i < this.incomes.length; i++) {
        arr.push(Object.values(this.incomes[i]));
      }
      for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
      }
  
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }
    totalExpenses() {
      let sum = 0;
      let arr = [];
      for (let i = 0; i < this.expenses.length; i++) {
        arr.push(Object.values(this.expenses[i]));
      }
      for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
      }
  
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }
  }
  let qiyamat = new PersonAccount(
    "qiyamat",
    "Al-siddiq",
    [{ a: 2500 }, { b: 5000 }],
    [{ a: 300 }, { b: 800 }]
  );
  qiyamat.setIncomes = { c: 2700 };
  console.log(qiyamat);