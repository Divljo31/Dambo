import React from "react"

interface Props{
   
    title: string;
    description: string;
    price: string;
    bgColor: string;
}

const PricingCard: React.FC<Props> = ({ title, description, price, bgColor}) => {
    return(
       
       <div style={{margin: '10px',  border:'10px', textAlign: 'center',  backgroundColor: bgColor, padding: '10px', height:'300px', width: '300px', borderRadius:'10px'}}>
        <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>

    );
}


export default PricingCard;