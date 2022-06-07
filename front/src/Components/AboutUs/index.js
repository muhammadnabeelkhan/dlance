import React, { Component } from 'react' 


class AboutUs extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


 

    _renderDetails = () => {

        return <>
            <p style={{ color: '#000', width: '80vw', fontSize: '16px', marginTop: '20px' }}>
Our team consists of three final year computer science students, Muhammad Nabeel Khan, Muhammad Hazique Khatri and Zohaib Anwar from University of Karachi, Pakistan.
We developed this platform as our Internet Application Development project. According to proposal, we developed a decenterlized market place, peer-to-peer
and a transparent platform which will benefit its users. dLance is built on top of Ethereum blockchain and IPFS. We have tried to use the best
 practices in developing this platform, still there is room for improvement. We welcome feedbacks to make this platform even more robust.
</p>


            <h6 style={{ color: '#000', fontSize: '18px', fontWeight: '450', marginTop: '-1px' }}>Our Mission:</h6>          



            <p style={{ color: '#000', width: '80vw', fontSize: '16px' }}>
            Our mission is to overcome the problems present in the current popular freelance platforms. In order to 
            solve the problems, we decided to present a distributed freelance platform, hence the name dLance. 
            The freelancer get the whole share of the work he has done without any deduction in the amount or any platform charges, except gas fee, which is
             used to make a transaction. This gas fee is very low. The transactions are made transparent by 
             utilizing the ethereum blockchain. A smart contract lives on the blockchain, which takes care of the money and connection between the 
             freelancer and the employer. The whole platform is free of cost and no amount is charged at any point in the platform. We recommend to go through 
             the "Help" section to get the better understanding of dLance.
            </p>

        </>
    }



    render() {


        return (<div style={{paddingLeft: '5px', paddingRight: '5px'}}  >
            <h4 style={{ color: '#000' }}>About Team dLance</h4>
 


{
    this._renderDetails()
}

        </div>
        )
    }
}

export default AboutUs
