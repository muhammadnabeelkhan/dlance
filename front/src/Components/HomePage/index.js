import React from 'react';
import Spinner from '../Spinner';
import { withRouter } from 'react-router'
import { hslToRgb } from '@material-ui/core';

const HomePage = (props) => {
  return (
    <main  style={{paddingTop:'20px', background: "linear-gradient(150deg, #2C3E50 30%, #000000 90%)"}}> 
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',marginTop:'50px' }}>
      <p onClick={()=>props._enableMetaMask()}
          style={{ color: '#E74C3C', textDecoration: 'underline', cursor: 'pointer', marginRight:'20px',fontWeight: 200 }}>
            <strong>Enable Metamask</strong></p>

        <p onClick={()=>props._onSignOut()}
          style={{ color: '#E74C3C', textDecoration: 'underline', cursor: 'pointer', fontWeight: 200 }}>
            <strong>Sign Out</strong></p>
      </div>
      <div style={{ textAlign: 'center' }} > 
        
            <Spinner />
            <h5 style={{ color: 'White', fontWeight: 200 }}>
              <strong> Welcome To dLance, {props.username} 😃</strong>
              </h5>
       
      </div>
    </main>
  );
}

 
export default withRouter(HomePage);
//rgba(254, 247, 102, 0.5)