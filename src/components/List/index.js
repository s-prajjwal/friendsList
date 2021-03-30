import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import ListItem from "../ListItem";
import { StyledListWrapper, StyledActionBtns, StyledSelect, StyledToggle, StyledKnob } from "./styles";

const List = (props) => {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(4);
    const [filteredList, setFilteredList] = useState([]);
    const [sort, setSort] = useState(false);

    useEffect(() => {
        const searchList = props.friends.filter(friend => friend.name.includes(props.searchFor));
        let res = searchList;
        if (sort) {
            res = searchList.sort((a, b) => b.favourite ? 1 : -1);
        }
        setFilteredList(res);
    }, [props.friends, props.searchFor, sort]);

    return <StyledListWrapper className="list-wrapper">
        {filteredList.slice(page * perPage, (page + 1) * perPage).map(friend => <ListItem key={friend.id} {...friend} />)}
        {filteredList.length > perPage && <StyledActionBtns className="action-btn">
            <button disabled={page === 0} onClick={() => { setPage(page - 1) }}>{"< "}Prev</button>
            <button disabled={Math.floor(filteredList.length / perPage) === page} onClick={() => { setPage(page + 1) }}>Next{" >"}</button>
        </StyledActionBtns>}
        <div style={{ marginTop: 20 }}>
            <label>Items per Row :</label>
            <StyledSelect onChange={(e) => { setPerPage(e.target.value) }} name="perPage" >
                <option value={4} >4</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </StyledSelect>
        </div>
        <div style={{ marginTop: 20, display: "flex" }}>
            <label style={{alignSelf: "center"}}>Sort by favourites</label>
            <StyledToggle onClick={() => { setSort(!sort) }} className="ToggleSwitch">
                <StyledKnob on={sort} />
                <p>{sort ? "ON" : "OFF"}</p>
            </StyledToggle>
        </div>
    </StyledListWrapper>
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        searchFor: state.searchFor
    }
}

export default connect(mapStateToProps, null)(List);