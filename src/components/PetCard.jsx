import { Card } from './Card.jsx';

export default function PetCard({ pet }) {
  const getPurposeLabel = (purpose) => {
    const labels = {
      'pet-shop-owner': '🏪 Pet Shop',
      'vacation-caretaker': '✈️ Vacation Care',
      'pet-owner': '🏡 Rehoming',
      'pet-walker': '🚶 Pet Walker',
    };
    return labels[purpose] || purpose;
  };

  const getPurposeColor = (purpose) => {
    const colors = {
      'pet-shop-owner': '#3b82f6', 
      'vacation-caretaker': '#a855f7', 
      'pet-owner': '#ec4899', 
      'pet-walker': '#22c55e', 
    };
    return colors[purpose] || '#6366f1';
  };

  return (
    <Card className="pet-card">
      <div className="pet-card-image-container">
        <img src={pet.photo} alt={pet.name} className="pet-card-image" />
        <div
          className="pet-card-badge"
          style={{ backgroundColor: getPurposeColor(pet.purpose) }}
        >
          {getPurposeLabel(pet.purpose)}
        </div>
      </div>
      <div className="pet-card-content">
        <h1 className="pet-card-name">{pet.name}</h1>
        <p className="pet-card-owner">
          <span className="pet-card-owner-label">Owner name:</span> {pet.ownerName}
        </p>
        <button className="pet-card-button">View Details</button>
      </div>
    </Card>
  );
}