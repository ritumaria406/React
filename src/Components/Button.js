import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
   
    return (
        <div>
             <button 
             onClick={onClick}
             className='btn' style={{ backgroundColor: color }}>
                 {text}</button>
                
        </div>
    )
}

//This is used if we use Button component but dont add color and text attribute
Button.defaultProps =
{
    color : 'SteelBlue',
    text : 'Bye'
}

Button.prototype =
{
    color : PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func.isRequired

}

export default Button
