import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
  
  const [data, setData] = useState([]);

  const fetchAllProducts = async() => {
    try{
      const res = await axios.get('http://127.0.0.1:8000/getFour/')
      setData(res.data);
    }catch(error){
      console.log(error)
    }
  }

  return (<DataContext.Provider value={{data, setData, fetchAllProducts}}>
    {children}
  </DataContext.Provider>
  );
}

