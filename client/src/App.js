import "./App.css";
import { useState } from "react";
import Axios from 'axios';
import React, { useEffect } from 'react';

function App() {
    const [name, setName] = useState("");
    const [materialgroup, setMaterialGroup] = useState("");
    const [dimension, setDimension] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [orderdate, setOrderDate] = useState("");
    const [receiptdate, setReceiptDate] = useState("");
    const [supplier, setSupplier] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
    const [newReceiptDate, setNewReceiptDate] = useState(0);

    const addEmployee = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            materialgroup: materialgroup,
            dimension: dimension,
            quantity: quantity,
            price: price,
            orderdate: orderdate,
            receiptdate: receiptdate,
            supplier: supplier,


        }).then(() => {
            console.log("success");
            getEmployees();
        });
    };

    useEffect(() => {
        getEmployees();
      }, [])

    const getEmployees = () => {
        Axios.get('http://localhost:3001/employees').then((response) => {
            setEmployeeList(response.data)
        });
    }

    const updateReceiptDate = (id) => {
        Axios.put("http://localhost:3001/update", { receiptdate: newReceiptDate, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: val.name,
                                materialgroup: val.materialgroup,
                                dimension: val.dimension,
                                quantity: val.quantity,
                                price: val.price,
                                orderdate: val.orderdate,
                                receiptdate: newReceiptDate,
                                supplier: val.supplier,
                            }
                            : val;
                    })
                );
            }
        );
    };

    const deleteMaterial = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
          setEmployeeList(
            employeeList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };

    const displayInfo = () => {
        console.log(name, dimension);
    }

    return (
        <div className="App">
            <div className="addInformation">

                <label>Material group:</label>
                <select id="selectId"name="nyc" onChange={(event) => {
                    setMaterialGroup(event.target.value);
                }}>
                    <option value="Lakštai">Lakštai</option>
                    <option value="Kampuočiai">Kampuočiai</option>
                    <option value="Juostos">Juostos</option>
                    <option value="Apvalūs vamzdžiai">Apvalūs vamzdžiai</option>
                    <option value="Kvadratiniai vamzdžiai">Kvadratiniai vamzdžiai</option>
                    <option value="Varžtai">Varžtai</option>
                    <option value="Poveržlės">Poveržlės</option>
                    <option value="Veržlės">Veržlės</option>
                </select>


                <label>Name:</label>
                <input type="text"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />

                <label>Dimension:</label>
                <input type="text"
                    onChange={(event) => {
                        setDimension(event.target.value);
                    }}
                />

                <label>Quantity:</label>
                <input type="number"
                    onChange={(event) => {
                        setQuantity(event.target.value);
                    }}
                />

                <label>Price:</label>
                <input type="number"
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />

                <label>Supplier:</label>
                <input type="text"
                    onChange={(event) => {
                        setSupplier(event.target.value);
                    }}
                />

                <label>Set order date:</label>
                <input type="date"
                    onChange={(event) => {
                        setOrderDate(event.target.value);
                    }}
                />

                <label>Set receipt date:</label>
                <input type="date"
                    onChange={(event) => {
                        setReceiptDate(event.target.value);
                    }}
                />

                <button class="addButtonGroup" onClick={addEmployee}>Add Material</button>

                <div className="employees">
                    <button class="addButtonGroup" onClick={getEmployees}>Show All Materials</button>
                </div>
            </div>
            <div className="listMaterial">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Material group</th>
                            <th>Name</th>
                            <th>Dimension</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Supplier</th>
                            <th>Order date</th>
                            <th>Receipt date</th>
                            <th colspan="2">Update Receipt Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Rendering data*/}
                        {employeeList.map((val, key) => {
                            return (
                                <tr key={key} >
                                    <td>{val.id}</td>
                                    <td>{val.materialgroup}</td>
                                    <td>{val.name}</td>
                                    <td>{val.dimension}</td>
                                    <td>{val.quantity}</td>
                                    <td>{val.price}</td>
                                    <td>{val.supplier}</td>
                                    <td>{val.orderdate}</td>
                                    <td>{val.receiptdate}</td>

                                    <td class="inputDate">
                                        <input type="text" placeholder="yyyy-mm-dd" onChange={(event) => {
                                            setNewReceiptDate(event.target.value);
                                        }}
                                        />
                                    </td>

                                    <td>
                                        <a href="#" class="btn border-shadow update" onClick={() => {
                                            updateReceiptDate(val.id);
                                        }}>
                                            <span><i class="fas fa-edit"></i></span>
                                        </a>

                                    </td>

                                    <td>
                                        <a href="#" class="btn border-shadow delete" onClick={() => {
                                            deleteMaterial(val.id);
                                        }}>
                                            <span><i class="fas fa-trash-alt"></i></span>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default App;