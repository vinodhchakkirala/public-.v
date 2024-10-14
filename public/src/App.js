import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PatientForm from './Components/PatientForm/Patient';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        
       <PatientForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;

