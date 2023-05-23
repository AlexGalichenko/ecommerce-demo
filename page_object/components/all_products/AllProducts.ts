import {$, $$, Component} from '@qavajs/po-playwright';
import Product from './Product';
export default class AllProducts extends Component {
    Products = $$(new Product('article'));
}
