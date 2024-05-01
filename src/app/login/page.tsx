import { AuthButtonServer } from "../components/auth-button-server";

export default function page() {
  return (
    <section className="grid place-content-center min-h-screen text-center">
      <h1 className="text-xl font-bold mb-3">Iniciar sesión en Twitter Clone</h1>
      <AuthButtonServer />
    </section>
  )
}
