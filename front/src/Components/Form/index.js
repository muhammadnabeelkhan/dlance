import React, { Component } from 'react';
import Help from '../Help';
import Profile from '../Profile';
import Jobs from '../Jobs';
import MyJobs from '../MyJobs';
import AboutUs from '../AboutUs';
import Notifications from '../Notifications';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: false
        }
    }

    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    _renderContent = () => {

        if (this.props.name == 'Profile')
            return <Profile />

        if (this.props.name == 'View & Create Jobs')
            return <Jobs show={this.state.show} toggleShow={this._onToggle} />

        if (this.props.name == 'My Jobs')
            return <MyJobs />

        if (this.props.name == 'Notifications')
            return <Notifications />

        if (this.props.name == 'Help')
            return <Help />

        if (this.props.name == 'About Us')
            return <AboutUs />
    }

    _onToggle = () => {
        this.setState({ show: !this.state.show })
    }

    _renderJobButton = () => {
        if (this.props.Reducer.userInfo.account_type == 'Employer'
            && this.props.name == 'View & Create Jobs') {
            return <Button variant="contained" color="primary" onClick={this._onToggle}
                style={{ height: '10%', marginLeft: '15px', marginTop: '10px' }} >
                {this.state.show ? 'View Jobs' : 'Create Job'}
            </Button>
        }

    }

    render() {
        return (
            <main style={{ paddingTop: '20px' }}  >
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'baseline', justifyContent: 'space-between', marginTop: '20px'
                }} >
                    <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '10px', flexDirection: 'row' }}>
                        <h3 style={{ color: "black", fontWeight: 300 }}><strong>Home Page / </strong></h3>
                        <h6 style={{ color: "black", fontWeight: 400 }}>{this.props.name}</h6>
                    </div>
                    {
                        this._renderJobButton()
                    }

                </div>

                {
                    this._renderContent()
                }

            </main>
        );
    }
}


const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps, null)(Form)
