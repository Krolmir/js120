// Update the create invoice function to add payments

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total: function() {
      return this.phone + this.internet;
    },

    // Create a function that takes an object as an argument and returns
    // the subtracts the value or values from the called upon object

    // if we have an object { phone: 1000, internet:4000 }
    // payment = { internet:2000 }

    // change internet ot internet - 2000 . if internet < 0 take the remainder
    // and subtract it from phone.

    // if payment goes below 0 return a console log telling they should get
    // a refund

    // let total = payment.amount || 0 + payment.phone || 0 + payment.internet || 0
    // subtract this.phone - total
    // if this.phone < 0
    //   total = 0 - this.phone
    // subrtract this.internet - total
    // if this.internet < 0
    //  total = 0 - this.internet
    //  console.log(`You paid to much. Your refund will be ${total}`)

    addPayment: function(payment) {
      let total = (payment.amount || 0) + (payment.phone || 0) + (payment.internet || 0);
      this.phone -= total;
      if (this.phone < 0) {
        total = 0 - this.phone;
        this.phone = 0;
      }
      this.internet -= total;
      if (this.internet < 0) {
        total = 0 - this.internet;
        console.log(`You paid to much. Your refund will be ${total}`)
      }
    },

    amountDue: function() {
      console.log(this.phone + this.internet);
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

function createPayment(services = {}) {
  // if (services.hasOwnProperty('phone') === false) services.phone = 0;
  // if (services.hasOwnProperty('internet') === false) services.internet = 0;
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total: function() {
      if (this.amount !== 0) return this.amount;
      return this.phone + this.internet;
    },
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayment(payment2);
invoice.addPayment(payment3);
// invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0