import React, { useState, useEffect } from 'react';
import useForms from './hooks/useForms';
import Header from './components/Header';
import Main from './components/Main';
import Glazing from './components/Glazing';
import Decoration from './components/Decoration';
import Works from './components/Works';
import Guarantees from './components/Guarantees';
import Payment from './components/Payment';
import Sale from './components/Sale';
import Contacts from './components/Contacts';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import ModalPopup from './components/ModalPopup';
import ModalEngineer from './components/ModalEngineer';
import ModalCalc from './components/ModalCalc';
import ModalCalcProfile from './components/ModalCalcProfile';
import ModalCalcEnd from './components/ModalCalcEnd';

function App() {
  const [modalState, setModalState] = useState({});
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth() + 'px';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
    document.body.style.paddingRight = 0;
  };

  useForms(modalState);

  const getScrollbarWidth = () => {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };

  return (
    <>
      <Header openModal={openModal} />
      <Main openModal={openModal} />
      <Glazing openModal={openModal} />
      <Decoration openModal={openModal} />
      <div className="overlay" style={{ display: activeModal ? 'block' : 'none' }}></div>
      <Works />
      <Guarantees />
      <Payment />
      <Sale openModal={openModal} />
      <Contacts />
      <Feedback />
      <Footer />

      <ModalPopup isOpen={activeModal === 'popup'} closeModal={closeModal} />
      <ModalEngineer isOpen={activeModal === 'engineer'} closeModal={closeModal} />
      <ModalCalc 
        isOpen={activeModal === 'calc'} 
        closeModal={closeModal} 
        openModal={openModal} 
        modalState={modalState} 
        setModalState={setModalState} 
      />
      <ModalCalcProfile 
        isOpen={activeModal === 'calcProfile'} 
        closeModal={closeModal} 
        openModal={openModal} 
        modalState={modalState} 
        setModalState={setModalState} 
      />
      <ModalCalcEnd 
        isOpen={activeModal === 'calcEnd'} 
        closeModal={closeModal} 
        modalState={modalState} 
        setModalState={setModalState} 
      />
    </>
  );
}

export default App;