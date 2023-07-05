import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../Service/Firebase';
import { query, where, getDocs, collection } from 'firebase/firestore';
import { GlobalContext } from '../../Context/CartContext';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import './styleItemListContainerMaquinas.css';

const ItemListContainerMaquinas = () => {

  const { CategoryId, SubCategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { search, loading, setLoading } = useContext(GlobalContext);

   const fetchGetDataCollection = async () => {
    
     setLoading(true)

     const col = collection(db, 'maquinas')

     const q = CategoryId ? query(col, where('category', '==', CategoryId)) : col

     try {
       const data = await getDocs(q)
       const result = data?.docs?.map(doc => doc = { id: doc.id, ...doc.data() })
       setProducts(result)
       setLoading(false)
      console.log(result)
     } catch (error) {
       console.log(error)
     }
   }

   useEffect(() => {

    fetchGetDataCollection();

  }, [CategoryId]);


  const resultSearch = products.filter((s) => {
    const searchLowerCase = search.toLocaleLowerCase();
    if (s.name.toString().toLowerCase().includes(searchLowerCase)
      || s.category.toString().toLowerCase().includes(searchLowerCase)
    ) {
      return s;
    }
  });

 

  return (
    <>
      {/* {CategoryId ? <h2 className='category_title'>{CategoryId} </h2> : <h2 className='category_title'>nuestras máquinas</h2>} */}
      <h2 className='category_title'>{CategoryId ? SubCategoryId ? `${SubCategoryId}` : CategoryId : 'nuestras máquinas'}</h2>
       {loading ? (<Loading />) : <ItemList items={products} />} 
        
    </>
  );
}

export default ItemListContainerMaquinas