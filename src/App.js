import React, {useState} from 'react';
import Modal from "./components/modal/Modal";
import modal from "./components/modal/Modal";

const App = () => {

    const [modalActive,setModalActive] = useState(false)

    const modalActiveHandler =() => {
        setModalActive(!modalActive)
    }

    return (
        <div className={'app'}>
            <div>
                <button onClick={modalActiveHandler}>click me</button>
            </div>
            <Modal modalActive={modalActive} modalActiveHandler={modalActiveHandler}>
                <div>
                    <input type="text" placeholder={'name'}/>
                </div>
                <div>
                    <input type="text" placeholder={'surname'}/>
                </div>
                <div>
                    <button>send</button>
                </div>
            </Modal>
        </div>
    );
};

export default App;