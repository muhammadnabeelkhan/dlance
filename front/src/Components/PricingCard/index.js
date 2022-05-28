import React from 'react';

const PricingCard = (props) => {


    let array = ['Become a freelancer or client', 'Post or find jobs',
        'Create invoices after successful completion of project', 'Send feedback about client or freelancer']

    const mappedCard = array.map((value) => {

        return <li>
            <span> {value} </span>
        </li>
    })

    return (
        <div class="pricing-table-main">
            <div class="pricing-table-header pb-24">
                <div class="pricing-table-price"><span class="pricing-table-price-currency h2">{props.sign}</span><span class="pricing-table-price-amount h1">{props.money}</span><span class="text-xs">{props.month}</span></div>
            </div>
            <div class="pricing-table-features-title text-xs pt-24 pb-24">{props.description}</div>
            <ul class="pricing-table-features list-reset text-xs">

                {mappedCard}


            </ul>
        </div>
    );
}

export default PricingCard;