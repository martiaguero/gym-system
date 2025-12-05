"use client"

import { Bars3Icon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      logout()
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      {/* Barra de búsqueda */}
      <div className="flex items-center gap-4 flex-1">
        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Bars3Icon className="h-6 w-6 text-slate-600" />
        </button>
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Usuario con menú dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-3 hover:bg-slate-50 rounded-lg p-2 transition-colors"
        >
          <div className="text-right">
            <div className="text-sm font-medium text-slate-700">{user?.nombre || "Usuario"}</div>
            <div className="text-xs text-slate-500">{user?.rol || "Admin"}</div>
          </div>
          <img
            src={user?.avatar || "https://i.pravatar.cc/80?u=admin"}
            alt="Avatar"
            className="h-10 w-10 rounded-full border-2 border-slate-200"
          />
          <ChevronDownIcon className="h-4 w-4 text-slate-400" />
        </button>

        {/* Dropdown menu */}
        {showMenu && (
          <>
            {/* Overlay para cerrar el menú */}
            <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />

            {/* Menú */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-20">
              <div className="px-4 py-2 border-b border-slate-200">
                <p className="text-sm font-medium text-slate-700">{user?.nombre}</p>
                <p className="text-xs text-slate-500">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
