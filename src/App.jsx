import { useState, useEffect } from 'react';
import './App.css';
import Routing from './Routing';
import { useContext } from 'react';
import { Type } from "./Utility/action.type.jsx";
import { auth } from './Utility/firebase.js'
import { DataContext } from './Components/DataProvider/DataProvider';


function App () {
  const [{user}, dispatch] = useContext(DataContext);

  useEffect (()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null,
        });
      }
    });
  }, [])
  
  return (
    <>
      <Routing />
    </>
  )
}

export default App
