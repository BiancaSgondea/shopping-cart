import { MDBBtn,  MDBTableBody, MDBTableHead, MDBInput, MDBInputGroup , MDBTable, MDBCol} from "mdbreact";

import React, { Component } from "react";
 class ShoppingCart extends Component {
  render() {
    const { items, handleChange, onClick, total } = this.props;
    const columns = [
      {
        label: "#ID",
        field: "id",
        minimal: "sm"
      },
      {
        label: "Description",
        field: "description",
        minimal: "lg"
      },
      {
        label: "Price",
        field: "priece",
        minimal: "sm"
      },
      {
        label: "Qty",
        field: "qty",
        minimal: "sm"
      },
      {
        label: "Amount",
        field: "amount",
        minimal: "sm"
      },
      {
        label: "",
        field: "handle",
        minimal: "sm"
      }
    ];

    const rows = items.map(item => ({
      id: item.id,
      description: item.description,
      price: item.price,
      qty: (
        <input
          className="qty-input"
          type="number"
          min={1}
          name="qty"
          value={item.qty}
          id={item.id}
          onChange={handleChange}
        />
      ),
      amount: item.price * item.qty,
      handle: (
        <MDBBtn outline size="sm" onClick={e => onClick(e, item.id)}>
          Remove
        </MDBBtn>
      )
    }));

    return (
      <MDBCol>
        <MDBTable btn className="cart-table">
          <MDBTableHead  columns={columns} color="default-color" />
          <MDBTableBody rows={rows} />
        </MDBTable>
        <hr/>
        <h4 className="total">Total: {total}</h4> 
      </MDBCol>
    );
  }
}

export default ShoppingCart;
