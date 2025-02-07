import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { BsCart3 } from "react-icons/bs";
import { LiaUserCircle } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
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
import { SlLocationPin } from "react-icons/sl";
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
        console.log("working...")
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
                    <h2 className='text-slate-600' style={{ fontSize: '1rem ', fontWeight: '700' }}>{user?.email}</h2>
                </div>
                <div className={user?._id ? 'hidden' : 'block'}>
                    <h2 className='text-slate-600' style={{ fontSize: '1rem ', fontWeight: '700' }}>Signup & Login</h2>
                </div>
            </div>
            <ul className='pt-5 border-black'>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><IoHomeOutline className='text-slate-600 text-2xl ' /> Home  </Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '700' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/profilePage"} className='flex items-center gap-5 px-3 '><FaRegUser className='text-slate-600 text-xl ' /> My Account</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/orderPage"} className='flex items-center gap-4 px-3 '><MdOutlineBorderColor className='text-slate-600 text-2xl' /> My Orders</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/"} className='flex items-center gap-4 px-3 '><RiCouponLine className='text-slate-600 text-2xl' /> Coupons</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/cartPage"} className='flex items-center gap-4 px-3 '><IoCartOutline className='text-slate-600 text-2xl' /> My Cart</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/wishlistPage"} className='flex items-center gap-4 px-3 '><MdFavoriteBorder className='text-slate-600 text-2xl' /> Wishlist</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/notificationPage"} className='flex items-center gap-4 px-3 '><FaRegBell className='text-slate-600 text-2xl font-semibold' /> My Notifications</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className='px-3 py-2  hover:bg-cyan-50  text-slate-600'><Link to={"/settingPage"} className='flex items-center gap-4 px-3 '><IoSettingsOutline className='text-slate-600 text-2xl' /> Settings</Link></li>
                <li style={{ fontSize: '1rem ', fontWeight: '400' }} className={user?._id ? 'px-3 py-2  hover:bg-yellow-50 font-semibold text-slate-600' : 'hidden'} onClick={handleLogout}><Link className='flex items-center gap-4 px-3'><LuLogOut className='text-slate-600 text-2xl' />Logout</Link></li>
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
        <nav className='w-[100%] sticky top-0   z-50 bg-white h-[3.8rem] flex items-center' style={{ boxShadow: '-2px 0px 5px gray' }}>
            <div className='z-50 flex w-[100%] h-14 justify-between items-center px-5'>
                <div className='flex items-center gap-2'>
                    <div className=''>
                        <FiMenu onClick={toggleDrawer(true)} className='text-2xl text-black hover:text-cyan-500 cursor-pointer' />
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </div>
                    <div onClick={() => navigate("/")} className='cursor-pointer '>
                        <img src="https://i.ibb.co/5XnRZMpR/logo.png" alt="" className='w-[3.5rem] h-[2.5rem]' />
                    </div>
                    <div className='flex items-center gap-1'>
                        <SlLocationPin className=''/>
                        <p className='text-sm font-semibold font-sans text-slate-700'>Patna, bihar</p>
                    </div>
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <div className='flex gap-5'>
                            <li className=''>
                                <Link to={"/cartPage"}>
                                    <Badge badgeContent={products} color="error" >
                                        <BsCart3 className='text-2xl text-black hover:text-cyan-500 cursor-pointer' />
                                    </Badge>
                                </Link>
                            </li>
                            <li className=''>
                                <LiaUserCircle className='text-3xl text-black hover:text-cyan-500 cursor-pointer' onClick={user?._id ? () => navigate('/profilePage') : handleClickOpen} />
                            </li>
                            <React.Fragment>
                                <Dialog
                                    fullScreen
                                    open={open2}
                                    onClose={handleClose}
                                    TransitionComponent={Transition}
                                    
                                >
                                    <AppBar sx={{ position: 'relative', backgroundColor: '#fff', boxShadow: '-2px 0px 5px gray' }}>
                                        <Toolbar>
                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                                <h1 className='text-slate-600' style={{ fontSize: '1.2rem', fontWeight: '700' }}>Login to your Account</h1>
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

                                    <form onSubmit={handleSubmit} className={showOtp ? "hidden" : 'bg-cyan-100 h-[100%]'}>
                                        <div className='text-center mt-10 '>
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
                                            <button className='text-white shadow-md bg-amber-500 w-[10rem] py-1.5 hover:bg-amber-600 rounded-lg' type='submit'>Continue</button>
                                        </div>
                                    </form>
                                    <div className={showOtp ? 'justify-center items-center h-[100%] bg-cyan-100' : 'hidden'}>
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