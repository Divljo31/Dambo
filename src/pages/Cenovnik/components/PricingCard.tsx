import React from "react"

interface Props{
   
    title: string;
    description: string;
    price: string;
    bgColor: string;
}

const PricingCard: React.FC<Props> = ({ title, description, price, bgColor}) => {
    return( 
        <div className="card" style={{backgroundColor: bgColor}}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
}


export default PricingCard;