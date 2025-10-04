import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SidebarItems } from "./SidebarItems"; 

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false); 
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 
        ${collapsed ? "w-20" : "w-64"} bg-teal-600 text-white p-4 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-all duration-300 flex flex-col`}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">
          {!collapsed && "DietTrifics"}
        </h2>

        {/* Nav Links */}
        <nav className="space-y-4 flex-1">
          {SidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              <i className={`${item.icon} w-5 h-5`}></i>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mt-auto bg-teal-700 hover:bg-teal-800 p-2 rounded text-center"
        >
          {collapsed ? (
            <i className="fa-solid fa-arrow-right"></i>
          ) : (
            <i className="fa-solid fa-arrow-left"></i>
          )}
        </button>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="md:hidden text-gray-600 hover:text-teal-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars w-6 h-6"></i>
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>

          <div className="space-x-6 flex items-center">
            <button className="text-gray-600 hover:text-teal-600 font-medium flex items-center gap-2">
              <i className="fa-solid fa-bell"></i> Notifications
            </button>
            <button className="text-gray-600 hover:text-teal-600 font-medium flex items-center gap-2">
              <i className="fa-solid fa-user"></i> Profile
            </button>
          </div>
        </header>

        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
