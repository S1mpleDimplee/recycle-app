import { recy } from '../Icons/Icons'
import './DashboardTopbar.css'

export default function DashboardTopbar({
  title,
  user,
  onMenuClick,
  showRecys = true,
}) {
  return (
    <header className="topbar">
      <button className="topbar-hamburger" onClick={onMenuClick} aria-label="Menu">
        <span /><span /><span />
      </button>

      <h1 className="topbar-title">{title}</h1>

      <div className="topbar-right">
        {showRecys && user?.recys !== undefined && (
          <span className="topbar-recys">
            <img src={recy} alt="" className="recy-icon" /> {user.recys}
          </span>
        )}
        <div className="topbar-avatar" title={user?.name}>
          {user?.name?.[0] ?? '?'}
        </div>
      </div>
    </header>
  )
}
