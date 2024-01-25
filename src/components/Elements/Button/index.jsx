/* eslint-disable react/prop-types */
const Button= (props) => {

    const {children='Default', classname = 'bg-black', onClick= () => {}, type='button'} = props
  
    return (
      // eslint-disable-next-line react/prop-types
      <button 
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} 
        type={type}
        onClick={onClick}
      >
          {children}
      </button>
    )
}

export default Button;