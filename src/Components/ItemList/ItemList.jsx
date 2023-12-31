import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items, type }) => {
console.log('items  -----' -items)
  return (
    <>
      <div className='cart_section'>
        <div className='container-fluid'>
          <div className='row'>
            {items && (
              items.map((product) => (
                <Item
                  type={type}
                  key={product.id}
                  item={product}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList