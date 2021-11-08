const Field = ({ label, value,  onChange }) => {
    return(
        <div className='field'> 
            <label>{`${ label }: `}</label>
            <input type='text' value={ value } onChange={ onChange }/>
        </div>
    )
}

export default Field;