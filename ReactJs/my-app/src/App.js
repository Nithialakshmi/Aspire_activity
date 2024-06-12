// Title:ReactJs
// Author:Nithialakshmi.N
// starting Date: 04/06/2024
//LastModifiedDate:08/06/2024

// import React from 'react';
// import Welcome from './Welcome';
// import Hello from './Hello';
// // import Wish from './wish';
// import './App.css';
// // import AddToCart from './AddToCart';
// import ConditionalRendering from './ConditionalRendering';
// import GuestGreeting from './GuestGreeting';
// // import LoginControl from './LoginControl';
// import Greeting from './Greeting';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import ModifiedComponent from './ModifiedComponent';
// import UserGreeting from './UserGreeting';
// import Wishlabel from './Wishlabel';
// import Wishing from './Wishing';
// import LoginControl from './LoginControl';
// import Greeting from './Greeting';






// function App() {
//   return (
//     <div className="App">
//       <Welcome name=" Naresh " location=" Delhi">
//          React Basics
//       </Welcome>
//       <Hello username="Naresh" password="Naresh@123"> </Hello>
//       {/* <Wish></Wish> */}
//       <AddToCart></AddToCart>
//       <ConditionalRendering></ConditionalRendering>
//       <GuestGreeting></GuestGreeting>
//       <LoginControl></LoginControl>
//       <Greeting></Greeting>
//       <LoginButton></LoginButton>
//       <LogoutButton></LogoutButton>
//       <ModifiedComponent></ModifiedComponent>
//       <UserGreeting></UserGreeting>
//       <Wishlabel></Wishlabel>
//       <Wishing></Wishing>
      

//     </div>
//   );
// }

// export default App;




import {Route, BrowserRouter, Routes} from 'react-router-dom'
import  Nav  from './Nav';
import { Link } from 'react-router-dom';
import Home from './Home';
import  ContactUs  from './ContactUs';
import Product  from './Product';
import  Laptop  from './Laptop';
import ProductList from './ProductList';

import './App.css';
 function App(){
  return(
    <div> 
     <h1 style={{color:'red'}}>Hi everyone...</h1> 
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path = 'home' element = {<Home/>}></Route>
          <Route path = 'contactus' element = {<ContactUs/>}></Route>
          <Route path = 'product' element = {<Product/>}></Route>
          <Route path = '/product/laptop' element = {<Laptop/>}></Route>
        </Routes>
      </BrowserRouter>

      <br/>
      <ProductList/>
    </div>
  )
 }

 export default App;
