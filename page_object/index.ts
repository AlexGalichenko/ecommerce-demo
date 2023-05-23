import {$} from '@qavajs/po-playwright';
import Header from './components/global/Header';
import Product from './components/product/Product';
import AllProducts from './components/all_products/AllProducts';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import OrderCompleted from './components/order_completed/OrderCompleted';

export default class App {
    Header = $(new Header('header'));
    AllProducts = $(new AllProducts());
    Product = $(new Product());
    Cart = $(new Cart());
    Checkout = $(new Checkout());
    OrderCompleted = $(new OrderCompleted());
}
