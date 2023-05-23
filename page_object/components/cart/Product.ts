import {$, $$, Component} from '@qavajs/po-playwright';

export default class Product extends Component {
    Title = $('div.w-full.justify-between > div > div.text-black');
    Remove = $('button.text-black > svg');
}
