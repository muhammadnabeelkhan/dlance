import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
      background:'white',
      height:'100vh'
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
      display:'block',
      justifyContent:'flex-start',
      background:'white',
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });
  

const AppbarTop = (props) =>
{

 const   {classes} = props;

    return (
    
    <AppBar position="fixed" className={classes.appBar} style={{
      
      backgroundColor:'#242830'
      
      }}>
      
    <Toolbar style={{justifyContent:'center',
      alignItems:'center',display:'flex', flexDirection:'row'}} >
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={props.onClickEvent}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap  >
       Dwork
         
      </Typography>
    
    </Toolbar>

   
  </AppBar>);
}

// export default AppbarTop;

AppbarTop.propTypes = {
  
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(AppbarTop);