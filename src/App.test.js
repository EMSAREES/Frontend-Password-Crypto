import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el título Gestor de Contraseñas', () => {
  render(<App />);
  const titleElement = screen.getByText(/Gestor de Contraseñas/i);
  expect(titleElement).toBeInTheDocument();
});
