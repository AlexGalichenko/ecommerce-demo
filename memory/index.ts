export default class Constants {
    url = 'https://demo.elasticpath.com/';
    card = {
        number: '4242424242424242',
        cvc: '123',
        get expiryDate() {
            const date = new Date();
            date.setDate(date.getDate() + 60);
            return date.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit' });
        }
    };
    applyPromo = (total: string, promo: number) => {
        const numberTotal = parseFloat(total.replace('$', ''));
        return (numberTotal - (promo / 100) * numberTotal)
            .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
}
