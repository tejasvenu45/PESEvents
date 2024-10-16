import React, { useRef, useState, useEffect } from 'react';
import HomeUnder from './HomeUnder';
import './home.css';

const Home = () => {
  const homeUnderRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHomeUnder = () => {
    homeUnderRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Direct Navbar inside Home */}
      <nav
        className={`fixed top-0 left-0 w-full flex flex-row items-center justify-between px-20 py-6 transition-colors duration-500 ease-in-out ${scrolled ? 'bg-black text-white' : 'bg-transparent text-white'
          }`}
      >
        {scrolled ? <img src='logo.png' className='h-10' alt='Logo' /> : <><h1></h1></>}
        <div className='flex flex-row items-center justify-end gap-16 text-xl'>
          <div className='cursor-pointer group transition duration-300'>
            Home
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
          </div>
          <div className='cursor-pointer group transition duration-300'>
            Events
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
          </div>
          <div className='cursor-pointer group transition duration-300'>
            Clubs
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
          </div>
          <div className='cursor-pointer group transition duration-300'>
            Timeline
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-current'></span>
          </div>
          <button className='bg-white text-black rounded-2xl px-5 py-3 shadow-lg hover:bg-black hover:text-white transition duration-300'>
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className='h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-row items-center justify-between mx-20 pt-[30vh]'>
          <div className='text-black font-thin text-xl max-w-[70vh]'>
            <img src='logo.png' className='h-40 mb-16' alt='Logo' />
            <p>
              Whether you're organizing a PES event or attending one, our platform guarantees a smooth, efficient experience. Finding and registering for events has never been easier. We're here to simplify event management for everyone.
            </p>
          </div>
          <div>
            <img src='lorem.png' alt='Event Image' className='w-[70vh]' />
          </div>
        </div>

        {/* Smooth scroll trigger */}
        <div className='flex flex-row items-center justify-center'>
          <button
            onClick={scrollToHomeUnder}
            className='mt-[20vh] text-black font-thin flex flex-row items-center'
          >
            See More
            <img src='downarrow.png' className='h-[0.4rem] pl-2' />
          </button>
        </div>
      </div>

      {/* PES Events Section - HomeUnder */}
      <div
        ref={homeUnderRef}
        className='opacity-0 transition-opacity duration-1000 ease-in-out'
        style={{ opacity: scrolled ? 1 : 0 }}
      >
        <HomeUnder />
      </div>
    </>
  );
};

export default Home;
