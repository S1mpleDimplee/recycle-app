import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Dashboard from './pages/Dashboard'
import Overview from './pages/dashboard/Overview'
import Listings from './pages/dashboard/Listings'
import AddListing from './pages/dashboard/AddListing'
import Purchases from './pages/dashboard/Purchases'
import Profile from './pages/dashboard/Profile'

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
      </Routes>
    </AnimatePresence>
  )
}
