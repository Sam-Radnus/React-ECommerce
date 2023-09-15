import React ,{useEffect, useState} from 'react'
import "./styles/ProductCard.css"
import { addToCart,removeFromCart } from "./../components/Actions/Actions";
import { useSelector,useDispatch } from "react-redux";
import Number from './Number';
const ProductCard = (props) => {
  const {product}=props;
  const [state,setState]=useState(1);
  const dispatch=useDispatch();
  const [isAdded,setAdded]=useState(false);
  const cartItems=useSelector(state=>state.cart.cartItems);
  const ar=["S","M","L","XL"];
  useEffect(()=>{
     const temp=cartItems.some((item)=>item.title===product.title);
	 if(temp){
		setAdded(true);
	 }
	 else{
		setAdded(false);
	 }
  },[cartItems.length])
  useEffect(()=>{

  },[isAdded])
  const incNum=()=>{
	setState((prevState)=>{
		return prevState+1;
	})
  }
  const decNum=()=>{
	setState((prevState)=>{
		return prevState-1;
	})
  }
 
  return (
	<div>
	<li class="card">
		 <div className="tool">
			<h4 id="tool_head" style={{marginTop:"10px",textAlign:"center"}}>select size</h4>
			<div style={{marginTop:"-5px",marginLeft:"10px",display:"flex",gap:"2px"}}>
				{
			          product.sizes_available && product?.sizes_available.map((size,index)=>{
                         return product.sizes_available.indexOf(ar[index])!==-1?<button className='size_btn'>{size}</button>:<button disabled style={{cursor:"default"}} className='size_btn'>{ar[index]}</button>
					})
				}
				
			</div>
			<div style={{display:"flex",justifyContent:"space-around"}}>
			
			</div>
			
		</div> 
		<div className="discount">
			<span>-{product.discount}%</span>
		</div>
		<a class="card-image"  target="_blank" style={{backgroundImage:`url(${product.ImageURL})`}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg">
			<img src={"product"} alt="Psychopomp" />
		</a>
		<div class="card-description">
			<div className="product_title">
		<h4 style={{height:"35px"}}>{product.title}</h4> <span>{product.brand}</span> <span>{product.gender}</span>
		{/* Colors Available:{
			product.colors_available.map((color)=>{
				return <span><div style={{backgroundColor:{color},height:"10px",width:"10px"}}></div>{color}</span>
			})
		} */}
		</div>
		<div style={{display:"flex",marginLeft:"-12px",marginTop:"5px",justifyContent:"space-around"}}>
			<h4 style={{marginLeft:"0 !important",marginTop:"10px",color:"red"}}>${(product.price*state).toFixed(2)}</h4>
			{ isAdded ?
			<button onClick={()=>{
				dispatch(removeFromCart(product))
			}} className='add_to_cart'>Remove</button>
		   :
		   <button onClick={()=>{
			   
				dispatch(addToCart(product))
			}} className='add_to_cart'>Add Item</button>
		     }
			</div>
			{/* <p>{description.slice(0,20)}...</p> */}
		</div>
		
	</li>	
	</div>	
  )
}

export default ProductCard