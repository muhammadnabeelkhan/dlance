import React from 'react';
import PricingHeading from '../PricingHeading';
import PricingButton from '../PricingButton';
import PricingCard from '../PricingCard';

const Pricing = () =>
{

return(

    <section class="pricing section">
    <div class="container-sm">
        <div class="pricing-inner section-inner">
            <PricingHeading title = "Unlimited for all"  
            description = "dLance does not take any commision from client or freelancers. Only the amount of gas fee is deducted for the completion of transaction"/>
            
            <div class="pricing-tables-wrap">
                <div class="pricing-table">
                    <div class="pricing-table-inner is-revealing">
                        <PricingCard sign = "" money = "" month = "" description = "What you will get" />
                        {/* <PricingButton title = "Pre order now"/> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


);

}

export default Pricing;