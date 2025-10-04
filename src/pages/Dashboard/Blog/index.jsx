import React, { useState } from "react";
import axios from "axios";

export default function AddBlog() {
 const [formData, setFormData] = useState({
  title: "",
  content: "",
  image: "",
  comments: "No comments yet",
  date: new Date().toISOString().split("T")[0],
});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:8000/blogs", formData);
      window.toastify("Blog Added successfully","success")
      setFormData({ title: "", content: "", image: "" });
    } catch (err) {
      console.error(err);
      window.toastify("Blog Not Added Try Again","error")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Blog
        </h2>

        {message && (
          <div
            className={`mb-6 px-4 py-2 rounded-lg text-center font-medium ${
              message.includes("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter blog title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-sm hover:shadow-md transition"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Blog Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your blog content..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-sm hover:shadow-md transition"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="Paste image URL"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-sm hover:shadow-md transition"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Adding..." : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
