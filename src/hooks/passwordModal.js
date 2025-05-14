import { useState } from 'react';

export default function usePasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const generatePassword = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{};:,.<>?';

    let characters = lower;
    if (useUpper) characters += upper;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
  };

  return {
    length,
    setLength,
    useUpper,
    setUseUpper,
    useNumbers,
    setUseNumbers,
    useSymbols,
    setUseSymbols,
    generatePassword,
  };
}
