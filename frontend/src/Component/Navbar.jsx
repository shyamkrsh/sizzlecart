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
import { TextField, InputAdornment } from '@mui/material';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OtpInput from './Auth/OtpInput';
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Navbar() {
    const [products, setProducts] = useState(0);
    const navigate = useNavigate();

    const [address, setAddress] = useState('');

    useEffect(() => {
        setInterval(() => {
            const products = JSON.parse(localStorage.getItem('products'));
            setProducts(products.length);
        })
    }, []);
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div onClick={() => navigate("/profilePage")} className='flex justify-center gap-2 items-center p-2' style={{ backgroundColor: '#40372d' }}>
                <div>
                    <img src="https://i.ibb.co/9hL97vT/profile.jpg" alt="" className='w-[3rem] h-[3rem] rounded-full border border-red-800' />
                </div>
                <div>
                    <h2 className='font-semibold text-white'>Shyam Kumar Sharma</h2>
                    <p className=' text-white'>{address}</p>
                </div>
            </div>
            <ul className='pt-5'>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><FaHome className='text-slate-600' /> Home</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/profilePage"} className='flex items-center gap-4 px-3 '><FaUser className='text-slate-600' /> My Account</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><MdBorderColor className='text-slate-600' /> My Orders</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><BiSolidCoupon className='text-slate-600' /> Coupons</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/cartPage"} className='flex items-center gap-4 px-3 '><FaCartArrowDown className='text-slate-600' /> My Cart</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/wishlistPage"} className='flex items-center gap-4 px-3 '><FaHeart className='text-slate-600' /> Wishlist</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '><FaBell className='text-slate-600' /> My Notifications</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '>Help Center</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/"} className='flex items-center gap-4 px-3 '>Choose Language</Link></li>
                <li className='px-3 py-2 text-xl '><Link to={"/admin"} className='flex items-center gap-4 px-3 '>Admin Panel</Link></li>
            </ul>

        </Box>
    );

    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen = () => {
        setOpen2(true);
    };
    const handleClose = () => {
        setOpen2(false);
    };

    const [mail, setMail] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/verifyOtp`, { email: mail }).then((res) => {
            console.log(res);
            setShowOtp(true);
        }).catch((err) => {
            console.log(err);
        })
    }




    useEffect(() => {
        if (navigator?.geolocation) {
            navigator?.geolocation?.getCurrentPosition(
                (position) => {
                    const latitude = position?.coords?.latitude;
                    const longitude = position?.coords?.longitude;
                    axios.get(`http://api.positionstack.com/v1/reverse?access_key=b450251c2d1c4fbe06d326abaffa295d&query=${latitude},${longitude}`).then((res) => {
                        setAddress(res.data.data[0].name);
                        
                    })
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [])



    return (
        <div className='w-[100%] sticky top-0 z-50'>
            <nav className='z-50 flex w-[100%] h-16 justify-between items-center px-5 text-white' style={{ backgroundColor: '#40372d' }} >
                <div className='md:hidden'>
                    <IoIosMenu onClick={toggleDrawer(true)} className='text-3xl' />
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
                <div onClick={() => navigate("/")} className='cursor-pointer ' style={{ backgroundColor: '#40372d' }}>
                    <h1 className='font-sans text-2xl font-bold ' style={{ background: 'linear-gradient(to bottom, yellow 50%, #f28d0a 50%)', color: 'transparent', backgroundClip: 'text', letterSpacing: '1px', textTransform: 'uppercase' }}>Sizzle Cart</h1>
                </div>

                <div className='w-[40%] hidden md:block'>
                    <div className='w-[100%] h-[2.5rem] flex items-center justify-center bg-slate-50 rounded-md ps-2'>
                        <IoSearch className='text-2xl text-slate-700' />
                        <input type="text"
                            placeholder='search products, spices'
                            className='w-[100%] h-[2.5rem] px-2 flex items-center justify-start rounded-md outline-none text-slate-600 font-semibold bg-slate-50'
                        />
                    </div>
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <div className='gap-8 hidden lg:flex'>
                            <li className={'text-white'} ><div className='flex items-center justify-center gap-2  text-white'>
                                <FaLocationDot />
                                <p>{address}</p>
                            </div></li>
                            <li className={'text-white'} ><Link to={"/offers"}>Offers</Link></li>
                        </div>
                        <div className='flex gap-8'>
                            <li className=''>
                                <Link to={"/cartPage"}>
                                    <Badge badgeContent={products} color="error">
                                        <FaShoppingCart className='text-2xl' />
                                    </Badge>
                                </Link></li>
                            <li className=''>
                                <FaUserCircle className='text-2xl' onClick={handleClickOpen} />
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
                                                <h1 className='font-sans text-2xl font-bold' style={{ background: 'linear-gradient(to bottom, yellow 50%, #f28d0a 50%)', color: 'transparent', backgroundClip: 'text', letterSpacing: '1px', textTransform: 'uppercase' }}>Sizzle Cart</h1>
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
                                    <div className='p-5'>
                                        <h3 className='text-xl font-semibold'>Login for the best experience</h3>
                                        <p className='text-slate-500'>Enter your phone number to continue</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className='text-center mt-10'>
                                            <div className={showOtp ? 'hidden' : 'block'}>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Email Id"
                                                    variant="outlined"
                                                    value={mail}
                                                    onChange={(e) => setMail(e.target.value)}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <MdEmail className='text-2xl' />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <br /><br />
                                        </div>

                                        <div className={showOtp ? 'hidden' : 'block mt-[10rem] text-center'}>
                                            <button className='text-white bg-amber-600 w-[10rem] py-3 text-xl hover:bg-amber-700' type='submit'>Continue</button>
                                        </div>
                                    </form>
                                    <div className={showOtp ? 'justify-center items-center' : 'hidden'}>
                                        <OtpInput />
                                    </div>
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