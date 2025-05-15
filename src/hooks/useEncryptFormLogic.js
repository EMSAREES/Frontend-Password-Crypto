import { useState } from 'react';
import  useCryptoAPI from '../services/cryptoAPI';


export default function useEncryptFormLogic() {
    
    const [loading, setLoading] = useState(false);

    const { encryptText, decryptText } = useCryptoAPI();

    const [form, setForm] = useState({
    texto: '',
    clave: '',
    resultado: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value, }));
    };


    const handleEncrypt = async () => {
        if (!form.texto.trim() || !form.clave.trim()) {
            alert("Por favor completa los campos de texto y clave.");
            return;
        }

        
        setLoading(true); // ← activa carga

        try {
        const response = await encryptText({
            texto: form.texto,
            clave: form.clave,
        });
        setForm((prevForm) => ({
            ...prevForm,
            resultado: response.encrypted, // Ajusta si tu API devuelve un campo diferente
        }));
        } catch (error) {
        setForm((prevForm) => ({
            ...prevForm,
            resultado: 'Error al encriptar el texto.',
        }));
        }

        setLoading(false); // ← desactiva carga

    };

    const handleDecrypt = async () => {
        if (!form.texto.trim() || !form.clave.trim()) {
            alert("Por favor completa los campos de texto y clave.");
            return;
        }

        setLoading(true); // ← activa carga

        try {
        const response = await decryptText({
            texto: form.texto,
            clave: form.clave,
        });

        console.log("Respuesta de la API:", response);

        setForm((prevForm) => ({
            ...prevForm,
            resultado: response.decrypted, // Ajusta si tu API devuelve un campo diferente
        }));
        } catch (error) {
        alert('Clave incorrecta o error al descifrar el texto.');
        setForm((prevForm) => ({
            ...prevForm,
            resultado: 'Error al decicriptar el texto.',
        }));
        }

        setLoading(false); // ← desactiva carga

    };


    const buttonCopy = () => {
        const textArea = form.resultado;
        navigator.clipboard.writeText(textArea).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    };

    const buttonClear = () => {
        setForm((prevForm) => ({
            ...prevForm,
            resultado: '',
        }));
    };



    return {
        form,
        handleChange,
        handleEncrypt,
        handleDecrypt,
        buttonCopy,
        buttonClear,
        loading,
    };
}