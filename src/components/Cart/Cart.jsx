import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css';
import { CartContent } from '../../context/cartContent';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
export default function Cart() {
const [cartDetails,setCartDetails] = useState({})

  let {getCart,deleteProductFromCart,updateProductQuantity,setNumOfCartItems} = useContext(CartContent)

async function removeItem(id) {
let {data} = await deleteProductFromCart(id)
console.log(data);
setNumOfCartItems(data.numOfCartItems)

// data.data.products.map(ele => {
//   if(ele.count == 0) {
//     removeItem(ele.product._id)
//   }
// })
setCartDetails(data)
}


async function updateCount(id,count) {
  let {data} = await updateProductQuantity(id,count)
  console.log(data);


  setCartDetails(data)
  
  }



  
  async function getCartDetails() {
  let {data} =  await getCart()
  console.log(data);
  setNumOfCartItems(data.numOfCartItems)
  setCartDetails(data)
  }


useEffect(() => {
  getCartDetails()
},[])


  return (
    <>
    {cartDetails?.data ?  <div className="container my-5 purple-ColorText">
      <div className=" mx-auto p-5  ">
        <h1 className=' mb-3'>Cart shop</h1>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className='h5'>Total price  : <span className=' text-danger'>{cartDetails.data.totalCartPrice}EGP</span></h3>
          <h3 className='h5'>Total cart items  : <span className=' text-danger'>{cartDetails.numOfCartItems}</span></h3>
        </div>
        {cartDetails.data.products.map((ele) =>   <div key={ele.product._id} className="row py-2 buttonBlue border-bottom">
          <div className="col-md-1">
            <img src={ele.product.imageCover} className=' w-100' alt="" />
          </div>
          <div className="col-md-11">
            <div className="d-flex justify-content-between">
              <div className="left-side">
                <h4>{ele.product.title}</h4>
                <p>{ele.price}EGP</p>
              </div>
              <div className="right-side">
                <button className='btn btn-warning' onClick={()=> updateProductQuantity(ele.product._id,ele.count -1)}>-</button>
                <span className=' mx-2'>{ele.count}</span>
                <button className='btn btn-warning' onClick={()=> updateProductQuantity(ele.product._id,ele.count +1)}>+</button>
              </div>


            </div>
            <button className='btn text-primary p-0' onClick={()=> removeItem(ele.product._id)}> <i className=' fa fa-trash'>Remove</i> </button>
          </div>
        </div> 
        )}
        
        <Link className='btn btn-dark w-100 mt-5' to={'/checkout'} >Checkout </Link>


      </div>
    </div> : <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={"justify-content-center"}
          wrapperStyle=""
          visible={true}
        /> }
   

    </>
  )
}
