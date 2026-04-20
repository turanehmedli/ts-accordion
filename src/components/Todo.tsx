type Props ={
    label:string
    className:string
    description:string
}

const Todo = ({label, className, description}:Props) => {
  return (
    <div className={className}>
        {label} {description}
    </div>
  )
}

export default Todo