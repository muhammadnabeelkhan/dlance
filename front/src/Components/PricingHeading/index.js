import React from 'react';


const PricingHeading = (props) => {
    return (
        <div class="pricing-header text-center">
            <h2 class="section-title mt-0">{props.title}</h2>
            <p class="section-paragraph mb-0">{props.description}</p>
        </div>
    );
}

export default PricingHeading;