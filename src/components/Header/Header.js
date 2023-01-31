import React from 'react';
import header from '../../assets/header.jpg'

const Header = () => {
    return (
        <header className="hero bg-base-200">
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <img src={header} alt='husain ahmed' className="md:max-w-sm  rounded-lg shadow-2xl" />
          <div className='md:mx-5'>
            <h1 className="text-5xl font-bold"><span className='text-2xl text-green-500'>Hi, my name is</span> <br/> Husain Ahmed <br/>Web Developer</h1>
            <p className="py-6">I’m a software engineer specializing in building<br/>
             (and occasionally designing) exceptional digital experiences.</p>
            <button className="btn bg-green-500">Contact me!</button>
          </div>
        </div>
      </header>
    );
};

export default Header;