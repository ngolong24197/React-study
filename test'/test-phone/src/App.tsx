import { useState } from 'react'

import './App.css'
import PhoneInput from './Components/CountrySelector'

function App() {
  const handlePhoneChange = (fullNumber: string) => {
    console.log('Full number:', fullNumber);
  };

  return (
    <>
      <h2>Enter your phone number</h2>
      <PhoneInput onChange={handlePhoneChange} />
    </>
  )
}

export default App
