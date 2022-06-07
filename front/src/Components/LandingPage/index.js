import React, { Component } from 'react';
import './style.css';
import Logo from '../../Assets/images/l1.png';

import HeaderImage from '../HeaderImage';
import MainBody from '../MainBody';
import Footer from'../Footer';

class Landingpage extends Component {




render(props){
    console.log('checking props ',props)

    return (

        <body class="is-boxed has-animations"  >
            <div class="body-wrap" >
                <HeaderImage source = {Logo}/>
                <MainBody/>
                <Footer  image = {Logo} alter = "Logo" copyright = "2022 dLance, all rights reserved"/>
            </div>
        </body>

    );
}
    
}

export default  Landingpage;