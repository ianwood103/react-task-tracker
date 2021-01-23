import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button style={{backgroundColor: color }}
        onClick={onClick}
        className='btn'>{ text }</button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
