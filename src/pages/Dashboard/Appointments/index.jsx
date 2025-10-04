import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState({}); // ✅ button-wise loading state

  // fetch all appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/appointments");
        setAppointments((res.data.appointments || []).filter(a => a.status !== "approved"));
      } catch (err) {
        console.error("Error fetching appointments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // update status
  const handleStatusChange = async (id, status) => {
    setBtnLoading((prev) => ({ ...prev, [id]: status })); // ✅ loader start for this button
    try {
      await axios.put(`http://localhost:8000/api/appointments/${id}`, { status });

      if (status === "approved") {
        setAppointments((prev) => prev.filter((apt) => apt._id !== id));
      } else {
        setAppointments((prev) =>
          prev.map((apt) => (apt._id === id ? { ...apt, status } : apt))
        );
      }

      window.toastify(`Appointment ${status} successfully!`, "success");
    } catch (err) {
      console.error("Error updating status:", err);
      window.toastify("Error updating appointment status", "error");
    } finally {
      setBtnLoading((prev) => ({ ...prev, [id]: null })); // ✅ loader stop
    }
  };

  // loader screen for table
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-500"></div>
        <span className="ml-4 text-lg font-semibold text-gray-600">
          Loading Appointments...
        </span>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">All Appointments</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500">
                  No Appointments Found
                </td>
              </tr>
            ) : (
              appointments.map((apt) => (
                <tr key={apt._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{apt.name}</td>
                  <td className="py-3 px-6">{apt.email}</td>
                  <td className="py-3 px-6">
                    {apt.date ? new Date(apt.date).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="py-3 px-6 capitalize">{apt.status}</td>
                  <td className="py-3 px-6 flex gap-2">
                    {/* Approve Button */}
                    <button
                      onClick={() => handleStatusChange(apt._id, "approved")}
                      className="bg-green-500 text-white px-4 py-1 rounded flex items-center justify-center disabled:opacity-50"
                      disabled={apt.status !== "pending" || btnLoading[apt._id]}
                    >
                      {btnLoading[apt._id] === "approved" ? (
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      ) : (
                        "Approve"
                      )}
                    </button>

                    {/* Reject Button */}
                    <button
                      onClick={() => handleStatusChange(apt._id, "rejected")}
                      className="bg-red-500 text-white px-4 py-1 rounded flex items-center justify-center disabled:opacity-50"
                      disabled={apt.status !== "pending" || btnLoading[apt._id]}
                    >
                      {btnLoading[apt._id] === "rejected" ? (
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      ) : (
                        "Reject"
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
