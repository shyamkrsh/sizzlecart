import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { TextField, InputAdornment } from '@mui/material';
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import OtpInput from './Auth/OtpInput';
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from 'react-redux';


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
            setProducts(products?.length);
        })
    }, []);
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const user = useSelector((state) => state?.user?.user);

    const handleLogout = () => {
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/logout`, {}, {
            withCredentials: true,
        }).then((res) => {
            location.href = '/';
        }).catch((err) => {
            console.log(err);
        })
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div onClick={() => navigate("/profilePage")} className='flex justify-start ps-5 gap-2 items-center p-2 bg-slate-50' >
                <div>
                    <img src="https://i.ibb.co/Zm6qmB9/user.png" alt="" className='w-[2.5rem] h-[2.5rem] rounded-full' />
                </div>
                <div className={user?._id ? 'block' : 'hidden'}>
                    <h2 className='font-semibold text-white'>{user?.email}</h2>
                    <p className=' text-white'>{"Patna, Bihar"}</p>
                </div>
                <div className={user?._id ? 'hidden' : 'block'}>
                    <h2 className='text-slate-600' style={{ fontSize: '1rem ', fontWeight: '700' }}>Signup & Login</h2>
                </div>
            </div>
            <ul className='pt-5 border-black'>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><IoHomeOutline className='text-slate-600 text-2xl font-semibold' /> Home  </Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/profilePage"} className='flex items-center gap-4 px-3 '><FaRegUser className='text-slate-600 text-2xl font-semibold' /> My Account</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><MdOutlineBorderColor className='text-slate-600 text-2xl font-semibold' /> My Orders</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><RiCouponLine className='text-slate-600 text-2xl font-semibold' /> Coupons</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/cartPage"} className='flex items-center gap-4 px-3 '><IoCartOutline className='text-slate-600 text-2xl font-semibold' /> My Cart</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/wishlistPage"} className='flex items-center gap-4 px-3 '><MdFavoriteBorder className='text-slate-600 text-2xl font-semibold' /> Wishlist</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><FaRegBell className='text-slate-600 text-2xl font-semibold' /> My Notifications</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '750' }} className='px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><IoSettingsOutline className='text-slate-600 text-2xl font-semibold' /> Settings</Link></li>
                <li className={user?._id ? 'px-3 py-2 text-xl hover:bg-yellow-50 font-semibold text-slate-700' : 'hidden'} onClick={handleLogout}><Link className='flex items-center gap-4 px-3'><LuLogOut className='text-slate-600 text-3xl font-semibold' />Logout</Link></li>
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



    return (
        <nav className='w-[100%] md:sticky md:top-0   z-50 bg-slate-50 '>
            <div className='z-50 flex w-[100%] h-16 justify-between items-center px-5'>
                <div className='md:hidden'>
                    <IoIosMenu onClick={toggleDrawer(true)} className='text-4xl font-semibold' />
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
                <div onClick={() => navigate("/")} className='cursor-pointer '>
                    <h1 className='font-sans text-2xl font-bold ' style={{ background: 'linear-gradient(to bottom, #4aa832 50%, #f28d0a 50%)', color: 'transparent', backgroundClip: 'text', letterSpacing: '1px', textTransform: 'uppercase' }}>Sizzle Cart</h1>
                </div>
                <div className='w-[40%] hidden md:block'>
                    <div className='w-[100%] h-[3rem] flex items-center justify-center bg-white rounded-md ps-2 border-2'>
                        <IoSearch className='text-2xl text-slate-700' />
                        <input type="text"
                            placeholder='search products, spices'
                            className='w-[100%] h-[2.5rem] px-2 rounded-md outline-none text-slate-600 font-semibold'
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
                            <li className={'text-black'} ><Link to={"/offers"}>Offers</Link></li>
                        </div>
                        <div className='flex gap-8'>
                            <li className=''>
                                <Link to={"/cartPage"}>
                                    <Badge badgeContent={products} color="error" >
                                        <BsCart3 className='text-2xl text-slate-600' />
                                    </Badge>
                                </Link>
                            </li>
                            <li className=''>
                                <FaRegUserCircle className='text-3xl text-slate-600' onClick={user?._id ? () => navigate('/profilePage') : handleClickOpen} />
                            </li>
                            <React.Fragment>
                                <Dialog
                                    fullScreen
                                    open={open2}
                                    onClose={handleClose}
                                    TransitionComponent={Transition}
                                >
                                    <AppBar sx={{ position: 'relative', backgroundColor: 'rgb(248, 250, 252)', boxShadow: '0px 0px 1px gray' }}>
                                        <Toolbar>
                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                            <h1 className='text-slate-600' style={{fontSize: '1.2rem', fontWeight: '700'}}>Login to your Account</h1>
                                            </Typography>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                onClick={handleClose}
                                                aria-label="close"
                                            >
                                                <CloseIcon className='text-slate-900 text-xl font-semibold' />
                                            </IconButton>
                                        </Toolbar>
                                    </AppBar>
                                   
                                    <form onSubmit={handleSubmit}>
                                        <div className={showOtp ? 'hidden' : 'text-center mt-10'}>
                                            <p className='text-slate-500 mb-5'>Enter your phone number to Email</p>
                                            <div>
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

                                        <div className={showOtp ? 'hidden' : 'block  text-center'}>
                                            <button className='text-white bg-amber-500 w-[10rem] py-3 text-xl hover:bg-amber-600 rounded-lg' type='submit'>Continue</button>
                                        </div>
                                    </form>
                                    <div className={showOtp ? 'justify-center items-center' : 'hidden'}>
                                        <OtpInput email={mail} />
                                    </div>
                                </Dialog>
                            </React.Fragment>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar