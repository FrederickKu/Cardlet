import React from 'react';

import style from '../../style.scss';

class IndividualProduct extends React.Component {
    render(){
        console.log(this.props.product)
        return (
            <div className={style.indivProduct} id={this.props.product.id} onClick={(event)=>{this.props.seeProduct(event)}}>
                <p id={this.props.product.id} onClick={(event)=>{this.props.seeProduct(event)}}> Name:{this.props.product.name}</p>
                <p id={this.props.product.id} onClick={(event)=>{this.props.seeProduct(event)}}> Price: {this.props.product.price}</p>
                <p id={this.props.product.id} onClick={(event)=>{this.props.seeProduct(event)}}> Description: {this.props.product.description}</p>
            </div>
        )
    }
}


class Search extends React.Component {
      render(){

        let productList = this.props.searchResults.map( (product,index) => {
            return <IndividualProduct key={index} product={product} seeProduct={this.props.seeProduct}/>
        })

        return (
            <div className={`col-3 ${style.searchContainer}`}>
                <h2>Search</h2>
                <div className ={style.searchInput}>
                    <input onKeyDown={this.props.filterResults} placeholder={'Search'} />
                </div>
                <div className ={style.productDiv}>
                    {productList}
                </div>
            </div>
        )
    }
}

export default Search;