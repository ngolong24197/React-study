import React, { useState } from 'react';

type Country = {
  name: string;
  code: string;
};

const countries: Country[] = [
  { name: 'India', code: '+91' },
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Vietnam', code: '+84' },
];

interface PhoneInputProps {
  onChange: (fullPhoneNumber: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange }) => {
  const [countryCode, setCountryCode] = useState<string>(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value;
    setCountryCode(newCode);
    onChange(`${newCode}${phoneNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setPhoneNumber(value);
    onChange(`${countryCode}${value}`);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-100 h-10 w-fit">
      <select
        value={countryCode}
        onChange={handleCountryChange}
        className="bg-transparent px-3 text-sm outline-none h-full cursor-pointer"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code}
          </option>
        ))}
      </select>
      <input
        type="tel"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="bg-transparent px-3 text-sm outline-none h-full w-40"
      />
    </div>
  );
};

export default PhoneInput;
