import { connect } from "react-redux"
import { addFriend } from "../../redux/actions"
import { StyledInput } from "./styles";

const Input = props => {
    const handleInput = (event) => {
        if (!event.target.value) return;
        if (event.key === 'Enter') {
            props.addNewFriend(event.target.value);
        }
    }
    return <StyledInput placeholder="Enter your friend's name" onKeyPress={handleInput} />
}

const mapDispatchToProps = dispatch => {
    return {
        addNewFriend: (name) => {
            dispatch(addFriend(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(Input);