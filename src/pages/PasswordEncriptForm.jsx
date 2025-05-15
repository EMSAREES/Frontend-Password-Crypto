import useEncryptFormLogic from '../hooks/useEncryptFormLogic';

export default function PasswordEncriptForm() {

  const {
    form,
    handleChange,
    handleEncrypt,
    handleDecrypt,
    buttonCopy,
    buttonClear,
  } = useEncryptFormLogic();
  
  return(
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-4xl mx-4">
        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Encriptador y Descriptador
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Panel de entrada */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-inner">
            {/* Texto de entrada */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Texto de entrada
              </h2>
              <textarea
                name="texto"  // Asegúrate de que el atributo name esté presente
                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Escribe el texto que deseas procesar..."
                value={form.texto}
                onChange={handleChange}
              />

            </div>

            {/* Clave */}
            <div className="mb-6">
              <label htmlFor="clave" className="block text-gray-700 font-medium mb-2">
                Clave de encriptación
              </label>
              <input
                type="password"
                id="clave"
                name="clave"  // Asegúrate de que el atributo name esté presente
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Introduce tu clave secreta"
                value={form.clave}
                onChange={handleChange}
              />
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex-1"
              onClick={handleEncrypt}
              >
                Encriptar
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex-1"
              onClick={handleDecrypt}
              >
                Desencriptar
              </button>
            </div>
          </div>

          {/* Panel de resultado */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-inner">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-700"
              >
                Resultado
              </h2>
              <button className="flex items-center active:bg-violet-700 bg-green-600 text-white  px-3 py-1 rounded transition-colors duration-300"
                onClick={buttonCopy}
              >
                Copiar
              </button>
            </div>

            <div className="h-64 bg-white border border-gray-300 rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words mb-4">
              {form.resultado}
            </div>
            <button className="flex items-center active:bg-violet-700 bg-green-600 text-white  px-3 py-1 rounded transition-colors duration-300"
                onClick={buttonClear}
              >
                Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}