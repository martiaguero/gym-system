"use client"

import { useState } from "react"
import TableWithExport from "../components/TableWithExport"
import { PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"

export default function ProductosPage() {
  const [showModalProducto, setShowModalProducto] = useState(false)
  const [showModalVenta, setShowModalVenta] = useState(false)

  const columnsProductos = [
    { header: "Detalle", accessor: "detalle" },
    { header: "Precio", accessor: "precio" },
    { header: "Stock", accessor: "stock" },
  ]

  const dataProductos = [
    { detalle: "Proteína Whey X", precio: "$8.000", stock: 12 },
    { detalle: "Creatina 300g", precio: "$5.500", stock: 8 },
    { detalle: "Agua mineral 500ml", precio: "$300", stock: 40 },
    { detalle: "Barra energética", precio: "$450", stock: 25 },
  ]

  const columnsVentas = [
    { header: "Fecha", accessor: "fecha" },
    { header: "Producto", accessor: "producto" },
    { header: "Cantidad", accessor: "cantidad" },
    { header: "Total", accessor: "total" },
  ]

  const dataVentas = [
    { fecha: "2025-11-15", producto: "Proteína Whey X", cantidad: 2, total: "$16.000" },
    { fecha: "2025-11-14", producto: "Agua mineral", cantidad: 5, total: "$1.500" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Sección de Productos */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Productos</h2>
            <p className="text-sm text-slate-500 mt-1">Gestiona el inventario de productos</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowModalVenta(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Registrar venta
            </button>
            <button
              onClick={() => setShowModalProducto(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <PlusIcon className="h-5 w-5" />
              Registrar producto
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <TableWithExport
            columns={columnsProductos}
            data={dataProductos}
            filename="productos.csv"
            onEdit={(row) => console.log("Editar:", row)}
            onDelete={(row) => console.log("Eliminar:", row)}
          />
        </div>
      </div>

      {/* Sección de Ventas */}
      <div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800">Historial de Ventas</h3>
          <p className="text-sm text-slate-500 mt-1">Registro de todas las ventas realizadas</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <TableWithExport columns={columnsVentas} data={dataVentas} filename="ventas.csv" />
        </div>
      </div>

      {/* Modal para registrar producto */}
      {showModalProducto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Nuevo Producto</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Detalle del producto</label>
                <input
                  type="text"
                  placeholder="Nombre del producto"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Precio</label>
                <input
                  type="number"
                  placeholder="8000"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Stock inicial</label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModalProducto(false)}
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

      {/* Modal para registrar venta */}
      {showModalVenta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Registrar Venta</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Producto</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Proteína Whey X</option>
                  <option>Creatina 300g</option>
                  <option>Agua mineral 500ml</option>
                  <option>Barra energética</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cantidad</label>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fecha</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModalVenta(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Registrar Venta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
