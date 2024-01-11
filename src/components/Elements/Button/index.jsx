/* eslint-disable react/prop-types */
const Button= (props) => {

    const {children='Default', variant = 'bg-black'} = props
  
    return (
      // eslint-disable-next-line react/prop-types
      <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
          {children}
      </button>
    )
}

export default Button;