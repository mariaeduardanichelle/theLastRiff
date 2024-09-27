import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GuitarraList = () => {
  const [guitarras, setGuitarras] = useState([]);

  useEffect(() => {
    const fetchGuitarras = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/guitarras/');

        setGuitarras(response.data);
      } catch (error) {
        console.error('Error fetching guitars:', error);
      }
    };

    fetchGuitarras();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-[20px] mb-10'>
      <ul className='flex md:flex-row flex-wrap flex-col p-[24px] gap-10 justify-center'>
        {guitarras.map((guitarra) => (
          <li key={guitarra.id} className='flex flex-col shadow-md w-[350px] h-[460px] justify-center items-center'>
            <img src={`http://localhost:8000${guitarra.imagem.url}`} alt={guitarra.marca} style={{ width: '110px', height: 'auto' }} />
            <div className='mt-5'>
              <p className='font-bold'>{guitarra.modelo}</p>
              <p>{guitarra.marca}</p> 
              <p>R$ {parseFloat(guitarra.preco).toFixed(2)}</p> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuitarraList;
