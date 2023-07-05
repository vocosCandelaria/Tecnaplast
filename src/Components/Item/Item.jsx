import React from 'react';
import { Link } from 'react-router-dom';
import './styleItem.scss';


const Item = ({item: {id, name, pictureUrl, category, description, images}}) => {
  return (
    //<div className="col-lg-3 col-md-4 col-sm-6">
    //  <div className="card">
    //    <img className="card-img-top" src={pictureUrl} alt={title}/>
    //    <div className="card-body">
    //      <p className="card-category">{category}</p>
    //      <p className="card-title">{title}</p>
    //      {/* <p className="card-price font-bold">${price}</p> */}
    //      <Link to={`/ItemDetailContainer/${id}`}>
    //        <button className="boton">
    //          FICHA TÉCNICA
    //        </button>
    //      </Link>
    //    </div>
    //  </div>
    //</div>
    <main>
    <div className="container">
      <div className="grid second-nav">
        <div className="column-xs-12">
          <nav>
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item"><a href="#">Tecnoplast</a></li>
              <li className="breadcrumb-item"><a href="#">{category}</a></li>
              <li className="breadcrumb-item active">{name}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="grid product">
        <div className="column-xs-12 column-md-7">
          <div className="product-gallery">
            <div className="product-image">
              <img className="active" src="https://source.unsplash.com/W1yjvf5idqA"/>
            </div>
            <ul className="image-list">
              <li className="image-item"><img src="https://source.unsplash.com/W1yjvf5idqA"/></li>
              <li className="image-item"><img src="https://source.unsplash.com/VgbUxvW3gS4"/></li>
              <li className="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8"/></li>
            </ul>
          </div>
        </div>
        <div className="column-xs-12 column-md-5">
          <h1>{name}</h1>
          <h2>$19.99</h2>
          <div className="description">
            <p>The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
            <p>By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
          </div>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>

    </div>
  </main>
   

  )
}

export default Item