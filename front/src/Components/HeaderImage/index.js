import React from 'react';

const headerImage = (props) => 
{
return(
    <header class="site-header">
    <div class="container">
        <div class="site-header-inner">
            <div class="brand header-brand">
                <h1 class="m-0">
                    <a href="#">
                        <img class="header-logo-image" src={props.source} alt="Logo"/>
                    </a>
                </h1>
            </div>
        </div>
    </div>
</header>

);

}

export default headerImage; 
