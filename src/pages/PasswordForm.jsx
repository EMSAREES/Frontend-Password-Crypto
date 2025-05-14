import { useState } from 'react';
import usePasswordForm from '../hooks/usePasswordForm';
import PasswordModal from '../components/PasswordModal';

export default function PasswordForm() {
  const {
    form,
    handleChange,
    handleAdd,
    passwords,
    setPasswords,
    descargarPDF
  } = usePasswordForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para verificar si la tabla tiene filas
  const isTableEmpty = passwords.length === 0;

  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Añadir Nueva Contraseña</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          name="title"
          type="text"
          placeholder="Título / Sitio Web *"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="username"
          type="text"
          placeholder="Nombre de usuario / Email"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="password"
          type="text"
          placeholder="Contraseña *"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleAdd}
          >
            Añadir
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Usar Generada
          </button>
        </div>
        <textarea
          name="notes"
          placeholder="Notas adicionales"
          value={form.notes}
          onChange={handleChange}
          className="col-span-2 border p-2 rounded"
        />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mt-6">Mis Contraseñas</h2>
        <button
          className={`bg-green-600 text-white px-4 py-2 rounded ${isTableEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={descargarPDF}
          disabled={isTableEmpty}
        >
          Descargar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border mt-2">
          <thead>
            <tr className="text-left border-b bg-gray-100">
              <th className="p-2">Título</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.title}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => {
                      const updated = passwords.filter((_, i) => i !== index);
                      setPasswords(updated);
                      localStorage.setItem('passwords', JSON.stringify(updated));
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {passwords.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No hay contraseñas aún
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={(generatedPassword) =>
          handleChange({ target: { name: 'password', value: generatedPassword } })
        }
      />
    </div>
  );
}
