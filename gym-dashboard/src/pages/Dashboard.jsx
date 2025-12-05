import { NavLink } from "react-router-dom"
import Card from "../components/Card"
import BarChartClientes, { LineChartVentas } from "../components/BarChartClientes"
import { ExclamationTriangleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
  const alerts = [
    {
      id: 1,
      message: "Membresía de Juan Pérez expira en 3 días",
      type: "warning",
      icon: ExclamationTriangleIcon,
    },
    {
      id: 2,
      message: "Pago pendiente: María López $3500",
      type: "danger",
      icon: ExclamationCircleIcon,
    },
  ]

  const clases = [
    { id: 1, clase: "Spinning", horario: "Lun 18:00", profesor: "Carlos", capacidad: 20, inscritos: 16 },
    { id: 2, clase: "Funcional", horario: "Mie 19:00", profesor: "Ana", capacidad: 15, inscritos: 15 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Clientes Totales */}
        <NavLink to="/clientes">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="text-slate-500 text-sm font-medium mb-2">Clientes Totales</h3>
            <p className="text-4xl font-bold text-indigo-600">132</p>
          </div>
        </NavLink>

        {/* Pagos Vencidos */}
        <NavLink to="/pagos">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="text-slate-500 text-sm font-medium mb-2">Pagos Vencidos</h3>
            <p className="text-4xl font-bold text-red-600">12</p>
          </div>
        </NavLink>

        {/* Ventas Realizadas */}
        <NavLink to="/productos">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="text-slate-500 text-sm font-medium mb-2">Ventas Realizadas</h3>
            <p className="text-4xl font-bold text-green-600">54</p>
            <p className="text-slate-600 mt-2 text-sm">$245.600 total</p>
          </div>
        </NavLink>
      </div>

      {/* Gráficos y alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna de gráficos */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Clientes por mes">
            <BarChartClientes />
          </Card>

          <Card title="Ventas por mes">
            <LineChartVentas />
          </Card>
        </div>

        {/* Columna de alertas y clases */}
        <div className="space-y-6">
          {/* Alertas */}
          <Card title="Alertas">
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    alert.type === "danger"
                      ? "bg-red-50 border border-red-200"
                      : "bg-yellow-50 border border-yellow-200"
                  }`}
                >
                  <alert.icon
                    className={`h-5 w-5 mt-0.5 ${alert.type === "danger" ? "text-red-600" : "text-yellow-600"}`}
                  />
                  <p className={`text-sm ${alert.type === "danger" ? "text-red-800" : "text-yellow-800"}`}>
                    {alert.message}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Clases y Asistencia */}
          <Card title="Clases y Asistencia">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="text-left text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="pb-2 font-semibold">Clase</th>
                    <th className="pb-2 font-semibold">Horario</th>
                    <th className="pb-2 font-semibold">Profesor</th>
                    <th className="pb-2 font-semibold">Capacidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clases.map((clase) => (
                    <tr key={clase.id} className="text-slate-700">
                      <td className="py-2">{clase.clase}</td>
                      <td className="py-2">{clase.horario}</td>
                      <td className="py-2">{clase.profesor}</td>
                      <td className="py-2">
                        <span
                          className={`font-medium ${
                            clase.inscritos >= clase.capacidad ? "text-red-600" : "text-green-600"
                          }`}
                        >
                          {clase.inscritos}/{clase.capacidad}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
