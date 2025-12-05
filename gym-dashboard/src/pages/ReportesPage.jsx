import Card from "../components/Card"
import { ChartBarIcon, UserGroupIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"

export default function ReportesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Reportes y Estadísticas</h2>
        <p className="text-sm text-slate-500 mt-1">Analiza métricas y tendencias del gimnasio</p>
      </div>

      {/* Métricas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <UserGroupIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Asistencia Promedio</p>
              <p className="text-2xl font-bold text-slate-800">85%</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Ingresos del Mes</p>
              <p className="text-2xl font-bold text-slate-800">$245K</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <ArrowTrendingUpIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Crecimiento</p>
              <p className="text-2xl font-bold text-slate-800">+12%</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Clases Activas</p>
              <p className="text-2xl font-bold text-slate-800">24</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Sección de herramientas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Reporte de Asistencia">
          <p className="text-sm text-slate-600 mb-4">
            Genera reportes detallados de asistencia por clase, profesor o período de tiempo.
          </p>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Generar Reporte
          </button>
        </Card>

        <Card title="Reporte de Ventas">
          <p className="text-sm text-slate-600 mb-4">
            Analiza las ventas de productos y servicios en diferentes períodos.
          </p>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Generar Reporte
          </button>
        </Card>

        <Card title="Análisis de Crecimiento">
          <p className="text-sm text-slate-600 mb-4">
            Visualiza tendencias de crecimiento de clientes y membresías a lo largo del tiempo.
          </p>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Ver Análisis
          </button>
        </Card>

        <Card title="Reporte de Ingresos">
          <p className="text-sm text-slate-600 mb-4">
            Obtén un resumen completo de los ingresos por membresías, clases y productos.
          </p>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Generar Reporte
          </button>
        </Card>
      </div>
    </div>
  )
}
