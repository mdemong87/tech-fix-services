const Stripe = require('stripe');
const stripe = Stripe(process.env.NEXT_PUBLIC_SECRECT_KEY);

const MakePayment = async (amount) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Image',
                    },
                    unit_amount: amount * 100, // Set the dynamic amount here
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failed`,
        });
        return session;

    } catch (error) {
        return error;
    }
}

module.exports = MakePayment;
