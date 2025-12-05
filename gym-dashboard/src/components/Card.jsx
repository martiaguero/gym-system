export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
      {title && <h3 className="font-semibold text-slate-800 mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
