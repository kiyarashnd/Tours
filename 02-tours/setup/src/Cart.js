import { Link } from 'react-router-dom'

const Cart = ({ newTours2 }) => {
    let sum = 0;
    const persian = Intl.NumberFormat("fa")
    console.log(persian.format(2312));
    return (
        <section className='main-footer'>
            {newTours2.map((tour) => {
                let price = Number(tour.price.replaceAll(',', ""))
                sum += price;
                return (
                    <div key={tour.id}>
                        <p className='para'>
                            {tour.name} is {tour.price}$
                        </p>
                    </div>
                )
            })}
            <p>total price is {Intl.NumberFormat().format(sum)}</p>
            <Link to="/">Back to home</Link>
        </section>
    );
}

export default Cart;