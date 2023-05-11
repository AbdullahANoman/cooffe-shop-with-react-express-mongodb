import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();
  const [products,setProducts] = useState(coffees)


  return <div className="mt-[100px] mx-[400px]  ">
    <p className="text-center">--- Sip & Savor ---</p>
    <p className="text-center text-4xl">Our Popular Products</p>
    <div className="text-center mt-5">
    <Link to="/addCoffee"><button className="btn btn-primary">Add Coffee</button></Link>
    </div>
    <div className="grid md:grid-cols-2 gap-10 mt-10">
      {
        products.map(coffee=>(
          <CoffeeCard key={coffee._id} coffee={coffee} products={products} setProducts={setProducts} ></CoffeeCard>
        ))
      }
    </div>
  </div>;
}

export default App;
