import {$, $$, Component} from '@qavajs/po-playwright';
import Product from './Product';

export default class Cart extends Component {
    Products = $$(new Product('div.items-center.border-grey-light.py-2'));
    Checkout = $('a[href*=checkout]');
}
