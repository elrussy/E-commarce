import styles from './FeatureProducts.module.css';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContent } from '../../context/cartContent';
import { useContext } from 'react';
import toast from 'react-hot-toast';
export default function FeatureProducts() {

  let { addToCart,setNumOfCartItems } = useContext(CartContent)



  function getProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  let { data, isLoading, isFetching, refetch } = useQuery("featuredProducts", getProducts)




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








  return (
    <>
      <div className="container py-4 ">
        {isLoading ? <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={"justify-content-center"}
          wrapperStyle=""
          visible={true}
        /> : <div className="row ">

          {data?.data?.data.map((ele) => <div key={ele.id} className="col-md-2">
            <div className="product px-2 py-2 ">
              <Link to={'detalis/' + ele.id}>
                <img src={ele.imageCover} className='w-100' alt={ele.title} />
                <p>{ele.category.name}</p>
                <h3 className='h6'>{ele.title.split(" ").slice(0, 3).join(" ")}</h3>
                <div className="d-flex justify-content-between buttonSec">
                  <p>{ele.price}EGP</p>
                  <p>
                    <i className='fa fa-star'></i>
                    {ele.ratingsAverage}
                  </p>
                </div>
              </Link>

              <button onClick={() => addCart(ele.id)} className='buttonPurple w-100'> Add to cart</button>
            </div>
          </div>)}

        </div>}

      </div>

    </>
  )
}
