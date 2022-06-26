import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import React,{useState} from 'react';
import AddItem from './components/AddItem';

function App() {
const products =[
    {
      price:90000,
      name:"iphone 10",
      quantity:0
    },
    {
      price:9000,
      name:"redmi 10",
      quantity:0
    
    }
  ]
  let [productList , setProductList] = useState(products);
  let [totalPrice , setTotalPrice] = useState(0);

  const increment = (index)=>{
    let newProductList = [...productList]
    let newTotalPrice = totalPrice;
    newProductList[index].quantity++
    newTotalPrice += newProductList[index].price
    setProductList(newProductList) 
    setTotalPrice(newTotalPrice)
  }
  const decrement = (index)=>{
    let newProductList = [...productList]
    let newTotalPrice = totalPrice;
    if(newProductList[index].quantity > 0 )
    {
      newProductList[index].quantity--
      newTotalPrice -= newProductList[index].price

    }
    setProductList(newProductList);
    setTotalPrice(newTotalPrice)

  }
  const reset = ()=>{
    let newProductList = [...productList]
    newProductList.map((product)=>{
      product.quantity=0

    }
    )
    setProductList(newProductList)
    setTotalPrice(0)
  }
  const deleteProduct = (index) =>{
    let newProductList = [...productList]
    let newTotalPrice = totalPrice
   
    newTotalPrice -= newProductList[index].price*newProductList[index].quantity
      newProductList.splice(index,1)
    
    setProductList(newProductList);
    setTotalPrice(newTotalPrice)

  }
  const addItem = (name,price)=>{
    let newProductList = [...productList]
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setProductList(newProductList)

  }



  return (
    
   <>
   <Navbar/>
   <AddItem addItem={addItem}/>
    <main className='container mt-5'>
   <ProductList productList={productList} increment={increment} decrement={decrement} deleteProduct={deleteProduct}/>
   </main>
   <Footer totalPrice={totalPrice} reset = {reset}/>

   </>
  );
}

export default App;
