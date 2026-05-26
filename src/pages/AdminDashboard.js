import { useState } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import DashboardTopbar from '../components/DashboardTopbar'
import { mockAdmin, adminNavItems } from './dashboard/mockData'
import './Dashboard.css'

export default function AdminDashboard() {
  const [sideOpen, setSideOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = location.pathname.split('/')[2] || 'stats'
  const currentLabel = adminNavItems.find(n => n.id === activeTab)?.label ?? ''

  function handleTabChange(id) {
    navigate(`/admin/${id}`)
    setSideOpen(false)
  }

  return (
    <div className="db-root">
      <Sidebar
        navItems={adminNavItems}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        user={mockAdmin}
        open={sideOpen}
        onClose={() => setSideOpen(false)}
        homeLink="/"
      />

      <div className="db-main">
        <DashboardTopbar
          title={currentLabel}
          user={mockAdmin}
          onMenuClick={() => setSideOpen(o => !o)}
          showRecys={false}
        />

        <div className="db-content">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
