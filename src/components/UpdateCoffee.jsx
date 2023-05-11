import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const toUpdateData = useLoaderData();
  console.log(toUpdateData);
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
  } = toUpdateData;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photo.value;
    const price = form.price.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      photoUrl,
    };
    console.log(updateCoffee);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to update this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // form.reset()
          Swal.fire("Updated!", "Your file has been updated.", "success");
        }
      });

        
      }
    });
    
  };
  return (
    <div className="mt-[100px] mx-[200px] bg-red-300 px-[100px] py-[150px]">
      <Link to="/" className="btn">
        Back To Home{" "}
      </Link>
      <p className="text-4xl text-center mb-10 font-bold">
        Update Coffee {name}
      </p>
      <img className="mx-auto w-[100px]" src={photoUrl} alt="" />
      <form onSubmit={handleUpdate}>
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
                defaultValue={name}
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
                defaultValue={chef}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photoUrl}
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
                defaultValue={price}
              />
            </label>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block bg-blue-950 mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
