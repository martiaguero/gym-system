"use client"
import { ArrowDownTrayIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"

export default function TableWithExport({ columns, data, filename = "export.csv", onEdit, onDelete }) {
  const exportCsv = () => {
    const rows = [columns.map((c) => c.header), ...data.map((r) => columns.map((c) => r[c.accessor] ?? ""))]
    const csvContent = rows.map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n")

    const BOM = "\uFEFF"
    const csvWithBOM = BOM + csvContent

    const blob = new Blob([csvWithBOM], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      {/* Botón de exportar */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={exportCsv}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          Exportar a Excel (CSV)
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {columns.map((col) => (
                <th key={col.header} className="px-4 py-3 text-left font-semibold text-slate-700">
                  {col.header}
                </th>
              ))}
              {(onEdit || onDelete) && <th className="px-4 py-3 text-left font-semibold text-slate-700">Acciones</th>}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                {columns.map((col) => (
                  <td key={col.header} className="px-4 py-3 text-slate-700">
                    {row[col.accessor]}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Editar"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Eliminar"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
