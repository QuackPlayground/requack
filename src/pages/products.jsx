/* eslint-disable react/jsx-key */
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp 1.000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda magni autem doloremque consequatur molestias quasi nobis corporis? Consectetur, perspiciatis."
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp 500.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda magni "
    },
    {
        id: 3,
        name: "Sepatu Adadong",
        price: "Rp 2.000.000",
        image: "/images/shoes-1.jpg",
        description: "Ini adalah sepatu baru dari brand Adadong"
    }
]

const email = localStorage.getItem('email');

const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href="/login";
    }

    return (
        <>
            <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
            
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
            <div className="flex justify-center w-100">
                <Counter />
            </div>
        </>
    )
}

export default ProductsPage;