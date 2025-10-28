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

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // 1️⃣ Send login request to backend
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    // 2️⃣ Convert backend response to JSON
    const data = await res.json();

    // 3️⃣ Check if login is successful
    if (res.ok) {
      alert(`Login successful! Welcome back, ${data.user?.name || "PawsAdopt user"} 🐾`);
      console.log("Login success:", data);

      localStorage.setItem("token", data.token);

      if (typeof setCurrentPage === "function") setCurrentPage("dashboard");
    } else {
      alert(data.message || "Invalid email or password!");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong. Please try again later.");
  }
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
