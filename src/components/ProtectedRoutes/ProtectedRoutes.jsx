import React from 'react'
import styles from './ProtectedRoutes.module.css';
import { useNavigate,Navigate } from 'react-router-dom';
export default function ProtectedRoutes(props) {



  let navigate = useNavigate()
  if(localStorage.getItem("userToken")) {
  return props.children
  }else{
  return <Navigate to={'/login'}/>
  }
 
}
