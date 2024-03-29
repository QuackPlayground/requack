/* eslint-disable react/jsx-key */
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { useEffect, useState } from "react";
import { useRef } from "react";
// import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda magni autem doloremque consequatur molestias quasi nobis corporis? Consectetur, perspiciatis."
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 500000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda magni "
    },
    {
        id: 3,
        name: "Sepatu Adadong",
        price: 2000000,
        image: "/images/shoes-1.jpg",
        description: "Ini adalah sepatu baru dari brand Adadong"
    }
]

const email = localStorage.getItem('email');

const ProductsPage = () => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
             }, 0)
             setTotalPrice(sum);
             localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href="/login";
    }

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }


    // useRef
    // hampir sama dengan useState tapi tidak re-render component
    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    // const handleAddToCartRef = (id) => {
    //     cartRef.current = [...cartRef.current, {id, qty: 1}]
    //     localStorage.setItem("cart", JSON.stringify(cartRef.current));
    // }

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart])


    return (
        <>
            <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="flex flex-wrap w-3/4">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}/>
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart = {handleAddToCart}/>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4 -ml-20">
                    <h1 className="mb-2 ml-5 text-3xl font-bold text-blue-600">Cart</h1>
                    <table className="-ml-20 text-left border-separate table-auto border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td><b>Rp {totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="flex justify-center mt-5 mb-5">
                <Counter></Counter>
            </div> */}
        </>
    )
}

export default ProductsPage