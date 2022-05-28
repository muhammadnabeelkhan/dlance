import React from 'react';

const PricingButton = (props) => {
    return (
        <div class="pricing-table-cta mb-8">
<a class="button button-primary button-shadow button-block" href="#">{props.title}</a>
        </div>
    );
}

export default PricingButton;