import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({Title,onAdd,showAdd}) => {   

    return (
        <header className='header'>
            <h1 >{Title}</h1>
            <Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'}  onClick = {onAdd} />        
             
        </header>
    )

    }
//Header default tracker
Header.defaultProps =
{
    Title:'Task Tracker'
}

Header.propTypes =
{
    Title: PropTypes.string.isRequired,
}

// CSS in js
// const headingStyle =
// { color : 'red', backgroundColor : 'black' }

export default Header