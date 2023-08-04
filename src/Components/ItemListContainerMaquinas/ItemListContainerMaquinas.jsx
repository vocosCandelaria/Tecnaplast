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
  const [collectionName, setCollectionName] = useState([]);
  const { search, loading, setLoading } = useContext(GlobalContext);

   const fetchGetDataCollection = async () => {
    
     setLoading(true)
     const collectionName = window.location.href.includes('Moldes') ? 'moldes' : 'maquinas'
     setCollectionName(collectionName)
     const col = collection(db, collectionName)
     let q = col
     if(CategoryId || SubCategoryId) {
      q = SubCategoryId  ? query(col, where('name', '==', SubCategoryId)) : query(col, where('category', '==', CategoryId)) ;
     }
   
    
     try {
       const data = await getDocs(q)
       const result = data?.docs?.map(doc => doc = { id: doc.id, ...doc.data() })
       console.log(result)
       setProducts(result)
       setLoading(false)
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
      <h2 className='category_title'>{ SubCategoryId ? `${SubCategoryId}` : CategoryId}</h2>
       {loading ? (<div className='loading'><Loading /></div>) : <ItemList items={products} type={collectionName} />} 
        
    </>
  );
}

export default ItemListContainerMaquinas