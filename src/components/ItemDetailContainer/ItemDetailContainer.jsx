import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  let { id } = useParams();

  useEffect(() => {
    const getItemDetails = async (itemId) => {
      try {
        
        const response = await fetch(`https://api.example.com/items/${itemId}`);
        const data = await response.json();
        
      } catch (error) {
        console.error('Error al obtener los detalles del item', error);
      }
    };
  
    
    const { id } = useParams();
    getItemDetails(id);
  }, []);
  

  return <div>{}</div>;
};

export default ItemDetailContainer;
