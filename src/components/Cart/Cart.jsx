import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>Add some products</p>
    }
    else{
        message= <div>
            <p>thank you for adding product</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length===1 ? 'blue': 'purple'}>Cart summary:{cart.length}</h2>
            <p className={`bold ${cart.length===3 ? 'green' : 'red'}`}>something</p>
            {
                cart.length>2 ? <span className='yellow'>Looks fine!!!Add more products</span>:<span>You are so poor</span>
            }
            {message}
            {
                cart.map(tshirt=><p
                     key={tshirt._id}
                     >{tshirt.name}
                     <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                     </p>)
            }
            {
                cart.length===7 && <h3>Discount Added</h3>
            }
            {
                cart.length===7 || <h3>Go for add 7 products and get discount!!!</h3>
            }
        </div>
    );
};

export default Cart;
/* conditional rendering 
1. use if-else to set a variable that will contain an element,component what ever you want
2. ternary operator: condition ? 'for true': 'for false'
3. Logical &&: (if the condition is true then the next thing will be execute)
4. Logical || : (if the condition is false then the next thing will be execute)
*/

/* Conditional CSS class
1.use ternary
2.ternary inside template string

*/