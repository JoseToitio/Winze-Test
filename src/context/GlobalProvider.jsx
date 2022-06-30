import React, { ReactNode, useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import Wine from '../interface/Wine.interface';
import {wineApi} from '../services/Api';


export default function GlobalProvider({ children }) {

  const [wine, setWine] =useState([]);
  const [cart, setCart] = useState([]);
  
  const requestApi = async () => {
    await wineApi().then((w) => setWine(w.items));
  }

  useEffect(() => {
    requestApi();
  }, [])
  return (
    <GlobalContext.Provider 
    value={
      {
      wine,
      setWine,
      cart,
      setCart,
    }
    }>
      {children}
    </GlobalContext.Provider>
  )
}