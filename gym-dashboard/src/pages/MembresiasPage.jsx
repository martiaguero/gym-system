"use client"

import { useState } from "react"
import TableWithExport from "../components/TableWithExport"
import { PlusIcon } from "@heroicons/react/24/outline"

export default function MembresiasPage() {
  const [showModal, setShowModal] = useState(false)

  const columns = [
    { header: "Id", accessor: "id" },
    { header: "Tipo", accessor: "tipo" },
    { header: "Precio", accessor: "precio" },
    { header: "Duración", accessor: "duracion" },
    { header: "Descripción", accessor: "descripcion" },
  ]

  const data = [
    { id: 1, tipo: "Mensual", precio: "$3.500", duracion: "30 días", descripcion: "Acceso ilimitado" },
    {
      id: 2,
      tipo: "Trimestral",
      precio: "$9.000",
      duracion: "90 días",
      descripcion: "Acceso ilimitado + 1 clase gratis",
    },
    { id: 3, tipo: "Anual", precio: "$30.000", duracion: "365 días", descripcion: "Acceso ilimitado + beneficios" },
  ]

  const handleEdit = (row) => {
    console.log("Editar membresía:", row)
  }

  const handleDelete = (row) => {
    console.log("Eliminar membresía:", row)
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Tipos de Membresía</h2>
          <p className="text-sm text-slate-500 mt-1">Gestiona los planes de membresía disponibles</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <PlusIcon className="h-5 w-5" />
          Crear nuevo tipo
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <TableWithExport
          columns={columns}
          data={data}
          filename="membresias.csv"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Modal para crear membresía */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nuevo Tipo de Membresía</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre del tipo</label>
                <input
                  type="text"
                  placeholder="Ej: Mensual, Anual..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Precio</label>
                <input
                  type="number"
                  placeholder="3500"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Duración (días)</label>
                <input
                  type="number"
                  placeholder="30"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
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
