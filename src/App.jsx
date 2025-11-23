
import React from 'react'

export default function App() {
  return (
    <div style={padding: 20, fontFamily: 'Arial'}>
      <h1>Om Multispeciality Hospital</h1>
      <p>Best healthcare with multi-speciality services.</p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdG0OoxKPRskzRQ-aMtPJncHF7K6nNhjsZYjGtPPtrpBLMrcQ/viewform?usp=header" 
        target="_blank"
        style={padding: "10px 20px", background: "blue", color:"white", borderRadius: 8}
      >
        Book Appointment
      </a>
    </div>
  )
}
