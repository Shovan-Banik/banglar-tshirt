import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt,handleAddToCart}) => {
    const{picture,name,price,gender,_id}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="tshirt" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;