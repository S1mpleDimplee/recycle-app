import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'

import Dashboard from './pages/Dashboard'
import Overview from './pages/dashboard/customer/Overview'
import Listings from './pages/dashboard/customer/Listings'
import AddListing from './pages/dashboard/customer/AddListing'
import Purchases from './pages/dashboard/customer/Purchases'
import Profile from './pages/dashboard/customer/Profile'

import AdminDashboard from './pages/AdminDashboard'
import Stats from './pages/dashboard/admin/Stats'
import Users from './pages/dashboard/admin/Users'
import Articles from './pages/dashboard/admin/Articles'
import Reports from './pages/dashboard/admin/Reports'
import Settings from './pages/dashboard/admin/Settings'

export default function App() {
  const location = useLocation()
  const topLevel = '/' + location.pathname.split('/')[1]

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={topLevel}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/over-tradr" element={<About />} />
        <Route path="/aan-de-slag" element={<HowItWorks />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview"  element={<Overview />} />
          <Route path="listings"  element={<Listings />} />
          <Route path="add"       element={<AddListing />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="profile"   element={<Profile />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="stats" replace />} />
          <Route path="stats"    element={<Stats />} />
          <Route path="users"    element={<Users />} />
          <Route path="articles" element={<Articles />} />
          <Route path="reports"  element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
