"use client"

import { useState } from "react"
import TableWithExport from "../components/TableWithExport"
import { PlusIcon } from "@heroicons/react/24/outline"

export default function ClientesPage() {
  const [showModal, setShowModal] = useState(false)

  const columns = [
    { header: "Id", accessor: "id" },
    { header: "Nombre", accessor: "nombre" },
    { header: "Tipo de Membresía", accessor: "membresia" },
    { header: "Expiración", accessor: "expiracion" },
    { header: "Estado", accessor: "estado" },
  ]

  const data = [
    { id: 1, nombre: "Juan Pérez", membresia: "Premium", expiracion: "2025-12-01", estado: "Activa" },
    { id: 2, nombre: "María López", membresia: "Mensual", expiracion: "2024-11-10", estado: "En mora" },
    { id: 3, nombre: "Carlos Rodríguez", membresia: "Anual", expiracion: "2026-03-15", estado: "Activa" },
  ]

  const handleEdit = (row) => {
    console.log("Editar cliente:", row)
    // Aquí implementarás la lógica de edición
  }

  const handleDelete = (row) => {
    console.log("Eliminar cliente:", row)
    // Aquí implementarás la lógica de eliminación
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Clientes</h2>
          <p className="text-sm text-slate-500 mt-1">Gestiona los clientes del gimnasio</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <PlusIcon className="h-5 w-5" />
          Crear nuevo cliente
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <TableWithExport
          columns={columns}
          data={data}
          filename="clientes.csv"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Modal flotante para crear cliente */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nuevo Cliente</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de membresía</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Mensual</option>
                  <option>Trimestral</option>
                  <option>Anual</option>
                  <option>Premium</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de expiración</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
