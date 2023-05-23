import {$, Component} from '@qavajs/po-playwright';

export default class Checkout extends Component {
    FullName = $('input[id="customer.name"]');
    Email = $('input[id="customer.email"]');
    EnterAddressManually = $(`//button[text()="Enter address manually"]`);
    FirstName = $('input[id="shipping_address.first_name"]');
    LastName = $('input[id="shipping_address.last_name"]');
    AddressLine1 = $('input[id="shipping_address.line_1"]');
    AddressLine2 = $('input[id="shipping_address.line_2"]');
    City = $('input[id="shipping_address.city"]');
    County = $('input[id="shipping_address.county"]');
    PostCode = $('input[id="shipping_address.postcode"]');
    Country = $('input[id="shipping_address.country"]');

    ContinueToPayment = $('//button[text()="Continue to payment"]');

    CardFrame = $('#payment iframe');
    CardNumber = $('input[name="cardnumber"]');
    ExpiryDate = $('input[name="exp-date"]');
    CVC = $('input[name="cvc"]');

    ConfirmAndPay = $('//button[contains(text(),"Confirm and Pay")]');

    PromoCode = $('input#code');
    AddPromoCode = $('//button[text()="Add code"]');
    Subtotal = $('.text-black.text-2xl.font-semibold');

}
