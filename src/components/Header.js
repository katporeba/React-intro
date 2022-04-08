import PropTypes from 'prop-types'
import Button from "./Button";

//passing object props, and then {props.title} or just title
const Header = ({ title, onAdd, showAdd }) => {
    // get information about the button onclick
    // const onClick = (e) => {
    //     console.log(e);
    // };
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close':'Add'}
                    onClick={onAdd}/>
        </header>
    );
}

Header.defaultProps = {
    title: 'Task tracker',
}

// making sure that you pass a string with propTypes
//it will render if its different type, but we will get a warning
Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// css in js
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header
