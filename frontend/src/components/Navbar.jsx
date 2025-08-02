import React from 'react'
import { useNavigate } from 'react-router-dom' 
import brownPfp from '../assets/brownPfp.png'
import '../index.css'

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <div className='bg-yellow-100 position-absolute top-0 border-none flex p-3'>
      <h1 className='text-2xl font-serif text-amber-700 font-bold'>reSPF</h1>

      <img
        src={brownPfp}
        alt="profile icon"
        className='ml-auto cursor-pointer rounded-full'
        onClick={() => navigate('/profile')}
      />
    </div>
  );
};

export default Navbar;
