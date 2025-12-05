import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import LoginPage from "./pages/LoginPage"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import ClientesPage from "./pages/ClientesPage"
import ProfesoresPage from "./pages/ProfesoresPage"
import MembresiasPage from "./pages/MembresiasPage"
import ClasesPage from "./pages/ClasesPage"
import ProductosPage from "./pages/ProductosPage"
import PagosPage from "./pages/PagosPage"
import ReportesPage from "./pages/ReportesPage"

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública de login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas protegidas */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex bg-slate-50 min-h-screen">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/clientes" element={<ClientesPage />} />
                        <Route path="/profesores" element={<ProfesoresPage />} />
                        <Route path="/membresias" element={<MembresiasPage />} />
                        <Route path="/clases" element={<ClasesPage />} />
                        <Route path="/productos" element={<ProductosPage />} />
                        <Route path="/pagos" element={<PagosPage />} />
                        <Route path="/reportes" element={<ReportesPage />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
