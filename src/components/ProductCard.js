import React ,{useState} from 'react'
import "./styles/ProductCard.css"
import Number from './Number';
const ProductCard = (props) => {
  const {product}=props;
  const [state,setState]=useState(1);
  const ar=["S","M","L","XL"];
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
			<h4 style={{marginTop:"10px",textAlign:"center"}}>select size</h4>
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
		<a class="card-image" href="https://github.com/Sam-Radnus" target="_blank" style={{backgroundImage:`url(${product.ImageURL})`}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg">
			<img src={"product"} alt="Psychopomp" />
		</a>
		<div class="card-description">
			<div className="product_title">
		<h4>{product.title}</h4> <span>{product.brand}</span>
		</div>
		<div style={{display:"flex",justifyContent:"space-around"}}>
			<h4 style={{color:"red"}}>${(product.price*state).toFixed(2)}</h4>
			<button className='add_to_cart'><p>Add to Cart</p></button>
     
			</div>
			{/* <p>{description.slice(0,20)}...</p> */}
		</div>
		
	</li>	
	</div>	
  )
}

export default ProductCard