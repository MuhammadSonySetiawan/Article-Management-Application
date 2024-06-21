import axios from 'axios';
import React from 'react'

function Delete(params) {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(params.id);
    const idUser = params.id;
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/users/[id]`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <>
        <button
          onClick={handleDelete}
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </>
    </div>
  );
}

export default Delete