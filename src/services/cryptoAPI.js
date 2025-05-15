
export default function useCryptoAPI() {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const encryptText = async (data) => {
    try {
      const payload = {
        text: data.texto,        // Asegúrate que el objeto 'data' que pasas tenga una propiedad 'texto'
        master_password: data.clave // Esto parece ser un valor fijo según tu código
      };
      
      const response = await fetch(`${API_URL}/api/encrypt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al cifrar el texto");
      }

      return await response.json();
    } catch (error) {
      console.error("Error en la API:", error);
      throw error;
    }
  };

  const decryptText = async (data) => {
    try {

      const payload = {
        text: data.texto,        // Asegúrate que el objeto 'data' que pasas tenga una propiedad 'texto'
        master_password: data.clave // Esto parece ser un valor fijo según tu código
      };
      
      const response = await fetch(`${API_URL}/api/decrypt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al decifrar el texto");
      }

      return await response.json();
    } catch (error) {
      console.error("Error en la API:", error);
      throw error;
    }
  };

  return { 
    encryptText, 
    decryptText 
  };


}

