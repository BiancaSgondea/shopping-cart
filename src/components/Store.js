import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
export class Store extends Component {
  render() {
    const { items, onClick } = this.props;
    return (
      <MDBCol>
      {items.map(item=> ( 
        <MDBRow key= {item.id}>
        <MDBCol md="1"><p>{item.id}</p></MDBCol>
        <MDBCol md="8"><p>{item.description}</p></MDBCol>
        <MDBCol md="1"><p className = "float-right">{item.price} $ </p></MDBCol>
        <MDBCol md="2"> <MDBBtn
        className = "float-right"
          outline
          size="sm"
           onClick={(e) => onClick(e, item.id)}   
        >
          Add to cart
        </MDBBtn></MDBCol>
      </MDBRow>  
      ))}
    </MDBCol>
    );
  }
}

export default Store;
