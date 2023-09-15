import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './styles/Shop.css'
import "./styles/Slider.less"
import { FaDollarSign } from 'react-icons/fa';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { data } from "./assets/products";
import { TransgenderTwoTone } from '@mui/icons-material';

function valuetext(value) {
  return `${value}°C`;
}

const Shop = () => {
  const [products,setProducts]=useState([]);
  const [clothingItems,setClothingItems]=useState(data);
   // Initial range values
  const [factor,setFactor]=useState(-1);
  const [value,setValue]=useState([0,150])
  const [categories,setCategories]=useState(["Sports","Fashion","Party","Casual"])
  const [brands,setBrands]=useState(["Nike","Adidas","Peter England","Reebok"]);
  const [genders,setGenders ]=useState(["Male","Female","Unisex"]);
  const [ratings,setRatings]=useState([]);
  const [sort,setSort]=useState(0);
  const [discount,setDiscount]=useState(0);
  // Function to filter by price range
  const cartItems=useSelector((state)=>state.cart.cartItems)
function filterByPriceRange(minPrice, maxPrice) {
  console.log(minPrice);
  console.log(maxPrice);

  if(!minPrice && !maxPrice){
    return ;
  }
  const temp=clothingItems.filter(item => item.price >= value[0].toFixed(2) && item.price <= value[1].toFixed(2) && parseInt(item.discount)>=discount && categories.indexOf(item.category)!==-1 && brands.indexOf(item.brand)!==-1 && genders.indexOf(item.gender)!==-1 );
  setProducts(temp);
}


// Function to filter by color
function filterByColor(color) {
  return products.filter(item => item.colors_available.includes(color));
}

// Function to filter by brand



// Function to sort by date (ascending)
function sortByDateAscending() {
  const temp= products.slice().sort((a, b) => new Date(a.date_of_release) - new Date(b.date_of_release));
  setProducts(temp);
}

// Function to sort by price (high to low)
function sortByPriceHighToLow() {
  const temp= products.slice().sort((a, b) => b.price - a.price);
  setProducts(temp);
}

// Function to sort by price (low to high)
function sortByPriceLowToHigh() {
  const temp=products.slice().sort((a, b) => a.price - b.price);
  setProducts(temp);
}
function sortByRatings(){
  const temp=products.slice().sort((a, b) => a['ratings_100+'] - b['ratings_100+']);
  setProducts(temp);
}
// // Example usage:
// const filteredItemsByPrice = filterByPriceRange(range[0],range[1]);
// const filteredItemsByColor = filterByColor("Black");
// const filteredItemsByBrand = filterByCategory("FashionCo");
// const filteredItemsByRating = filterByRating(4.5);
// const filteredItemsByGender = filterByGender("Men");
// const sortedItemsByDate = sortByDateAscending();
// const sortedItemsByPriceHighToLow = sortByPriceHighToLow();
// const sortedItemsByPriceLowToHigh = sortByPriceLowToHigh();
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    console.log(newValue)
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - 0), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + 0)]);
    }
    filterByPriceRange(value[0],value[1]);
  };
  
