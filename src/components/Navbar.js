import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./styles/Navbar.scss"
import { RiMenuLine } from 'react-icons/ri';
import { CgSearch } from 'react-icons/cg';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [showCart,setShowCart]=React.useState(false);
  const cartItems=useSelector((state)=>state.cart.cartItems);
  const resizeHeaderOnScroll = () => {
    setHasScrolled((prevHasScrolled) => {
      if (
        !prevHasScrolled &&
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20)
      ) {
        return true;
      }

      if (
        prevHasScrolled &&
        document.body.scrollTop < 4 &&
        document.documentElement.scrollTop < 4
      ) {
        return false;
      }

      return prevHasScrolled;
    });
  };

 
  React.useEffect(() => {
    window.addEventListener('scroll', resizeHeaderOnScroll);

    return () => window.removeEventListener('scroll', resizeHeaderOnScroll);
  }, []);
  const closeSidebar=()=>{
    setShowCart(false);
  }
  const navStyles = hasScrolled
    ? `nav hasScrolled`
    : "nav";

  return (
    <>
    {
      showCart &&   <Sidebar  closeCart={closeSidebar} />
      }
    <nav className={navStyles}>
      
      <div className="container_top">
        <Link className='info_link'>
       
             
        </Link>
       &nbsp;
        <Link className="login_link">
          Login
        </Link>
  
      </div>
      <div className={"container_bottom"}>
      <Link to="/" style={{textDecoration:"none"}}>
           <h2> Hippo</h2>
        </Link>
        <ul  className={"links"}>
          
         
          <li style={{marginBottom:"30px !important"}}>
            <Link className={"link"} to="/collections/t-shirts">
              T-shirts
            </Link>
          </li>
          <li>
            <Link
              className={"link"}
              to="/collections/hoodies-sweatshirts"
            >
              Hoodies
            </Link>
          </li>
          <li>
            <Link className={"link"} to="/collections/accessories">
              Accessories
            </Link>
          </li>
        </ul>
        <ul style={{lineHeight:"none"}} className="icons_menu" >
        <li className="search_icon disabled-link" >
            <CgSearch size="2em" />
          </li>
          <li className={"cart_icon"}   onClick={()=>{
            if(!cartItems || cartItems.length===0){
              alert("Please first add some items to the Cart");
              return;
            }
          setShowCart(true);
        }} >
           <svg style={{lineHeight:"none"}} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor"></path></svg>
          </li>
          <li className="mobile_icon">
            <RiMenuLine onClick={()=>{

            }} />
          </li>

            
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
