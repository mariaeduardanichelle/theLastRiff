import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [Guitarras, setGuitarras] = useState([]);

  useEffect(() => {
    const fetchGuitarras = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/guitarras/');

        setGuitarras(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchGuitarras();
  }, []);

  return (
    <nav className='flex items-center justify-between bg-gray text-white p-6'>
      <h1 className='text-2xl font-bold'>THE LAST RIFF</h1>
    </nav>
  );
}

export default Navbar;