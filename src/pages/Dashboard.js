import { useState } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import DashboardTopbar from '../components/DashboardTopbar'
import { mockUser, customerNavItems } from './dashboard/mockData'
import './Dashboard.css'

export default function Dashboard() {
  const [sideOpen, setSideOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = location.pathname.split('/')[2] || 'overview'
  const currentLabel = customerNavItems.find(n => n.id === activeTab)?.label ?? ''

  function handleTabChange(id) {
    navigate(`/dashboard/${id}`)
    setSideOpen(false)
  }

  return (
    <div className="db-root">
      <Sidebar
        navItems={customerNavItems}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        user={mockUser}
        open={sideOpen}
        onClose={() => setSideOpen(false)}
        homeLink="/"
      />

      <div className="db-main">
        <DashboardTopbar
          title={currentLabel}
          user={mockUser}
          onMenuClick={() => setSideOpen(o => !o)}
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
