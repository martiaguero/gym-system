import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const dataMeses = [
  { mes: "Ene", clientes: 45 },
  { mes: "Feb", clientes: 52 },
  { mes: "Mar", clientes: 49 },
  { mes: "Abr", clientes: 63 },
  { mes: "May", clientes: 75 },
  { mes: "Jun", clientes: 89 },
  { mes: "Jul", clientes: 98 },
  { mes: "Sep", clientes: 87 },
  { mes: "Oct", clientes: 95 },
]

export default function BarChartClientes() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dataMeses}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="mes" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
          }}
        />
        <Bar dataKey="clientes" fill="#10b981" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function LineChartVentas() {
  const dataVentas = [
    { mes: "Ene", ventas: 45 },
    { mes: "Feb", ventas: 52 },
    { mes: "Mar", ventas: 48 },
    { mes: "Abr", ventas: 61 },
    { mes: "May", ventas: 72 },
    { mes: "Jun", ventas: 88 },
    { mes: "Jul", ventas: 105 },
    { mes: "Sep", ventas: 92 },
    { mes: "Oct", ventas: 98 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={dataVentas}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="mes" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
          }}
        />
        <Line type="monotone" dataKey="ventas" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
