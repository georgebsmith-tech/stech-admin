import React from "react";

export const ServiceList = () => {
  return (
    <section className="productholder">
      <div className="sellproduct">
        <div className="addservice">
          <h3>Add New Product/Service</h3>
        </div>
        <div className="greenproducts">
          <button>Products</button>
          <button>Service</button>
        </div>

        <div className="namedproduct">
          <div className="productinput">
            <label>Product name</label>
            <input type="text" placeholder="Product name" />
          </div>

          <div className="productinput">
            <label>Category</label>
            <select className="categorize">
              <option>Select Category</option>
            </select>
          </div>

          <div className="productinput">
            <label>Manufacturer</label>
            <input type="text" placeholder="Enter Manufacturer" />
          </div>

          <div className="productinputType">
            <div className="productinputText">
              <label>Cost Price</label>
              <input type="text" placeholder="0.00" />
            </div>

            <div className="productinputText">
              <label>Selling Price</label>
              <input type="text" placeholder="0.00" />
            </div>
          </div>

          <div className="productinputType">
            <div className="productinputText">
              <label>Available Quantity</label>
              <input type="text" placeholder="0.00" />
            </div>

            <div className="productinputText">
              <label>Quantity per unit</label>
              <input type="text" placeholder="0.00" />
            </div>
          </div>

          <div className="productinputType">
            <div className="productinputText">
              <label>Unit of sale</label>
              <select className="categorizeText">
                <option>Select unit of sale</option>
              </select>
            </div>

            <div className="productinputText">
              <label>Minimum Quantity</label>
              <select className="categorizeText">
                <option>0.00</option>
              </select>
            </div>
          </div>
        </div>

        <div className="includebton">
          <button>Add Product</button>
        </div>
      </div>
    </section>
  );
};
