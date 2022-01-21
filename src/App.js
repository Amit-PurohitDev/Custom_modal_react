import { useState } from 'react';
import './App.css';
import Modal from './modal/modal';

const RandomComponent = () => {
  const [openModal, setOpenModal] = useState(false)
  return(
    <div>
      <h1>Click to open a Modal</h1>
      <button className='openModalBtn' onClick={ () => setOpenModal(true) }>CLICK TO OPEN</button>
      {openModal && <Modal  closeModal={setOpenModal} 
                            title="Tile section"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore in reiciendis voluptas omnis enim. Impedit atque repellendus tenetur asperiores dignissimos ?"
                            cancle="CANCLE"
                            continue="CONTINUE"
      />}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <RandomComponent />
    </div>
  );
}

export default App;
