import React from 'react';
import Title from '../Title';
import Services from '../Services';
import Pricing from '../Pricing';
// import Contact from '../Contact';


const MainBody = () => {
    return (
        <main>
            <Title title="Dwork"
                description="A blockchain based freelancing platform that gives freelancers 100% of what they earn"
                buttonText="get started" />

            <Services />
            <Pricing />
            {/* <Contact text = "Still not convinced on buying?"
            buttonText = "Get in touch"/> */}
        </main>
    );
}
export default MainBody;