import React, { useState } from 'react';
import getPasswordStrength from './PasswordStrengthChecker';
import './login.css'

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [requiredstep, setRequiredstep] = useState<number>();


  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const steps = getPasswordStrength(value);
    setRequiredstep(steps)
  };

  return (
    <div>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login">
          <div className="login-fields">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={"IppoPay"}
              readOnly
            />
          </div>
          <div className="login-fields">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <p className={requiredstep === 0 ? 'success' : 'error'}>
              {requiredstep && requiredstep !== 0 ? `${requiredstep} Steps required to make password strong. Because you missed the below conditions.` : requiredstep === 0 && 'Password is strong'}
            </p>
            {requiredstep === 0 &&
              <p className='success'></p>
            }
          </div>
          <button type="submit">Login</button>
        </div>
      </div>
      <div className='note'>
        <h4>Note:</h4>
        <p>It has at least 6 characters and at most 20 characters.</p>
        <p>It contains at least one lowercase letter, at least one
          uppercase letter, and at least one digit.</p>
        <p>It does not contain three repeating characters in a row
          (i.e., &quot;Baaabb0&quot; is weak, but &quot;Baaba0&quot; is strong).</p>
      </div>
    </div>
  );
};

export default App;
