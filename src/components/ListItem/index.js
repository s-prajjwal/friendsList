import { React } from "react";
import star from "../../assets/star.png";
import selectedStar from "../../assets/selected-star.png";
import deleteIcon from "../../assets/delete.png";
import { connect } from "react-redux";
import { toggleFavourite, toggleModal } from "../../redux/actions";
import { StyledListItem, StyledIcon, StyledName } from "./styles";

const ListItem = ({ name, id, favourite, toggleFav, changeModalState }) => {
    return <StyledListItem id={id} className="list-item" >
        <StyledName>{name}</StyledName>
        <StyledIcon onClick={() => { toggleFav(id) }} src={favourite ? selectedStar : star} />
        <StyledIcon onClick={() => { changeModalState(id) }} src={deleteIcon} />
    </StyledListItem>
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFav: (id) => { dispatch(toggleFavourite(id)) },
        changeModalState: (id) => { dispatch(toggleModal(id)) }
    }
}

export default connect(null, mapDispatchToProps)(ListItem)