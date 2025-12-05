import { NavLink } from "react-router-dom"
import {
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline"

export default function Sidebar() {
  const menuItems = [
    { path: "/", icon: HomeIcon, label: "Overview", end: true },
    { path: "/clientes", icon: UserGroupIcon, label: "Clientes" },
    { path: "/profesores", icon: UserGroupIcon, label: "Profesores" },
    { path: "/membresias", icon: ClipboardDocumentIcon, label: "Membresías" },
    { path: "/clases", icon: AcademicCapIcon, label: "Clases" },
    { path: "/productos", icon: ShoppingBagIcon, label: "Productos" },
    { path: "/pagos", icon: CreditCardIcon, label: "Pagos" },
    { path: "/reportes", icon: ChartBarIcon, label: "Reportes" },
  ]

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6 shadow-sm">
      {/* Logo y nombre del gimnasio */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          GF
        </div>
        <div>
          <div className="font-bold text-lg text-slate-800">FitForge</div>
          <div className="text-xs text-slate-500">Admin</div>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
