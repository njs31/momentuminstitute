import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RequestCallContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const RequestCallContext = createContext<RequestCallContextType | undefined>(undefined);

export const useRequestCall = () => {
  const context = useContext(RequestCallContext);
  if (context === undefined) {
    throw new Error('useRequestCall must be used within a RequestCallProvider');
  }
  return context;
};

interface RequestCallProviderProps {
  children: ReactNode;
}

export const RequestCallProvider: React.FC<RequestCallProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <RequestCallContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </RequestCallContext.Provider>
  );
};