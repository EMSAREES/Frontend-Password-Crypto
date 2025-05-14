import { useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function usePasswordForm() {
  const [form, setForm] = useState({
    title: '',
    username: '',
    password: '',
    notes: ''
  });

  const [passwords, setPasswords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value, }));
    // setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.title || !form.password) {
      alert('Por favor completa al menos el título y la contraseña');
      return;
    }

    const updated = [...passwords, form];
    setPasswords(updated);
    // localStorage.setItem('passwords', JSON.stringify(updated));
    setForm({ title: '', username: '', password: '', notes: '' });
  };

  const descargarPDF = () => {
    const doc = new jsPDF();

    // Título bonito
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Mis Contraseñas Guardadas', 14, 22);

    // Tabla elegante con autoTable
    autoTable(doc, {
      startY: 30,
      head: [['Título', 'Usuario / Email', 'Contraseña', 'Notas']],
      body: passwords.map(item => [
        item.title,
        item.username || '-',
        item.password,
        item.notes || '-'
      ]),
      styles: {
        font: 'helvetica',
        fontSize: 11,
        cellPadding: 4
      },
      headStyles: {
        fillColor: [52, 152, 219], // Azul bonito
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
    });

    doc.save('mis_contraseñas.pdf');
  };




  return {
    form,
    handleChange,
    handleAdd,
    passwords,
    setPasswords,
    descargarPDF,
  };
}
