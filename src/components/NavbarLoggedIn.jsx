import { useState } from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';

export default function NavbarLoggedIn({ user, onLogout, searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const getInitial = () => {
    if (user?.username) {
      return user.username.charAt(0).toUpperCase();
    }
    return 'U';
  };

  const filterOptions = [
    { value: 'all', label: 'All Pets', icon: '🐾' },
    { value: 'pet-shop-owner', label: 'Pet Shop Owner', icon: '🏪' },
    { value: 'vacation-caretaker', label: 'On-Vacation Caretaker', icon: '✈️' },
    { value: 'pet-owner', label: 'Independent Pet Owner', icon: '🏡' },
    { value: 'pet-walker', label: 'Pet Walker', icon: '🚶' },
  ];

  const getSelectedFilterLabel = () => {
    const filter = filterOptions.find(f => f.value === selectedFilter);
    return filter ? filter.label : 'All Pets';
  };

  const getSelectedFilterIcon = () => {
    const filter = filterOptions.find(f => f.value === selectedFilter);
    return filter ? filter.icon : '🐾';
  };

  return (
    <nav className="navbar-logged-in">
      <div className="navbar-logged-in-container">
        <div className="navbar-logged-in-content">
          <div className="navbar-logged-in-logo">
            <h1 className="navbar-logo">PawsAdopt</h1>
          </div>

          <div className="navbar-search-wrapper">
            <div className="navbar-search">
              <Input
                type="text"
                placeholder="Search pets or owners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="navbar-filter">
              <button
                className="filter-button"
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                <span className="filter-icon">{getSelectedFilterIcon()}</span>
                <span className="filter-label">Filter</span>
                <span className="filter-arrow">{showFilterMenu ? '▲' : '▼'}</span>
              </button>
              
              {showFilterMenu && (
                <div className="filter-menu">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`filter-menu-item ${selectedFilter === option.value ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedFilter(option.value);
                        setShowFilterMenu(false);
                      }}
                    >
                      <span className="filter-menu-icon">{option.icon}</span>
                      <span className="filter-menu-label">{option.label}</span>
                      {selectedFilter === option.value && (
                        <span className="filter-menu-check">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="navbar-profile">
            <button
              className="profile-button"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="profile-avatar">{getInitial()}</div>
            </button>
            {showProfileMenu && (
              <div className="profile-menu">
                <div className="profile-menu-header">
                  <p className="profile-menu-name">{user?.name || user?.username}</p>
                  <p className="profile-menu-email">{user?.email}</p>
                </div>
                <div className="profile-menu-divider"></div>
                <button className="profile-menu-item">Profile Settings</button>
                <button className="profile-menu-item">My Pets</button>
                <button className="profile-menu-item">Favorites</button>
                <div className="profile-menu-divider"></div>
                <button className="profile-menu-item logout" onClick={onLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}