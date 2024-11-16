import React from "react";

const Todo = () => {
  return (
    <tr className="bg-white ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Learn NEXT</td>
      <td className="px-6 py-4">Pending</td>
      <td className="flex gap-2 px-6 py-4">
        <button className="px-3 py-1 text-white bg-green-500 rounded-md">
          Done
        </button>
        <button className="px-3 py-1 text-white bg-red-500 rounded-md">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
