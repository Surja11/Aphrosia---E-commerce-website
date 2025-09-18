import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(loginData); // 🔥 call the context login function

    if (result.success) {
      setLoginData({ username: '', password: '' });
      navigate("/"); // redirect after successful login
    } else {
      alert("Error: " + JSON.stringify(result.error));
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-100 to-pink-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-6 text-sky-600">Login</h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2 font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
            />

            <label className="mb-2 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="bg-gray-200 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-sky-900"
            />

            <button
              type="submit"
              className="bg-cyan-600 text-white font-semibold py-2 rounded hover:bg-sky-900 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
