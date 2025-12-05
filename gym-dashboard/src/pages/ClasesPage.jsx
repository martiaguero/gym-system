"use client"

import { useState } from "react"
import TableWithExport from "../components/TableWithExport"
import { PlusIcon } from "@heroicons/react/24/outline"

export default function ClasesPage() {
  const [showModal, setShowModal] = useState(false)

  const columns = [
    { header: "Clase", accessor: "clase" },
    { header: "Horario", accessor: "horario" },
    { header: "Profesor", accessor: "profesor" },
    { header: "Capacidad", accessor: "capacidad" },
    { header: "Inscritos", accessor: "inscritos" },
  ]

  const data = [
    { clase: "Spinning", horario: "Lun 18:00", profesor: "Carlos", capacidad: 20, inscritos: 16 },
    { clase: "Funcional", horario: "Mie 19:00", profesor: "Ana", capacidad: 15, inscritos: 15 },
    { clase: "Yoga", horario: "Vie 17:00", profesor: "Luis", capacidad: 12, inscritos: 8 },
  ]

  const handleEdit = (row) => {
    console.log("Editar clase:", row)
  }

  const handleDelete = (row) => {
    console.log("Eliminar clase:", row)
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Clases</h2>
          <p className="text-sm text-slate-500 mt-1">Gestiona las clases y horarios del gimnasio</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <PlusIcon className="h-5 w-5" />
          Crear nueva clase
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <TableWithExport
          columns={columns}
          data={data}
          filename="clases.csv"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Modal para crear clase */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nueva Clase</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre de la clase</label>
                <input
                  type="text"
                  placeholder="Ej: Spinning, Yoga..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Horario</label>
                <input
                  type="text"
                  placeholder="Ej: Lun 18:00"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Profesor</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Carlos</option>
                  <option>Ana</option>
                  <option>Luis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Capacidad (bicicletas/lugares)</label>
                <input
                  type="number"
                  placeholder="20"
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
