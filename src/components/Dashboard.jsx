import { useState } from 'react';
import NavbarLoggedIn from './NavbarLoggedIn.jsx';
import PetCard from './PetCard.jsx';

export default function Dashboard({ user, onLogout, setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pets = [
    {
      id: 1,
      name: 'Max',
      photo: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop',
      ownerName: 'Sarah Johnson',
      purpose: 'pet-shop-owner',
    },
    {
      id: 2,
      name: 'Luna',
      photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop',
      ownerName: 'Michael Chen',
      purpose: 'pet-owner',
    },
    {
      id: 3,
      name: 'Charlie',
      photo: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
      ownerName: 'Emma Davis',
      purpose: 'vacation-caretaker',
    },
    {
      id: 4,
      name: 'Bella',
      photo: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop',
      ownerName: 'James Wilson',
      purpose: 'pet-walker',
    },
    {
      id: 5,
      name: 'Rocky',
      photo: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=400&fit=crop',
      ownerName: 'Olivia Brown',
      purpose: 'pet-shop-owner',
    },
    {
      id: 6,
      name: 'Daisy',
      photo: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
      ownerName: 'William Taylor',
      purpose: 'pet-owner',
    },
  ];

  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.ownerName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || pet.purpose === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dashboard-page">
      <NavbarLoggedIn
        user={user}
        onLogout={onLogout}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="dashboard-content">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Discover Pets</h1>
            <p>Find your perfect companion from our community</p>
          </div>
          <div className="pet-grid">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          {filteredPets.length === 0 && (
            <div className="no-results">
              <p>No pets found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}