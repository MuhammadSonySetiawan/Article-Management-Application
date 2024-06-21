import Link from 'next/link';
import React from 'react'

function Edit(params) {
    console.log(params.id)
  return (
    <div>
      <Link href={`/edit-users/${params.id}`}>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Edit
        </button>
      </Link>
    </div>
  );
}

export default Edit