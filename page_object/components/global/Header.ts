import {$, $$, Component} from '@qavajs/po-playwright';

export default class Header extends Component {
    Navigations = $$('.nav-item');
    Search = $('.nav-item > a[href*=search]');
    Cart = $('.nav-item > a[href*=cart]');
}
