import './App.css';
import SearchBar from './components/Search';
import List from './components/List';
import Input from './components/Input';
import { connect } from 'react-redux';
import Modal, { Body, Footer, Header } from "./components/Modal";
import { Button } from "./components/Button";
import { deleteFriend, toggleModal } from './redux/actions';

function App({showModal, removeFriend, changeModalState, id}) {
  return (
    <div className="App">
      <SearchBar />
      <h2>Friends List</h2>
      <Input />
      <List />
      {showModal && <Modal>
            <Header>Are you sure to delete?</Header>
            <Body>You're about to delete a friend from your list. Hit Delete to proceed.</Body>
            <Footer>
                <Button clickHandler={changeModalState}>Cancel</Button>
                <Button clickHandler={() => { removeFriend(id); changeModalState(""); }} deleteType>Delete</Button>
            </Footer>
        </Modal>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
      showModal: state.showModal,
      id: state.modalForId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeFriend: (id) => { dispatch(deleteFriend(id)) },
      changeModalState: (id) => { dispatch(toggleModal(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
