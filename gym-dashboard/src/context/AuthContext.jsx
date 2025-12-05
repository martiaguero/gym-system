"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Verificar si hay un usuario en localStorage al cargar
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Función de login (aquí conectarás con tu backend Java 21)
  const login = async (email, password) => {
    try {
      // TODO: Conectar con tu API de Java 21
      // const response = await fetch('http://localhost:8080/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // })
      // const data = await response.json()

      // Por ahora simulamos el login
      const mockUser = {
        id: 1,
        nombre: "John Smith",
        email: email,
        rol: "Administrador",
        avatar: "https://i.pravatar.cc/80?u=admin",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return { success: true }
    } catch (error) {
      console.error("Error en login:", error)
      return { success: false, error: "Credenciales inválidas" }
    }
  }

  // Función de logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider")
  }
  return context
}
