import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< HEAD
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
    if(name)
    {
      // console.log(name)
      newProductList.push({
        name:name,
        price:price,
        quantity:0
      })
      setProductList(newProductList)

    }
  }



  return ( 
    
    <>
   
   <Navbar/>
   <AddItem addItem={addItem}/>

   <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <main className='container mt-5'>
   <ProductList productList={productList} increment={increment} decrement={decrement} deleteProduct={deleteProduct}/>
   </main>
   </div>
 
   <Footer totalPrice={totalPrice} reset = {reset}/>

   </>
=======
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> parent of e1e03dd (first commit)
  );
}


export default App;
