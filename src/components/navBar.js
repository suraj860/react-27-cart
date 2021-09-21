

import React from "react";
import items from './items';
import Shop from './shop';

// various states to store the initials
function NavBar(){
    const[count,  usecount] = React.useState(0);
    const[cart , setCart] = React.useState([]);
    const[cartDisplay , setDisplay] = React.useState(false);
    const[shop , setShop] = React.useState(false)
   

// update the cart count and adding items
    function updateItem(item){
        usecount(count + 1)
        item.text = true

        setCart([...cart, item])
        console.log(cart)
    }

    // ddisplay list of the items
    function qwerty(){
        setDisplay(!cartDisplay)    
    }

    function shopby(){
        setShop(!shop)
    }
   
// update the cart list after deleteing items
    function deleteItem(item){
       item.text = false
       usecount(count - 1)
       let itemData = [...cart]
       let result = itemData.filter((a)=> a.id !== item.id)
       setCart(result)  
    }
    return(
        <>
        {/* nav bar */}
        <div className = "navbar">
            <div className = "nav-items">
                <a href="#" className="brand">Start BootStrap</a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <button onClick={shopby} className="shopby">Shop<i className="fas fa-sort-down aa fa-1x"></i></button>
            </div>
            {/* cart */}
            <div className ="cart">
                <button  className ="cart-btn" style = {{display: "flex"}} onClick={qwerty} >
                    <i className="fas fa-shopping-cart cart-icon"></i>
                    <p className="cart-name"> Cart </p>
                    <div className="counter">
                        <p className="count">{count}</p>
                    </div>
                </button>
            </div>
        </div>

        {/* condition to show when the cart must show empty message and when to not */}
        {
            cartDisplay===true && cart.length>0 ? <div className="cartDiv">

            {cart.map((product)=>{
                return(
                    <div className="mainCart" key= {product.id}>
                        <div>
                            <img  className = "cartImage" src= {product.image} alt="bb"/>
                        </div>
                        <div className="infos" >
                            <p className ="prodTitle">{product.title}</p>
                            <p  className ="prodCost">{product.cost}</p>
                        </div>
                        <div className ="btnDiv">
                            <button className="removeBtn" onClick = {()=>deleteItem(product)}><i class="fas fa-minus"></i>
                            </button>
                        </div>
                   </div>
                )
            })}  
        </div> : cartDisplay===true && cart.length===0 ?  <div className="cartDiv">
            <p style ={{fontFamily:"Arial, Helvetica, sans-serif"}}> Your cart is empty </p>
        </div>:null
        }
       
       {/* shopby banner */}
        <div className="banner">
            <h1 className="title">Shop in style</h1>
            <p className="sub-title">with this shop homepage template</p>
        </div>

        {/* various cards */}
        <div className="parent">
           {items.map((value)=>{
              
           return(
               <div className="child" key={value.id}>
                    <div className="image">
                        <img src= {value.image} alt="aa"/>
                    </div>
                    <div className="info">
                        <div className="title-Div">
                             <h2 className="heading">{value.title}</h2>
                             {value.rating ?<p className="rating"> {value.rating}</p>: null}
                             <p className="costing">{value.cost}</p>
                        </div> 
                        <button className="addbtns" onClick={()=>updateItem(value)} disabled = {value.text}>{value.btn}</button>     
                    </div>
               </div>
            )        
           })}
           
       </div>
       {shop === true ? <Shop/> : null}

       {/* footer */}
       <div className="footer">
           <p>Copyright your website 2021</p>
       </div>
    </>
    )
}

export default NavBar;