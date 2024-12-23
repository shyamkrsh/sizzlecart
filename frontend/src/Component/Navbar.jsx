import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Navbar() {


    const [value, setValue] = useState(0);
    const [products, setProducts] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => {
            const products = JSON.parse(localStorage.getItem('products'));
            setProducts(products.length);
        })
    }, []);
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div onClick={() => navigate("/profilePage")} className='flex justify-center gap-2 items-center p-2' style={{ backgroundColor: '#40372d' }}>
                <div>
                    <img src="src/assets/img1.jpg" alt="" className='w-[3rem] h-[3rem] rounded-full border border-red-800' />
                </div>
                <div>
                    <h2 className='font-semibold text-white'>Shyam Kumar Sharma</h2>
                    <p className=' text-white'>Patna, Bihar</p>
                </div>
            </div>
            <ul className='pt-5'>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><FaHome className='text-slate-600' /> Home</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/profilePage"} className='flex items-center gap-4 px-3 '><FaUser className='text-slate-600' /> My Account</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><MdBorderColor className='text-slate-600' /> My Orders</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><BiSolidCoupon className='text-slate-600' /> Coupons</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/cartPage"} className='flex items-center gap-4 px-3 '><FaCartArrowDown className='text-slate-600' /> My Cart</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><FaHeart className='text-slate-600' /> Wishlist</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><FaBell className='text-slate-600' /> My Notifications</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '>Help Center</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '>Choose Language</Link></li>
            </ul>

        </Box>
    );



    const [open2, setOpen2] = React.useState(true);
    const handleClickOpen = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen2(false);
    };

   

    return (
        <div className='w-[100%] sticky top-0'>
            <nav className='z-50 flex w-[100%] h-16 justify-between items-center px-5 text-white' style={{ backgroundColor: '#40372d' }} >
                <div className='md:hidden'>
                    <IoIosMenu onClick={toggleDrawer(true)} className='text-3xl' />
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
                <div onClick={() => navigate("/")} className='cursor-pointer'>
                    <h1 className='font-sans text-2xl font-bold shadow-md' style={{ background: 'linear-gradient(to bottom, yellow 50%, #f28d0a 50%)', color: 'transparent', backgroundClip: 'text', letterSpacing: '1px', textTransform: 'uppercase' }}>Sizzle Cart</h1>
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <div className='gap-8 hidden lg:flex'>
                            <li className={value == 0 ? 'text-yellow-500' : ''} onClick={() => setValue(0)}><Link to={"/"}>Home</Link></li>
                            <li className={value == 1 ? 'text-yellow-500' : ''} onClick={() => setValue(1)}><Link to={"/shop"}>Shop</Link></li>
                            <li className={value == 2 ? 'text-yellow-500' : ''} onClick={() => setValue(2)}><Link to={"/offers"}>Offers</Link></li>
                            <li className={value == 3 ? 'text-yellow-500' : ''} onClick={() => setValue(3)}><Link to={"/recipes"}>Recipes </Link></li>
                            <li className={value == 4 ? 'text-yellow-500' : ''} onClick={() => setValue(4)}><Link to={"/about"}>About Us</Link></li>
                            <li className={value == 5 ? 'text-yellow-500' : ''} onClick={() => setValue(5)}><Link to={"/contact"}>Contact Us</Link></li>
                        </div>
                        <div className='flex gap-8'>
                            <li className=''>
                                <Link to={"/cartPage"}>
                                    <Badge badgeContent={products} color="error">
                                        <FaShoppingCart className='text-2xl' />
                                    </Badge>
                                </Link></li>

                            <li className=''>
                                <Link to={"/login"}>
                                    <FaUserCircle className='text-2xl' onClick={handleClickOpen} />
                                </Link>
                            </li>
                            <React.Fragment>
                                <Dialog
                                    fullScreen
                                    open={open2}
                                    onClose={handleClose}
                                    TransitionComponent={Transition}
                                >
                                    <AppBar sx={{ position: 'relative', backgroundColor: '#40372d' }}>
                                        <Toolbar>
                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                                <h1 className='font-sans text-2xl font-bold shadow-md' style={{ background: 'linear-gradient(to bottom, yellow 50%, #f28d0a 50%)', color: 'transparent', backgroundClip: 'text', letterSpacing: '1px', textTransform: 'uppercase' }}>Sizzle Cart</h1>
                                            </Typography>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                onClick={handleClose}
                                                aria-label="close"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </Toolbar>
                                    </AppBar>
                                    <List>
                                       <input type="text" placeholder='Enter mobile number' />
                                        <Divider />
                                        
                                    </List>
                                </Dialog>
                            </React.Fragment>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar