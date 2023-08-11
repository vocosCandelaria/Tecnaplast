import React from 'react';
import { Link } from 'react-router-dom';
import './styleCategoryMaquinas.css';

const CategoryMaquinas = ({ imagen, CategoryId }) => {
	return (
		<div className="gallery_container col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex grid pl-0 pr-0">
			<figure className="effect-lily">
		        <Link to={`/Maquinas/${CategoryId}`}>
				    <img className="img_galeria" src={imagen} alt={CategoryId}/>
				    <figcaption>
					    <div>
						    <h4><span>{CategoryId}</span></h4>
					    </div>
				    </figcaption>
		        </Link>		
			</figure>
		</div>

		// <section>
		// 	<Link to={`/Maquinas/${CategoryId}`}>
		// 		<div className="gallery_container">
		// 			<div className="gallery_item">
		// 				<img className="gallery_img" src={imagen} alt={CategoryId} />
		// 				<h2 className="gallery_title"><span>{CategoryId}</span></h2>
		// 			</div>
		// 		</div>

		// 	</Link>
		// </section>
	)
}

export default CategoryMaquinas