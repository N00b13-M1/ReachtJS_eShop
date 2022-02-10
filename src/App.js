import React, { Component } from 'react';
// import Article from './components/Article';
import Basket from './components/Basket';
import './App.css'

class App extends Component {
  
  state ={
    argent: 20,
    basket: [],
    products: [
      {
          name: "Coca Cola",
          price: 1,
          stock: 4,
      },
      {
          name: "Fanta",
          price: 1.5,
          stock: 4
      },
      {
          name: "Ice Tea",
          price: 2,
          stock: 4
      }
  ]
  }
  
  buy = () => {
    // let stock1 = this.state.products[0].stock;
    // let stock2 = this.state.products[1].stock;
    // let stock3 = this.state.products[2].stock;
    console.log();
    // this.setState(stock1 = stock1 -1)
    this.moveToBasket();
  }

  moveToBasket = () => {
    console.log("plop2")
  }

  render() {

    return (
      <div>
        <div className="container">
        <h2>Mon Argent: {this.state.argent}</h2>
        <div className="row d-flex">
          <div className="col-4">
          <div className="card">
                    <img src="./img/CocaCola.jpg" className="img-fluid card-img-top" alt="coca" />
                    <div className="card-body">
                        <h5 className="card-title" name>{this.state.products[0].name}</h5>
                        <p className="card-prix">Prix : {this.state.products[0].price} €</p>
                        <p className="card-stock">Stock : {this.state.products[0].stock} unités</p>
                        <a href="###" className="btn btn-success" onClick={() => this.buy()}>Acheter</a>
                    </div>
                </div>
          </div>
          <div className="col-4">
          <div className="card">
                    <img src="./img/Fanta.jpg" className="img-fluid card-img-top" alt="fanta" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.products[1].name}</h5>
                        <p className="card-prix">Prix : {this.state.products[1].price} €</p>
                        <p className="card-stock">Stock : {this.state.products[1].stock} unités</p>
                        <a href="###" className="btn btn-success onClick={() => {this.buy()}">Acheter</a>
                    </div>
                </div>
          </div>
          <div className="col-4">
          <div className="card">
                    <img src="./img/IceTea.jpg" className="card-img-top" alt="ice-tea" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.products[2].name}</h5>
                        <p className="card-prix">Prix : {this.state.products[2].price} €</p>
                        <p className="card-stock">Stock : {this.state.products[2].stock} unités</p>
                        <a href="###" className="btn btn-success onClick={() => {this.buy()}">Acheter</a>
                    </div>
                </div>
          </div>
        </div>
        <Basket/>
        </div>
      </div>
    );
  }
}

export default App;
