import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Replace this URL with your live Vercel backend URL!
    const backendUrl = 'https://vercel-backend-delta-ten.vercel.app/api/hello'; 
    
    fetch(backendUrl)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error("Error fetching data: ", error);
        setMessage("Failed to connect to backend.");
      });
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#121212', 
      color: '#ffffff', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;