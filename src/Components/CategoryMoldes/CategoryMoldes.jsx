import React from 'react';
import { Link } from 'react-router-dom';
import './styleCategoryMoldes.css';

const CategoryMoldes = ({ imagen, CategoryId }) => {
    return (
        // <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex category_container'>
        //     <Link to={`/ItemListContainer/${CategoryId}`} className='category_container2'>
        //         <img src={imagen} alt={CategoryId} />
        //         <div className='category_text'>
        //             <h4 className='text-center align-middle text-uppercase'>{CategoryId}</h4>
        //         </div>
        //     </Link>
        // </div>

        <div className="gallery_container col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex grid pl-0 pr-0">
			<figure className="effect-lily">
                <Link to={`/Moldes/${CategoryId}`}>
				    <img src={imagen} alt={CategoryId}/>
				    <figcaption>
					    <div>
						    <h4><span>{CategoryId}</span></h4>
					    </div>
				    </figcaption>
                </Link>		
			</figure>
		</div>
    )
}

export default CategoryMoldes