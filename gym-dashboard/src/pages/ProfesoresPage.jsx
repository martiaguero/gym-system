"use client"

import { useState } from "react"
import TableWithExport from "../components/TableWithExport"
import { PlusIcon } from "@heroicons/react/24/outline"

export default function ProfesoresPage() {
  const [showModal, setShowModal] = useState(false)

  const columns = [
    { header: "Id", accessor: "id" },
    { header: "Nombre", accessor: "nombre" },
    { header: "Especialidad", accessor: "especialidad" },
    { header: "Teléfono", accessor: "telefono" },
  ]

  const data = [
    { id: 1, nombre: "Carlos Méndez", especialidad: "Spinning", telefono: "555-0101" },
    { id: 2, nombre: "Ana García", especialidad: "Funcional", telefono: "555-0102" },
    { id: 3, nombre: "Luis Torres", especialidad: "Yoga", telefono: "555-0103" },
  ]

  const handleEdit = (row) => {
    console.log("Editar profesor:", row)
  }

  const handleDelete = (row) => {
    console.log("Eliminar profesor:", row)
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Profesores</h2>
          <p className="text-sm text-slate-500 mt-1">Gestiona los profesores del gimnasio</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <PlusIcon className="h-5 w-5" />
          Crear nuevo profesor
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <TableWithExport
          columns={columns}
          data={data}
          filename="profesores.csv"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Modal para crear profesor */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nuevo Profesor</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Especialidad</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input
                  type="tel"
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
