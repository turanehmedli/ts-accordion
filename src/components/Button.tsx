type Props ={
    label:string,
    className:string,
    onClick:()=> void
}

const Button = ({label, onClick, className}:Props) => {
  return (
    <button className={className} onClick={onClick}>
        {label}
    </button>
  )
}

export default Button