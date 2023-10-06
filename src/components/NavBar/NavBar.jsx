import React, { useContext } from 'react'
import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assites/images/logoo.svg';
import { tokenContext } from '../../context/tokenContext';
import { CartContent } from './../../context/cartContent';
export default function NavBar() {
  let { token,setToken } = useContext(tokenContext)
  let {numOfCartItems} = useContext(CartContent)
  let navigate = useNavigate()
  
  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate('/login')

  }



  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {token ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/products'}>Products</Link>
              </li>

            

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/categories'}>Catgories</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/brands'}>Brands</Link>
              </li>



            </ul> : ""}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <i className='fab fa-facebook-f mx-1'></i>
                <i className='fab fa-twitter mx-1'></i>
                <i className='fab fa-instagram mx-1'></i>
                <i className='fab fa-tiktok mx-1'></i>
                <i className='fab fa-youtube mx-1'></i>
                <i className='fab fa-linkedin mx-1'></i>



              </li>

              {token ? <><li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={logOut}>LogOut</button>
              </li> 
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to={'/wishlist'}>
                
                <i className=' fa-regular fa-heart'></i>
                <span className=' bg-info text-white p-1 rounded top-0 end-0'>{numOfCartItems}</span>
                </Link>
              </li>
                <li className="nav-item position-relative">
                <Link className="nav-link active" aria-current="page" to={'/cart'}>
                
                <i className=' fa fa-shopping-cart'></i>
                <span className=' bg-info text-white p-1 rounded position-absolute top-0 end-0'>{numOfCartItems}</span>
                </Link>
              </li> </>
              
              
              :
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/register'}>Register</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/login'}>Login</Link>
                  </li>
                </>
              }




            </ul>

          </div>
        </div>
      </nav>


    </>
  )
}
