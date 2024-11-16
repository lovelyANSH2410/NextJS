"use client";
import Todo from "@/Components/Todo";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  console.log(formData);

  const onSubmbitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      toast.success("Todo added successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
        onSubmit={onSubmbitHandler}
      >
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border-2"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Enter description"
          className="w-full px-3 py-2 border-2"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
        <button
          className="px-10 py-2 text-white bg-blue-500 rounded-md w-fit"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="relative overflow-x-auto w-[80%] mt-24 max-w-[800px] mx-auto border">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
