import { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,setProducts,products }) => {
    // const [product,setProduct] = useState(coffee);
    // const [allProducts,setAllProducts] = useState(products)
  const {
    _id,
    name,
    chef,
    supplier,
    taste,
    category,
    details,
    price,
    photoUrl,
  } = coffee;   ;

  // const handleUpdate = _id =>{
  //   console.log(_id)
  //   fetch(`http://localhost:5000/coffee/${_id}`,{
  //     method : "UPDATE",
  //     headers: {

  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //   })
  // }


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
        
            if(data.deletedCount>0){
                const remaining = products.filter(p=> p._id !== _id);
                setProducts(remaining)
                Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
                  )
            }
          });
          
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1]  shadow-xl p-5">
      <figure>
        <img className="bg-[#F5F4F1]" src={photoUrl} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center bg-[#F5F4F1] w-full">
        <div>
          <p>Name : {name}</p>
          <p>Chef : {chef}</p>
          <p>Price : {price}</p>
        </div>
        <div className="btn-group btn-group-vertical mr-4 gap-2">
          <button className="btn bg-[#D2B48C] ">
            <FaEye></FaEye>
          </button>
          <Link to={`updateCoffee/${_id}`}><button  className="btn ">
            <FaPen></FaPen>
          </button></Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-400 ">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
