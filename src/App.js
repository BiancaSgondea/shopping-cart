import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import Store from "./components/Store";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 0, description: "Item Description 00", price: 10 },
        { id: 1, description: "Item Description 01", price: 20 },
        { id: 2, description: "Item Description 02", price: 15 }
      ],
      cartItems: [],
      total: 0
    };

    this.changeQuantity = this.changeQuantity.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  changeQuantity(event) {
    let newCartItems = this.state.cartItems.map(item => {
      if (item.id == event.target.id) {
        item.qty = event.target.value;
      }
      return item;
    });
    this.setState(
      {
        cartItems: newCartItems
      },
      this.calculateTotal
    );
  }

  addItem(event, id) {
    let item = this.state.items.find(item => item.id == id);
    let newCartItems = this.state.cartItems;
    if (newCartItems.find(item => item.id == id)) {
      item.qty++;
    } else {
      item.qty = 1;
      newCartItems.push(item);
    }
    this.setState(
      {
        cartItems: newCartItems
      },
      this.calculateTotal
    );
  }

  removeItem(event, id) {
    let item = this.state.cartItems.findIndex(item => item.id == id);
    let newCartItems = this.state.cartItems;

    newCartItems.splice(item, 1);

    this.setState(
      {
        cartItems: newCartItems
      },
      this.calculateTotal
    );
  }

  calculateTotal() {
    let total = 0;
    this.state.cartItems.forEach(element => {
      total += element.qty * element.price;
    });

    this.setState({
      total: total
    });
  }

  render() {
    const { items, cartItems, total } = this.state;

    return (
      <MDBContainer fluid="true" className="App">
        <MDBRow>
          <MDBCol>
            <h3 className="heading">Store</h3>
            <Store items={items} onClick={this.addItem} />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h3 className="heading">Cart</h3>
            <ShoppingCart
              items={cartItems}
              handleChange={this.changeQuantity}
              onClick={this.removeItem}
              total={total}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default App;
