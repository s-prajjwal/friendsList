import { debounce } from "lodash";
import { React } from "react";
import { connect } from "react-redux";
import { setSearchFor } from "../../redux/actions";
import { StyledSearchBar, StyledSearchWrapper } from "./styles";

const SearchBar = (props) => {
    const handleSearch = (event) => {
        debouncedSearch(event.target.value);
    }

    const debouncedSearch = debounce(function(val){
        props.setSearchText(val);
    },500);

    return <StyledSearchWrapper className="search-wrapper" >
        <StyledSearchBar onChange={handleSearch} placeholder="Search friend..." />
    </StyledSearchWrapper>
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchText: (val)=>{
            dispatch(setSearchFor(val));
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar); 