"use client"

import { useState } from "react"
import TableWithExport from "../components/TableWithExport"
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function PagosPage() {
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { header: "Fecha", accessor: "fecha" },
    { header: "Id Cliente", accessor: "id" },
    { header: "Nombre y Apellido", accessor: "nombre" },
    { header: "Monto", accessor: "monto" },
    { header: "Tipo de Membresía", accessor: "tipo" },
  ]

  const allData = [
    { fecha: "2025-11-01", id: 1, nombre: "Juan Pérez", monto: "$3.500", tipo: "Mensual" },
    { fecha: "2025-11-05", id: 3, nombre: "Carlos Rodríguez", monto: "$30.000", tipo: "Anual" },
    { fecha: "2025-11-10", id: 5, nombre: "Laura Martínez", monto: "$9.000", tipo: "Trimestral" },
    { fecha: "2025-11-15", id: 2, nombre: "María López", monto: "$3.500", tipo: "Mensual" },
  ]

  // Filtrar datos por nombre
  const filteredData = allData.filter((item) => item.nombre.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Pagos (Registro Manual)</h2>
          <p className="text-sm text-slate-500 mt-1">Registra y gestiona los pagos de membresías</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Buscador */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Filtrar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <PlusIcon className="h-5 w-5" />
            Registrar pago
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <TableWithExport columns={columns} data={filteredData} filename="pagos.csv" />
      </div>

      {/* Modal para registrar pago */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Registrar Pago</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de pago</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cliente</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Juan Pérez</option>
                  <option>María López</option>
                  <option>Carlos Rodríguez</option>
                  <option>Laura Martínez</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de membresía</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Mensual - $3.500</option>
                  <option>Trimestral - $9.000</option>
                  <option>Anual - $30.000</option>
                  <option>Premium - $5.000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Monto</label>
                <input
                  type="number"
                  placeholder="3500"
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
