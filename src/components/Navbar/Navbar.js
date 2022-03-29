import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
                <Link className='logo' to={'/'}><h1>Countries Db</h1></Link>
            <div className='link-container'>
                <CustomLink className='link' to={'/'}>Home</CustomLink>
                <CustomLink className='link' to={'/countries'}>Countries</CustomLink>
                <CustomLink className='link' to={'/posts'}>Posts</CustomLink>
                <CustomLink className='link' to={'/about'}>About</CustomLink>
                <CustomLink className='link' to={'/contact'}>Contact</CustomLink>
            </div>
        </nav>
    );
};

export default Navbar;