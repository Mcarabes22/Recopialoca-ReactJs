
import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <AppBar>
            <Toolbar className='toolbar-navbar' sx={{ display: "flex", justifyContent: "space-around", backgroundColor: "black"}}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> {}
                    <Typography variant="h6">
                        Recopialoca
                    </Typography>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> {}
                    <Button sx={{ color: 'white' }}>
                        Home
                    </Button>
                </Link>
                <Link to="/category" style={{ textDecoration: 'none', color: 'inherit' }}> {}
                    <Button sx={{ color: 'white' }}>
                        Categorias
                    </Button>
                </Link>
                <Link to="/acercade" style={{ textDecoration: 'none', color: 'inherit' }}> {}
                <Button sx={{ color: 'white' }}>
                    Acerca de 
                </Button>
                </Link>
                <CartWidget />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;


