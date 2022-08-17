import React from "react";

export default function Product(props) {
  return (
    <>


      <div className="row mt-3">
        <div className="col-3">
          <h2>
            {props.product.name}
            <span className="badge bg-secondary">
              {" "}
              Rs {props.product.price}
              
            </span>{" "}
          </h2>
        </div>
        <div className="col-3">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" class="btn btn-dark" onClick={()=>{props.decrement(props.index)}}>
                -
              </button>
              <button type="button" class="btn btn-light">
                {props.product.quantity}
              </button>
              <button type="button" class="btn btn-dark" onClick={()=>{props.increment(props.index)}}>
                +
              </button>
            </div>
            </div>
            <div className="col-3">
                {props.product.quantity*props.product.price}
            </div>
            <button type="button" class="btn btn-danger col-2 mt-1" onClick={()=>{props.deleteProduct(props.index)}}>
                Delete
              </button>

      </div>
     
    </>
  );
}
