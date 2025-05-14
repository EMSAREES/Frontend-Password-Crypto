import usePasswordGenerator from '../hooks/passwordModal';

export default function PasswordModal({ isOpen, onClose, onGenerate }) {
  const {
    length,
    setLength,
    useUpper,
    setUseUpper,
    useNumbers,
    setUseNumbers,
    useSymbols,
    setUseSymbols,
    generatePassword,
  } = usePasswordGenerator();

  if (!isOpen) return null;

  const handleGenerate = () => {
    const password = generatePassword();
    onGenerate(password);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Generar Contraseña</h3>

        <div className="space-y-3">
          <label className="flex justify-between items-center">
            Longitud:
            <input
              type="number"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="border p-1 w-16 rounded text-center"
            />
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useUpper}
              onChange={() => setUseUpper(!useUpper)}
            />
            Incluir mayúsculas
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
            Incluir números
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
            />
            Incluir símbolos
          </label>

          <div className="flex justify-end gap-2 pt-4">
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleGenerate}
            >
              Usar Contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
