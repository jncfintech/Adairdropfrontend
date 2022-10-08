import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from './actions/action';
import axios from './axios'
import { Fragment,useEffect} from 'react';
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import  Tasks from './Tasks.js'

function App() {
  const dispatch = useDispatch();
  const loggedUserData = useSelector((state) => state.userReducer.user);

  return (
    <div className="App">
    <ToastContainer />

    
    <Routes>
    <Route  path="/" element={ <Fragment><Tasks/> </Fragment>} />
   
   
    
    </Routes>
     
   
   

    </div>
  );
}

export default App;
