import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    totalContacts: 0,
    totalBlogs: 0,
  });
  const [approvedAppointments, setApprovedAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resAppointments = await axios.get("http://localhost:8000/api/appointments");
        const approved = (resAppointments.data.appointments || []).filter(
          (a) => a.status === "approved"
        );
        setApprovedAppointments(approved);

        const resContacts = await axios.get("http://localhost:8000/api/contact");
        setContacts(resContacts.data.contacts || []);

        const resBlogs = await axios.get("http://localhost:8000/blogs");

        setStats({
          totalAppointments: approved.length,
          totalContacts: resContacts.data.contacts?.length || 0,
          totalBlogs: resBlogs.data?.length || 0,
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-500"></div>
        <span className="ml-4 text-lg font-semibold text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-teal-500 text-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">Total Appointments</h2>
          <p className="text-4xl font-bold mt-2">{stats.totalAppointments}</p>
        </div>
        <div className="bg-sky-500 text-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">Total Contacts</h2>
          <p className="text-4xl font-bold mt-2">{stats.totalContacts}</p>
        </div>
        <div className="bg-indigo-500 text-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">Total Blogs</h2>
          <p className="text-4xl font-bold mt-2">{stats.totalBlogs}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Approved Appointments</h3>
          <ul className="space-y-2">
            {approvedAppointments.slice(0, 5).map((apt) => (
              <li key={apt._id} className="flex justify-between">
                <span>{apt.name || "Unknown"}</span>
                <span className="text-gray-500">
                  {apt.date && apt.time
                    ? new Date(
                      apt.date.split("/").reverse().join("-") + "T" + apt.time
                    ).toLocaleString()
                    : "N/A"}
                </span>


              </li>
            ))}
            {approvedAppointments.length === 0 && (
              <li className="text-gray-500">No approved appointments yet</li>
            )}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Contact Form Submissions</h3>
          {contacts.slice(0, 3).map((c) => (
            <div key={c._id} className="mb-3 border-b pb-2">
              <p className="font-medium">{c.name}</p>
              <p className="text-gray-500">{c.subject}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Extra sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h4 className="text-lg font-semibold">Home</h4>
          <p className="text-gray-500">Welcome to DietTrifics Dashboard</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h4 className="text-lg font-semibold">Course</h4>
          <p className="text-gray-500">Manage your diet and nutrition courses</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h4 className="text-lg font-semibold">Website Settings</h4>
          <p className="text-gray-500">Configure your website settings</p>
        </div>
      </div>
    </div>
  );
}
