import { useState } from 'react';
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await AuthService.login(formData)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userEmail', formData.email)
      alert('Login successful!');
      navigate('/editor');
    } catch (error) {
      alert('Error logging in');
      console.log(error);
    }
  };

  return (
    <div className='p-8'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
