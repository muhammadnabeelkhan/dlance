import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-grid-system';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class AuthCard extends React.Component {

    state = {
        toggle: true
    }

    _setToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    _handleKeyDown = (e, field) => {
        if (e.key === 'Enter') {
            if (field == 'signin') {
                this.props.onLogin()
            }
            if (field == 'signup') {
                this.props.onSignup()
            }
        }
    }

    _renderSignUp = () => {
        return <div className='window animated slideInDown' style={{ width: '550px', height: '600px' }} >
            <div className='content'>
                <div className='welcome'>Hello There!</div>
                <div className='subtitle'>To get started, please sign-up on Dwork </div>
                <div className='input-fields'>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <input type='text' placeholder='First name' className='input-line full-width'
                            value={this.props.signup_details.firstName} onChange={(e) => this.props.onChangeSignup(e, 'firstName')} ></input>
                        <input type='text' placeholder='Last name' className='input-line full-width'
                            value={this.props.signup_details.lastName} onChange={(e) => this.props.onChangeSignup(e, 'lastName')} ></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <input type='email' placeholder='Email' className='input-line full-width'
                            value={this.props.signup_details.email} onChange={(e) => this.props.onChangeSignup(e, 'email')} ></input>
                        <input type='text' placeholder='Username' className='input-line full-width'
                            value={this.props.signup_details.userName} onChange={(e) => this.props.onChangeSignup(e, 'userName')}></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <input type='password' placeholder='Password' className='input-line full-width'
                            value={this.props.signup_details.password} onChange={(e) => this.props.onChangeSignup(e, 'password')} ></input>
                        <input type='password' placeholder='Confirm Password' className='input-line full-width'
                            value={this.props.signup_details.confirmPassword} onChange={(e) => this.props.onChangeSignup(e, 'confirmPassword')}></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row",marginTop: '5px',
                    marginBottom: '5px' , paddingLeft: '25px', justifyContent: "center" }}>
                        <Dropdown options={this.props.accountlist} value={this.props.signup_details.accountType}
                            onChange={(option) => this.props._onSelect(option, 'signup')} placeholder="Select account type" />
                    </div>

                </div>

                <button className='ghost-round full-width' onClick={() => this.props.onSignup()}>Sign up</button>
                <div className='subtitle'>Already a member?</div>
                <button className='ghost-round full-width' onClick={() => this._setToggle()}>Sign in</button>
            </div>
        </div>
    }

    _renderSignIn = () => {
        return <div className='window animated fadeInDown' style={{ height: '500px', width: '360px' }}>
            <div className='content' >
                <div className='welcome'>Hello There!</div>
                <div className='subtitle'>Welcome back on Dwork </div>
                <div className='input-fields'style={{ paddingRight: '25px' }} >
                    <input type='email' placeholder='Email' className='input-line full-width' 
                        value={this.props.login_details.email} onChange={(e) => this.props.onChangeLogin(e, 'email')} ></input>
                    <input type='password' placeholder='Password' className='input-line full-width'
                        value={this.props.login_details.password} onChange={(e) => this.props.onChangeLogin(e, 'password')}
                        onKeyDown={(e) => this._handleKeyDown(e, 'signin')}
                    ></input>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center",
                        marginTop: '5px',marginBottom: '5px' , paddingLeft: '25px' }}>
                        <Dropdown options={this.props.accountlist} value={this.props.login_details.accountType}
                            onChange={(option) => this.props._onSelect(option, 'signin')} placeholder="Select account type" />
                    </div>
                </div>
                <button className='ghost-round full-width' onClick={() => this.props.onLogin()}>Sign in</button>
                <div className='subtitle'>Don't have an account?</div>
                <button className='ghost-round full-width' onClick={() => this._setToggle()} >Create Account</button>
            </div>
        </div>
    }

    render() {
        return (
            <Container fluid style={{ height: '100%' }} >
                <Row style={{ height: '100%', backgroundColor: '#1d2026' }} fluid>
                    <Col lg={3} sm={3} md={3}></Col>

                    <Col lg={6} sm={6} md={6}>
                        <div className='container1'>

                            {
                                this.state.toggle
                                    ? this._renderSignIn()
                                    : this._renderSignUp()
                            }

                        </div>
                    </Col>

                    <Col lg={3} sm={3} md={3}></Col>
                </Row>

            </Container>
        );
    }

}

export default AuthCard