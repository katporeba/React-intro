import PropTypes from 'prop-types'

//passing object props, and then {props.title} or just title
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Task tracker',
}

// making sure that you pass a string with propTypes
//it will render if its different type, but we will get a warning
Header.propTypes = {
    title : PropTypes.string,
}

export default Header
