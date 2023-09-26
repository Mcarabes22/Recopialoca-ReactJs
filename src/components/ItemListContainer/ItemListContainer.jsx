import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  let { id } = useParams();

  useEffect(() => {
    
    
  }, [id]);

  return (
    <>
      <div className='div-itemcontainer'>
        <h1>{greeting}</h1>
        
        
      </div>
    </>
  );
}

export default ItemListContainer;
