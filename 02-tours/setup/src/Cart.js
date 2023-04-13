import { Link } from 'react-router-dom'

const Cart = ({ newTours2 }) => {
    let sum = 0;
    const persian = Intl.NumberFormat("fa")
    console.log(persian.format(2312));
    return (
        <section className='items'>
            {newTours2.map((tour) => {
                let price = Number(tour.price.replaceAll(',', ""))
                sum += price;
                return (
                    <p key={tour.id} className='liClass'>
                        - {tour.name} is <span>{tour.price}$</span>
                    </p>
                )
            })}
            <p className='totalPrice'>total price is {Intl.NumberFormat().format(sum)} $</p>
            <Link to="/" className="backHome">Back to home</Link>
        </section>
    );
}

export default Cart;