useEffect(()=>{
  console.log(sort);
   if(sort===0){
    sortByDateAscending();
   }
   else if(sort===1){
    sortByPriceHighToLow();
   }
   else if(sort===2){
    sortByPriceLowToHigh()
   }
   else{
    sortByRatings();
   }
},[sort])
  useEffect(()=>{
    console.log("category");
    
    filterByPriceRange(value[0],value[1]);
    
  },[categories.length])
  useEffect(()=>{
    filterByPriceRange(value[0],value[1]);
  },[genders.length])
  useEffect(()=>{
    console.log("brand");
  
    filterByPriceRange(value[0],value[1]);
   
  },[brands.length])
  useEffect(()=>{
    console.log(products);
    filterByPriceRange(value[0],value[1]);
   },[products.length])
   useEffect(()=>{
     console.log(value);
     filterByPriceRange(value[0],value[1]);
   },[value])
   useEffect(()=>{
      filterByPriceRange(value[0],value[1]);
   },[discount])
 
  function toggleCategory(el){
    if(categories.indexOf(el)===-1){
     setCategories((prev)=>{
        return [...prev,el]    
     })
    }
    else{
      setCategories((prev)=>{
          return prev.filter((category)=>category!==el)
      })
    }
  }
  function toggleBrands(el){
    if(brands.indexOf(el)===-1){
      setBrands((prev)=>{
        return [...prev,el]    
     })
    }
    else{
      setBrands((prev)=>{
          return prev.filter((brand)=>brand!==el)
      })
    }
    console.log(brands);
  }
  function toggleGenders(el){
    if(genders.indexOf(el)===-1){
      setGenders((prev)=>{
        return [...prev,el]    
     })
    }
    else{
      setGenders((prev)=>{
          return prev.filter((brand)=>brand!==el)
      })
    }
    console.log(brands);
  }
  
  return (
  <div className="main" onClick={(e)=>{
    console.log(e.target.className)
   
    const el=["help","helper","help_container","slide","MuiBox-root css-4oqe9z" ,"helper_sorter","btn_child","criteria_btn","criteria_btn_selected"]
   if(el.indexOf(e.target.className)!==-1 ||e.target.nodeName==="SPAN"){
    return ;
   }

   setFactor(-1);
  }}>
  
    <div className='products'>
     {
        products && products?.map((product)=>{
           return  <ProductCard product={product}/>  
         })
     }
     
    </div>
    { 
    <div className="helper_sorter" style={{ bottom:factor>=0?"10%":"-20%",display:"grid"}}>
  
    <div className="help_container">
   
   
      
    { factor===0 &&
    <div className="help">
        <Box textAlign='center' mt={4}>
       <p style={{lineHeight:0}}> Range: ${value[0]} - ${value[1]} </p> {/* Display the range values with dollar sign */}
      </Box>
         <Box sx={{ width: 300 }}>
    <Slider
      getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange1}
      onClick={handleChange1}
      min={0}
      max={150} 
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
      
      sx={{
        color: 'black', 
        "& .MuiSlider-thumb": {
          backgroundColor: 'black', // Set the thumb color to black
        },
        "& .MuiSlider-track": {
          backgroundColor: 'black !important', // Set the track color to black
        },
        "& .MuiSlider-rail": {
          backgroundColor: 'gray', // Set the color of the track outside the range to gray
        }
      }}
    />
  </Box> 
    </div>
       }
      
   </div>
   { factor===1 &&
    <div className="help">
     
       <div className="criteria">
       <button onClick={()=>{
        toggleCategory("Sports")}} className={`criteria_btn${categories.indexOf("Sports")!==-1?"_selected":""}`}>Sports</button>
           <button  onClick={()=>{
        toggleCategory("Fashion")}} className={`criteria_btn${categories.indexOf("Fashion")!==-1?"_selected":""}`}>Fashion</button>
           <button  onClick={()=>{
        toggleCategory("Party")}} className={`criteria_btn${categories.indexOf("Party")!==-1?"_selected":""}`}>Party</button>
           <button  onClick={()=>{
        toggleCategory("Casual")}} className={`criteria_btn${categories.indexOf("Casual")!==-1?"_selected":""}`}>Casual</button>
        </div>
        
    </div>
   }
{ factor===2 && 
    
        <div className="help">
       
       <div className="criteria">
       <button className="criteria_btn">Tan</button>
           <button className="criteria_btn">Grey</button>
           <button className="criteria_btn_selected">White</button>
           <button className="criteria_btn_selected">Black</button>
        </div>
        
    </div>
}
{ factor===3 &&
 <div className="help">
    
    <div className="criteria">
       <button onClick={()=>{
        toggleBrands("Nike")}} className={`criteria_btn${brands.indexOf("Nike")!==-1?"_selected":""}`}>Nike</button>
           <button  onClick={()=>{
        toggleBrands("Adidas")}} className={`criteria_btn${brands.indexOf("Adidas")!==-1?"_selected":""}`}>Adidas</button>
           <button  onClick={()=>{
        toggleBrands("Peter England")}} className={`criteria_btn${brands.indexOf("Peter England")!==-1?"_selected":""}`}>Peter England</button>
           <button  onClick={()=>{
        toggleBrands("Reebok")}} className={`criteria_btn${brands.indexOf("Reebok")!==-1?"_selected":""}`}>Reebok</button>
        </div>
      </div>
}
{ factor===4 && 
 <div className="help">

        <div className="criteria">
        <button onClick={()=>{
        toggleGenders("Male")}} className={`criteria_btn${genders.indexOf("Male")!==-1?"_selected":""}`}>Male</button>
           <button  onClick={()=>{
        toggleGenders("Female")}} className={`criteria_btn${genders.indexOf("Female")!==-1?"_selected":""}`}>Female</button>
           <button  onClick={()=>{
        toggleGenders("Unisex")}} className={`criteria_btn${genders.indexOf("Unisex")!==-1?"_selected":""}`}>Unisex</button>
           
        </div>
    </div>
}
{ factor===5 && 
 <div className="help">
  
  <div className="criteria">
  <button onClick={()=>{
        setDiscount(10);
       }} className={`criteria_btn${discount>=10?"_selected":""}`}>10%</button>
       <button onClick={()=>{
        setDiscount(25);
       }} className={`criteria_btn${discount>=25?"_selected":""}`}>25%</button>
       <button onClick={()=>{
        setDiscount(50);
       }} className={`criteria_btn${discount>=50?"_selected":""}`}>50%</button>
         
        </div>
 </div>
}
{  factor===6 &&
 <div className="help">
  <div className="criteria">
       <button onClick={()=>{
        setSort(0);
       }} className={`criteria_btn${sort===0?"_selected":""}`}>Price:Low-High</button>
       <button onClick={()=>{
        setSort(1);
       }} className={`criteria_btn${sort===1?"_selected":""}`}>Price:High-Low</button>
       <button onClick={()=>{
        setSort(2);
       }} className={`criteria_btn${sort===2?"_selected":""}`}>Newest</button>
        <button onClick={()=>{
        setSort(3);
       }} className={`criteria_btn${sort===3?"_selected":""}`}>Ratings</button>
         
        </div>
 </div>
}  
    </div>
}
    <div className='helper'>
        <div onClick={()=>{
          setFactor(0);
        }}className='helper_btn'><button  className="btn_child">Price</button></div>
        <div onClick={()=>{
setFactor(1);
        }}className='helper_btn'><button className="btn_child">Category</button></div>
        
        <div onClick={()=>{
setFactor(3);
        }}className='helper_btn'><button className="btn_child">Brand</button></div>
        <div onClick={()=>{
setFactor(4);
        }}className='helper_btn'><button className="btn_child">Gender</button></div>
        <div onClick={()=>{
setFactor(5);
        }}className='helper_btn'><button className="btn_child">Discount</button></div>
        <div onClick={()=>{
setFactor(6);
        }}className='helper_btn'><button className="btn_child">Sort By:Newest</button></div>
        
    </div>
   
    </div>
  )
}

export default Shop