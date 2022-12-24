import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency !== 'number') {
      throw TypeError('currency is a number');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('currency is a number');
    }
    this._amount = amount;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
