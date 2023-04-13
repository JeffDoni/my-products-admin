import { useState, useEffect } from "react";
import "../styles/Admin.css";
import Header from "../components/Header";
import Aside from "../components/Aside";

const Admin = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [enableBTn, setEnableBtn] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });

  const buttonEnable = () => {
    if(enableBTn === false) return setEnableBtn(true);
    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: "", price: "" });
    }
  };

  const handleEditProduct = (index) => {
    const editedProduct = products[index];
    setNewProduct({ ...editedProduct });
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="adminContainer">
      <Header />
      <div className="container">
        <Aside />
        <div className="mainContent">
          {enableBTn && (
            <form>
              <input
                type="text"
                placeholder="Product name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="input"
              />
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="input"
              />
              <button onClick={handleAddProduct} className="button">
                Add Product
              </button>
            </form>
          )}

          <div className="container-title">
          <h1 className="title">List of Products</h1>
          <button onClick={buttonEnable} className="button">+ New</button>
          </div>

          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td className="priceCell">$ {Number(product.price).toFixed(2)}</td>
                    <td className="container-button">
                      <button
                        onClick={() => handleEditProduct(index)}
                        className="button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(index)}
                        className="button-delete"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
