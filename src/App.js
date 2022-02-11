import React, { Component } from 'react';
// import Article from './components/Article';
// import Basket from './components/Basket';
import './App.css'

class App extends Component {
  
  state ={
    money: 20,
    basket: [],
    products: [
      {
          img: "./img/CocaCola.jpg",
          name: "Coca Cola",
          price: 1,
          stock: 4,
      },
      {
          img: "./img/Fanta.jpg",
          name: "Fanta",
          price: 1.5,
          stock: 4,
      },
      {
          img: "./img/IceTea.jpg",
          name: "Ice Tea",
          price: 2,
          stock: 4
      }
  ]
  }
  
  buy = (i) => {
    let {money, basket, products} = {...this.state}
    money -= products[i].price
    products[i].stock--
    basket.push(products[i])

    this.setState({money, basket, products})
    if(this.state.products[i].stock === 1) {
      document.getElementsByClassName("card-body")[i].style.backgroundColor = "orange"
    } 
    else if (this.state.products[i].stock === 0) {
      document.getElementsByClassName("card-body")[i].style.backgroundColor = "red";
      document.getElementsByClassName("card-body")[i].style.color = "white";
    } 
  }

  returnItems = (i) => {
    let {money, basket, products} = {...this.state}
    money += products[i].price
    basket.splice(i,1)
    products[i].stock++
    this.setState({money, basket, products})
    console.log(i)

    if(this.state.products[i].stock === 1) {
      document.getElementsByClassName("card-body")[i].style.backgroundColor = "orange"
    } 
    else if (this.state.products[i].stock >> 1) {
      document.getElementsByClassName("card-body")[i].style.backgroundColor = "white";
      document.getElementsByClassName("card-body")[i].style.color = "black";
    } 
  }

  render() {

    return (
      <div>
        <div className="container">
        <h2>Mon Argent: {this.state.money}</h2>
        <div className="row d-flex">
          <div className="col-4">
          <div className="card">
                    <img src={this.state.products[0].img} className="img-fluid card-img-top" alt="coca" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.products[0].name}</h5>
                        <p className="card-prix">Prix : {this.state.products[0].price} €</p>
                        <p className="card-stock">Stock : {this.state.products[0].stock} unités</p>
                        {this.state.products[0].stock > 0 && 
                          <div>
                            <a href="###" className="btn btn-success" onClick={() => {this.buy(0)}}>Acheter</a>
                            {console.log('plop')}
                          </div> 
                        }
                    </div>
                </div>
          </div>
          <div className="col-4">
          <div className="card">
                    <img src={this.state.products[1].img} className="img-fluid card-img-top" alt="fanta" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.products[1].name}</h5>
                        <p className="card-prix">Prix : {this.state.products[1].price} €</p>
                        <p className="card-stock">Stock : {this.state.products[1].stock} unités</p>
                        {this.state.products[1].stock > 0 && 
                          <div>
                            <a href="###" className="btn btn-success" onClick={() => {this.buy(1)}}>Acheter</a>
                            {console.log('plop')}
                          </div>
                        }
  
                    </div>
                </div>
          </div>
          <div className="col-4">
          <div className="card">
                    <img src={this.state.products[2].img} className="img-fluid card-img-top" alt="ice-tea" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.products[2].name}</h5>
                        <p className="card-prix">Prix : {this.state.products[2].price} €</p>
                        <p className="card-stock">Stock : {this.state.products[2].stock} unités</p>
                        {this.state.products[2].stock > 0 && 
                          <div>
                            <a href="###" className="btn btn-success" onClick={() => {this.buy(2)}}>Acheter</a>
                            {console.log('plop')}
                          </div>
                        }
                    </div>
                </div>
          </div>
        </div>
          <p>Mon panier:</p>
          <ul className="list-unstyled">
            {this.state.basket.map((element, index) => {
              return(
                <li key={index} className="d-flex my-2 border border-1">
                  <p className="my-auto mx-3">Produit: {element.name} || Unités: 1</p>
                  <a href="###" className="btn btn-danger" onClick={() => this.returnItems(index)}>Rendre</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
