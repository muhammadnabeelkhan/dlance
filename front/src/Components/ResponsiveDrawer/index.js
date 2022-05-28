import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Form from '../Form';
import ListElements from '../ListElements';
import AppbarTop from '../AppbarTop';
import HomePage from '../HomePage';
import NavbarDrawer from '../NavbarDrawer';
import Actions from '../../Redux/Actions';
import { connect } from 'react-redux'
import ls from 'local-storage'
import Web3 from 'web3'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
 

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    background: 'white',
    height: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,

    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,

    },

  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient( #50c878,#5FB5A7 )',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    display: 'block',
    justifyContent: 'flex-start',
    background: 'white',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    name: '',
    loaded: false,
    homeOPEN: false,
  };

  componentWillMount() {

    if (!this.props.Reducer.userInfo) {
      this.props.history.push('/dwork/signin')
    }

    if (this.props.Reducer.userInfo == null) {
      this.props.history.push('/dwork/signin')
    }
  }

_enableMetaMask = () => {
  let web3;
    let that = this

    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function (d) {
          // User has allowed account access to DApp...
          // console.log('meta mask succ ', d[0])
         that.props.Update_Metamask(d[0])
         ToastsStore.success('Meta mask authorized successfully')
        })
        .catch(err => {
          ToastsStore.error('Meta mask authorization is required !')
          // console.log('meta mask err 1 ', err)
        })
        
      } catch (e) {
        // User has denied account access to DApp...
        ToastsStore.error('Meta mask authorization is required !')
        // console.log('meta mask err ', e) 
      }
    } 
    else {
      alert('You have to install MetaMask !');
    }
}

  handleClick = () => {
    this.setState({ homeOPEN: !this.state.homeOPEN })
    this.setState({ name: '' });
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  onButtonClick = (name) => {
    this.setState({ name: name });
  }

  _renderDrawerContents = () => {
    const { classes } = this.props;

    return <div>
      <div className={classes.toolbar} />
      <Divider />
      <List style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <ListElements nested={classes.nested}
          clickFunction={this.onButtonClick}
          handleClick={this.handleClick}
          homeOPEN={this.state.homeOPEN} />
      </List>
      <Divider />
    </div>
  }

  _renderPageContent = () => {

    const { classes } = this.props;

    return <Form inputheight={classes.input} homeOPEN={this.state.homeOPEN}
      name={this.state.name}
      onsignout={this._onSignOut} />
  }

  _onSignOut = () => {
    // ls.set('userInfo',null)
    this.props.Clear()
    this.props.history.push('/dwork/signin')
  }


  render() {
    const { classes } = this.props;


    return (<div className={classes.root}>
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
 
      <CssBaseline />
      <AppbarTop classes={this.props} onClickEvent={this.handleDrawerToggle} />
      <NavbarDrawer classes={this.props} Container={this.props.container} openState={this.state.mobileOpen} onCloseDrawer={this.handleDrawerToggle}
        renderDrawer={this._renderDrawerContents} />
      {
        this.state.name !== ''
          ? this._renderPageContent()
          :
          <HomePage classes={this.props} username={this.props.Reducer.userInfo.username} 
          _onSignOut={this._onSignOut} _enableMetaMask={this._enableMetaMask} />
      }
      }

    
   </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    Clear: () => dispatch(Actions.Clear()),
    Update_Metamask: (accountNo) => dispatch(Actions.Update_Metamask(accountNo))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(ResponsiveDrawer))
