import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageOrders from '../../ManageOrders/ManageOrders';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MyOrders from '../../MyOrders/MyOrders';
import Pay from '../../Pay/Pay';
import Review from '../../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';


const drawerWidth = 220;

const Dashboard = (props) => {
    const {logOut, admin} = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
            <ListItem><Link to={`${url}`}><i className="fas fa-chart-line"></i> Dashboard</Link></ListItem>
          {!admin ? <div>

            <ListItem><Link to={`${url}/pay`}><i className="fas fa-shopping-basket"></i> Pay</Link></ListItem>

            <ListItem><Link to={`${url}/myOrders`}><i className="fas fa-calendar-check"></i> My Orders</Link></ListItem>

            <ListItem><Link to={`${url}/review`}><i className="fas fa-quote-right"></i> Review</Link></ListItem>
          </div>

            :

          <div>
            <ListItem><Link to={`${url}/manageOrders`}><i className="fab fa-accusoft"></i> Manage All Orders</Link></ListItem>

            <ListItem><Link to={`${url}/addProduct`}><i className="fas fa-plus-circle"></i> Add A Product</Link></ListItem>

            <ListItem><Link to={`${url}/makeAdmin`}><i className="fas fa-user-shield"></i> Make Admin</Link></ListItem>

            <ListItem><Link to={`${url}/manageProducts`}><i className="fas fa-tasks"></i> Manage Products</Link></ListItem>
          </div>}

          <ListItem><button onClick={logOut} className="btn btn-primary px-4 rounded-pill"><i className="fas fa-sign-out-alt"></i> Logout</button></ListItem>
      </List>
      <Divider />
      <List>
        <ListItem><Link to="/"><i className="fas fa-home"></i> Home</Link></ListItem>
        <ListItem><Link to="/about"><i className="fas fa-eject"></i> About</Link></ListItem>
        <ListItem><Link to="/contact"><i className="fas fa-file-signature"></i> Contact</Link></ListItem> 
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className="container">
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Dashboard
                </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    {/* only admin can see this */}
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                </Switch>
            </Box>
            </Box>
            

        </div>
    );
};

export default Dashboard;