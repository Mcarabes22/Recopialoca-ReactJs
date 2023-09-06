
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {

    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{ display: "flex", justifyContent: "space-around", backgroundColor: "black"}}>
            <h1>
                Recopialoca
            </h1>
            <Button sx={{ color: 'white' }}>
                Home
            </Button>
            <Button sx={{ color: 'white' }}>
                Categorias
            </Button>
            <Button sx={{ color: 'white' }}>
                Acerca de 
            </Button>
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default Navbar;

