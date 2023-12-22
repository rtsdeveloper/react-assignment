import React, { useState } from 'react';
import './App.css';

const App = () => {
    //Core Data...
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Fruits", price: "$4", stocked: true, name: "Mango" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Mushroom" },
    ];

    const [checkboxFilter, setCheckboxFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleCheckbox=(e)=>{
        setCheckboxFilter(e.target.checked);
        //console.log(e.target.checked);
    };

    const filteredByCheckbox = checkboxFilter==true ? products.filter(data => data.stocked) : products;
    //console.log(filteredByCheckbox);
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        //console.log(e.target.value);
    };

    const filteredBySearch = filteredByCheckbox.filter(data =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    //console.log(filteredBySearch)

    const Fruits = filteredBySearch.filter((product) => product.category === "Fruits");
    //console.log(Fruits);

    const Vegetables = filteredBySearch.filter((product) => product.category === "Vegetables");
    //console.log(Vegetables);

    return (
        <div className='container mt-3'>
            <div>
                <input type="text" className='form-control-sm mb-3' placeholder='Search Here...' onChange={handleSearch} />
            </div>
            <div>
                <input type="checkbox" className='mb-3' onClick={handleCheckbox} />
                <span className='fw-bold'> Only show products in stock</span>
            </div>
            <table className="table table-default">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><b className='fs-3'>Fruits</b></td></tr>
                    {Fruits.map((product, index) => (
                        <tr key={index}>
                            <td className={product.stocked ? 'text-primary fw-bold' : 'text-danger fw-bold text-decoration-line-through'}>{index + 1}. {product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                    <tr><td><b className='fs-3'>Vegetables</b></td></tr>
                    {Vegetables.map((product, index) => (
                        <tr key={index}>
                            <td className={product.stocked ? 'text-primary fw-bold' : 'text-danger fw-bold text-decoration-line-through'}>{index + 1}. {product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
