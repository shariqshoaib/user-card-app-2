const Button = ({ icon, handleClick, id=null}) => {
    return (
        <span>
            <button id={id} onClick={ handleClick }>
                { icon }
            </button>
        </span>
    )
}

export default Button;