import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAdd = event =>{
        event.preventDefault();
        const form = event.target ;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photo.value;
        const price = form.price.value ;
        const coffee = {name,chef,supplier,taste,category,details,price,photoUrl}
        console.log(coffee)
        fetch ('http://localhost:5000/coffee',{
            method : "POST",
            headers : {
                "content-type": "application/json",
            },
            body : JSON.stringify(coffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Coffee Was Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

  return (
    <div className="bg-[#F4F3F0] p-[100px] rounded mt-[100px] mx-[300px]">
      <Link to="/" className='btn'>Back To Home</Link>
      <p className="text-center text-4xl mb-5">Add New Coffee</p>
      <p className="text-center mx-[100px]">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAdd}>
        {/* row name and chef  */}
        <div className="flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
                name="chef"
              />
            </label>
          </div>
        </div>
        {/* row supplier and taste  */}
        <div className="flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
                name="taste"
              />
            </label>
          </div>
        </div>
        {/* row category and details  */}
        <div className="flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        {/* row photo url  */}
        <div className="flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee price"
                className="input input-bordered w-full"
                name="price"
              />
            </label>
          </div>
        </div>
        <div>
            <input type="submit" value="Add Coffee" className="btn btn-block bg-blue-950 mt-5" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
