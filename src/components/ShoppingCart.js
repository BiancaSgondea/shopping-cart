import { MDBBtn,  MDBTableBody, MDBTableHead, MDBInput, MDBInputGroup , MDBTable, MDBCol} from "mdbreact";

import React, { Component } from "react";
 class ShoppingCart extends Component {
  render() {
    const { items, handleChange, onClick, total } = this.props;
    const columns = [
      {
        label: "#ID",
        field: "id",
      },
      {
        label: "Description",
        field: "description",
      },
      {
        label: "Price",
        field: "priece",
      },
      {
        label: "Qty",
        field: "qty",
      },
      {
        label: "Amount",
        field: "amount",
      },
      {
        label: "",
        field: "handle",
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
        <MDBTable btn fixed className="cart-table">
          <MDBTableHead  columns={columns} color="default-color" />
          <MDBTableBody rows={rows} />
        </MDBTable>
        <hr/>
        <h3 className="total">Total: {total}</h3> 
      </MDBCol>
    );
  }
}

export default ShoppingCart;
