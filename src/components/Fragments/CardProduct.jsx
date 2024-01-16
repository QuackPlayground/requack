/* eslint-disable react/prop-types */
import Button from "../Elements/Button";

const CardProduct = (props) => {

    const {children} = props;

    return (
        <div className="flex flex-col justify-between w-full max-w-sm mx-2 bg-gray-800 border-gray-700 rounded-lg shadow">
            {children}        
        </div>
    )
}


const Header = (props) => {

    const {image} = props;

    return (
        <a href="#">
            <img 
                src={image} 
                alt="product" 
                className="p-8 rounded-t-lg"
            />
        </a> 
    )
}



const Body = (props) => {

    const {children, name} = props;

    return (
        <div className="h-full px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-white text-m">{children}</p>
            </a>
        </div>
    )
}


const Footer = (props) => {

    const {price} = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


export default CardProduct;