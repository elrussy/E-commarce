import React, { useContext, useEffect, useState } from 'react'
import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import Slider from "react-slick";
import { CartContent } from '../../context/cartContent';
import toast from 'react-hot-toast';


export default function Details() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true

  };






  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let { addToCart,setNumOfCartItems } = useContext(CartContent)


  let params = useParams()

  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setDetails(data.data)
    console.log(data);
    setIsLoading(false)
  }
  async function addCart(id) {
    let res = await addToCart(id)
    console.log(res,"hallo from add to cart");
    if(res.data.status == "success") {
     toast.success("Product added successfully");
     setNumOfCartItems(res.data.numOfCartItems)

    }else {
      toast.error("Product not added successfully")

    }

  }





  useEffect(() => {
    getProductDetails(params.id)
  }, [])

  return (
    <>
      <div className="container">
        {isLoading ? <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={"justify-content-center"}
          wrapperStyle=""
          visible={true}
        /> : <div className="row align-items-center">
          <div className="col-md-4">
            <Slider {...settings}>
              {details.images.map((ele,index) => <img className='w-100' key={index} src={ele} alt="" />)}
              </Slider>
              {/* <img className='w-100' src={details.imageCover} alt="" /> */}
          </div>
          <div className="col-md-8  text-center">
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>{details.category.name}</p>
            <div className="d-flex justify-content-between ">
              <h5>{details.price}EGP</h5>
              <h5><i className='fa fa-star'></i>{details.ratingsAverage}</h5>
            </div>


            <button onClick={() => addCart(details.id)} className='btn btn-info w-100 text-white'>Add To Cart</button>
          </div>
        </div>

        }

      </div>

    </>
  )
}
