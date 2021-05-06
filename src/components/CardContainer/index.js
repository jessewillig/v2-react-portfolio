import React from 'react';
import './style.css';

function CardContainer() {
    return (
        <div className="uk-container card-container">
            {PaymentResponse.children}
        </div>
    )
};

export default CardContainer;

