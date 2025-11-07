"use client"

import { Outlet } from "react-router-dom"
import Sidebar from "@/components/sidebar"
import TopNav from "@/components/top-nav"
import { useState } from "react"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
