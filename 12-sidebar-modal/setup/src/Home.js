import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
  //useContext returns the context "value" for the context you passed

  // const data = useContext(AppContext);
  // const { openSidebar, openModal, myData } = useGlobalContext();
  const { openSidebar, openModal } = useContext(AppContext);

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
