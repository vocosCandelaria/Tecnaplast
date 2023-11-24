import React from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import './styleItem.scss';

const Item = ({item, type = 'maquinas'}) => {

  try{

    const image = require(`../../Assets/${type}/${item.id}/center.jpg`)
  } catch (e) {
    return null
  }
  
  const notShow = ['name', 'category', 'id']

  const camelCaseToSpaces = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
     const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
     return finalResult.toLowerCase()
  }
  
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
    <div className="container">
      <div className="grid second-nav">
        <div className="column-xs-12">
          <nav>
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item"><a href="#">Tecnaplast</a></li>
              <li className="breadcrumb-item"><a href="#">{item.category}</a></li>
              <li className="breadcrumb-item active">{item.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="grid product">
      <div className="row">
        <div className="column-xs-12 col-md-6 mt-4">



    <Carousel variant='light' interval={null} prevLabel={null} nextLabel={null}>
      <Carousel.Item className='item'>
        
      <img  className="d-block w-100 h-100"  src={require(`../../Assets/${type}/${item.id}/main.png`)}/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>

            <img  className="d-block  h-100 w-100" src={require(`../../Assets/${type}/${item.id}/center.jpg`)}/>

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>

             <img   className="d-block w-100 h-100" src={require(`../../Assets/${type}/${item.id}/left.jpg`)} />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




            {/* <div className="product-image">
               
              <img className="active"  src={require(`../../Assets/maquinas/${item.id}/main.png`)}/>
   
            </div>
            <ul className="image-list">
              <li className="image-item"><img  src={require(`../../Assets/maquinas/${item.id}/left.jpg`)}/></li>
              <li className="image-item"><img  src={require(`../../Assets/maquinas/${item.id}/center.jpg`)}/></li>
              <li className="image-item"><img  src={require(`../../Assets/maquinas/${item.id}/right.jpg`)}/></li>
            </ul> */}
       
        </div>
        <div className="column-xs-12 col-md-6">
          <h1>{item.name}</h1>
          {/* <h2>$19.99</h2> */}
          <div className="description">
          <Table striped bordered variant="light">

      <tbody>
        { Object.entries(item).map(([key, value]) => {
            if(notShow.find(x=> x === key)) return;
             return (
             <tr>
              <td className='tituloFila' ><p>{camelCaseToSpaces(key)}</p></td>
              <td>{value}</td>
            </tr>
            )
            })
        }

      </tbody>
    </Table>
          </div>
          {/* <button className="add-to-cart">Add To Cart</button> */}
        </div>
      </div>
      </div>
    </div>
   

  )
}

export default Item