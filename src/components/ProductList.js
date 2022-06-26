import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
  return (  
  props.productList.length >0 ?
    props.productList.map((product,i)=>{
      return <Product product={product} key={i} index = {i} increment = {props.increment} decrement = {props.decrement} deleteProduct={props.deleteProduct}/>
    })
    : <h1>No items in the cart</h1>
    
  )
}
