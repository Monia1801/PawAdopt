import { useState } from 'react';
import Button from './Button.jsx';
import Input from './Input.jsx';
import Label from './Label.jsx';
import Select from './Select.jsx';
import { Card, CardContent, CardDescription, CardHeader } from './Card.jsx';

export default function Signup({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    // 3️⃣ Convert response to JSON
    const data = await res.json();

    // 4️⃣ Handle success or error
    if (res.ok) {
      alert(`Account created successfully! Welcome to PawsAdopt, ${formData.name}!`);
      console.log("Signup success:", data);

    } else {
      alert(data.message || "Signup failed! Please try again.");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong. Please try again later.");
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserTypeChange = (value) => {
    setFormData({
      ...formData,
      userType: value,
    });
  };

  const userTypeOptions = [
    { value: 'pet-owner', label: 'Pet Owner' },
    { value: 'pet-shop-owner', label: 'Pet Shop Owner' },
    { value: 'normal-person', label: 'Normal Person' },
  ];

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
          <h2 className="auth-title">Create Account</h2>
          <CardDescription>Join the PawsAdopt community</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="email">Email ID</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="userType">I am a</Label>
              <Select
                value={formData.userType}
                onChange={handleUserTypeChange}
                options={userTypeOptions}
                placeholder="Select user type"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
            <div className="auth-footer">
              <p className="auth-footer-text">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setCurrentPage('login')}
                  className="auth-link"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
