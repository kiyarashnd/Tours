import React, { useState, useContext } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

//children is important in
const AppProvider = ({ children }) => {
  console.log('AppContext is : ', AppContext); //object
  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //for sidebar :
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //for modal :
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let myData = 'kiya';
  //in value we can pass every thing we want (here object):
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSiderbarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
        myData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook(must start with use)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
