import {$, $$, Component} from '@qavajs/po-playwright';
export default class Product extends Component {
    Picture = $('picture > img');
    Title = $('p.text-black');
    Price = $('span.text-grey');
}
