import Products from "./Components/Products/Products";
import Header from "./Components/Header/Header";
import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
const App=()=> {
  const [cartItems,SetCartItems]=useState(0)
  const handleAddItem=()=>{
    SetCartItems(cartItems+1)
  }
  const handleRemoveItem=()=>{
    SetCartItems(cartItems-1)
  }
  return (

    <Fragment>
      <Header count={cartItems}/>
      <Routes>
        <Route path="/:category?" element={<Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>}></Route>
        <Route path="/404" element={<h1>Not found!</h1>}></Route>
      </Routes>
      
    </Fragment>
    
  
  );
}

export default App;
