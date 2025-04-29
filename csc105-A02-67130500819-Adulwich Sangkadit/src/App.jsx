import { useState } from "react";

const ShoppingList = () => {
  const [productList, setProductList] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [editIdx, setEditIdx] = useState(null);

  const handleAddItem = () => {
    if (currentInput.trim()) {
      if (editIdx !== null) {
        const newList = [...productList];
        newList[editIdx].name = currentInput;
        setProductList(newList);
        setEditIdx(null);
      } else {
        setProductList([...productList, { name: currentInput, purchased: false }]);
      }
      setCurrentInput("");
    }
  };

  const togglePurchase = (idx) => {
    const newList = [...productList];
    newList[idx].purchased = !newList[idx].purchased;
    setProductList(newList);
  };

  const handleRemoveItem = (idx) => {
    setProductList(productList.filter((_, i) => i !== idx));
  };

  const handleEditItem = (idx) => {
    setCurrentInput(productList[idx].name);
    setEditIdx(idx);
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      width: "100vw", 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5"
    }}>
      <div style={{ 
        backgroundColor: "white", 
        padding: "20px", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        width: "350px", 
        textAlign: "center" 
      }}>
        <h1>Shopping List</h1>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px", justifyContent: "center" }}>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Enter an item"
            style={{ padding: "5px", width: "200px", borderRadius: "5px" }}
          />
          <button onClick={handleAddItem} style={{ padding: "5px 10px", backgroundColor: "green", color: "white", borderRadius: "5px" }}>
            Add
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {productList.map((item, idx) => (
            <li
              key={idx}
              onClick={() => togglePurchase(idx)}
              style={{
                textDecoration: item.purchased ? "line-through" : "none",
                backgroundColor: item.purchased ? "#e8f5e9" : "white",
                cursor: "pointer",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
              }}
            >
              <span>{item.name}</span>
              <div style={{ display: "flex", gap: "5px" }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleEditItem(idx); }} 
                  style={{ backgroundColor: 'orange', color: 'black', padding: "5px", borderRadius: "5px" }}
                >
                  Edit
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleRemoveItem(idx); }} 
                  style={{ backgroundColor: 'red', color: 'white', padding: "5px", borderRadius: "5px" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
