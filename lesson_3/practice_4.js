// Create a function factory to create payments
// Can take on of 3 forms as argument
// single service: { internet: 1000 } or { phone: 1000 }
// Double service: { internet: 2000, phone: 1000 }
// Amount property: { amount: 2000 }

// function should return an object that has the amount paid for each service
// total method that returns the payment total
// if amount is not present it should return the sum of the phone and internet
// service charges
// if amount is present return the value of that property

function createPayment(services = {}) {
  if (services.hasOwnProperty('phone') === false) services.phone = 0;
  if (services.hasOwnProperty('internet') === false) services.internet = 0;

  return {
    phone: services.phone,
    internet: services.internet,
    total: function() {
      if (services.hasOwnProperty('amount')) return services.amount;
      return this.phone + this.internet;
    },
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000