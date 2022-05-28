import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    background:'#cccc',
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
    backgroundColor:'#242830'
    
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    display:'block',
    justifyContent:'flex-start',
    background:'#cccc',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


const NavbarDrawer = (props) =>
{
    const {classes, theme} = props;
    
    return(
        <nav className={classes.drawer} >
        
        <Hidden smUp implementation="css">
      
          <Drawer
            container={props.Container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.openState}
            onClose={props.onCloseDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
         
          >
      
            { props.renderDrawer() }
          </Drawer>
        </Hidden>
        
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
         
            variant="permanent"
            open
          >
             {  props.renderDrawer() }
         
          </Drawer>
        </Hidden>
       
      </nav>
    );
}

// export default NavbarDrawer;
NavbarDrawer.propTypes = {
  
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };
export default withStyles(styles, { withTheme: true })(NavbarDrawer);