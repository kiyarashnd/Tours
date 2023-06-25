import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

//children is important in
const AppProvider = ({ children }) => {
  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
