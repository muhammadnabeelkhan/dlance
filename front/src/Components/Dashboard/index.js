import React from 'react';
import { ToastsStore } from 'react-toasts';
import ResponsiveDrawer from '../ResponsiveDrawer'
import SigninForm from '../SigninForm';
import Routing from '../../App';
import { Route, Link, BrowserRouter as Router ,Switch} from 'react-router-dom'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: false,
      failed: false,
    };
  }

  onsignout = () => {
    this.setState({ success: false });
    this.setState({ email: '', password: '' });
  }

  buttonsubmit = () => {
    if ('admin' === this.state.email && '123' === this.state.password) {

      this.setState({ success: true });
    }
    else {
      ToastsStore.error("UserName or Password doesn't match !");
      this.setState({ failed: true });
    }
  }

  onEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  onPassword = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div style={{
        background: "#242830",
        height: '100vh'
      }}>


{this.props.children}

        {/* {
          (this.state.success === false)
            ?
            <SigninForm classes={this.props} onEmailChange={this.onEmail} onPasswordChange={this.onPassword} onSubmit={this.buttonsubmit} state={this.state.failed} />
            : 
            <ResponsiveDrawer onsignout={this.onsignout} success={this.state.success} />
        } */}
      </div>
    );
  }
}

export default SignIn;