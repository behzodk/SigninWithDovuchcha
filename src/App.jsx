

function App() {

  const handleLoginRedirect = () => {
    const dovuchchaLoginUrl = 'https://accounts.dovuchcha.uz/login';
    const redirectUrl = `${window.location.origin}/api/token_receive`; // Adjust the callback URL as needed

    const fullLoginUrl = `${dovuchchaLoginUrl}?redirection=${encodeURIComponent(redirectUrl)}`;

    window.location.href = fullLoginUrl;
  };
  return (
    <>
      <button onClick={handleLoginRedirect} className="login-with-dovuchcha-button">
            Login with Dovuchcha
      </button>
    </>
  )
}

export default App
