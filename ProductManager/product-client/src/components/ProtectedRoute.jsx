import { Navigate, Outlet } from 'react-router-dom'
import { getToken } from '../services/api.js'

function ProtectedRoute() {
  const token = getToken()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
