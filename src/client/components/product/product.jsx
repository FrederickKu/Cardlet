
import React from 'react';

import style from  '../../style.scss';

class Product extends React.Component {
    render(){
        let product = null;

        if (this.props.product !== null){
            product = <div className={style.indivProduct} id={this.props.product.id}>
            <p> Name:{this.props.product.name}</p>
            <p> Price: {this.props.product.price}</p>
            <p> Description: {this.props.product.description}</p>
        </div>;
        }


        return (
            <div className={`col-3 mx-5 ${style.productContainer}`}>
                <h2>Product</h2>
                {product}
            </div>
        )
    }
}

export default Product;