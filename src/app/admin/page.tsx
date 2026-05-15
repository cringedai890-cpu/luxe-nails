"use client";
import React, { useState } from 'react';
import { LayoutDashboard, Calendar, Image as ImageIcon, Settings, LogOut, Search, MoreHorizontal, CheckCircle, Clock, XCircle } from "lucide-react";

const bookings = [
  { id: "#8231", name: "Ananya Sharma", service: "Bridal Luxury Set", date: "24 May 2026", status: "Confirmed" },
  { id: "#8230", name: "Priya Singh", service: "Nail Extensions", date: "25 May 2026", status: "Pending" },
  { id: "#8229", name: "Sneha Gupta", service: "Gel Polish", date: "25 May 2026", status: "Cancelled" },
  { id: "#8228", name: "Riya Malik", service: "Home Visit", date: "26 May 2026", status: "Confirmed" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Bookings");

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-luxe-black flex flex-col p-6">
        <div className="mb-12 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-luxe-gold/20 flex items-center justify-center text-luxe-gold mb-4">
             <LayoutDashboard size={32} />
          </div>
          <h1 className="text-sm font-bold uppercase tracking-widest text-luxe-gold text-center">Luxe Admin</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {["Dashboard", "Bookings", "Gallery", "Services", "Settings"].map((item) => (
            <button 
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                activeTab === item ? 'bg-luxe-gold text-black font-bold' : 'text-white/40 hover:bg-white/5'
              }`}
            >
              {item === "Dashboard" && <LayoutDashboard size={20} />}
              {item === "Bookings" && <Calendar size={20} />}
              {item === "Gallery" && <ImageIcon size={20} />}
              {item === "Services" && <Settings size={20} />}
              {item === "Settings" && <Settings size={20} />}
              {item}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all mt-auto">
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif font-bold">Manage {activeTab}</h2>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input type="text" placeholder="Search entries..." className="bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-luxe-gold transition-all" />
            </div>
            <button className="btn-primary py-3 px-6 text-xs">ADD NEW</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: "Total Bookings", val: "128", trend: "+12%" },
            { label: "New Inquiries", val: "14", trend: "+5%" },
            { label: "Gallery Views", val: "2.4K", trend: "+18%" },
            { label: "Revenue", val: "₹45K", trend: "+8%" }
          ].map((stat, i) => (
            <div key={i} className="bg-luxe-black border border-white/5 p-8 rounded-3xl">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold">{stat.val}</h3>
                <span className="text-green-500 text-xs font-bold">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-luxe-black border border-white/5 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-white/40 text-xs uppercase tracking-widest">
              <tr>
                <th className="px-8 py-6">ID</th>
                <th className="px-8 py-6">Customer</th>
                <th className="px-8 py-6">Service</th>
                <th className="px-8 py-6">Date</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-6 text-sm font-mono text-luxe-gold">{booking.id}</td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-white">{booking.name}</p>
                  </td>
                  <td className="px-8 py-6 text-sm text-white/60">{booking.service}</td>
                  <td className="px-8 py-6 text-sm text-white/60">{booking.date}</td>
                  <td className="px-8 py-6">
                    <span className={`flex items-center gap-2 text-xs font-bold ${
                      booking.status === "Confirmed" ? "text-green-500" : 
                      booking.status === "Pending" ? "text-yellow-500" : "text-red-500"
                    }`}>
                      {booking.status === "Confirmed" && <CheckCircle size={14} />}
                      {booking.status === "Pending" && <Clock size={14} />}
                      {booking.status === "Cancelled" && <XCircle size={14} />}
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-white/20 hover:text-white transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
