import { useState } from 'react';
import Button from './Button.jsx';
import Input from './Input.jsx';
import Label from './Label.jsx';
import { Card, CardContent, CardDescription, CardHeader } from './Card.jsx';

export default function Login({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    alert('Login successful! Welcome back to PawsAdopt.');
    if (typeof setCurrentPage === 'function') setCurrentPage('dashboard');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-page">
      <Card className="auth-card">
        <CardHeader>
          <div className="auth-header">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage('home')}
            >
              ← Back
            </Button>
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <CardDescription>Login to your PawsAdopt account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <Label htmlFor="emailOrUsername">Email / Username</Label>
              <Input
                id="emailOrUsername"
                name="emailOrUsername"
                type="text"
                placeholder="Enter your email or username"
                value={formData.emailOrUsername}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="auth-footer">
              <p className="auth-footer-text">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setCurrentPage('signup')}
                  className="auth-link"
                >
                  Signup
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
