import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {

      if (email.length > 0 && password.length > 0) {
        history.push('/admin');
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-form"> 
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
