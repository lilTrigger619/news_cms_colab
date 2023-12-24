import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './NMCard.css';

function NMCard({ imgSrc, title, author, date, readTime }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: '330px',
    height: '400px',
    border: 'none',
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s ease',
  };

  const cardTextStyle = {
    position: 'absolute',
    bottom: '0',
    marginBottom: '30px',
    color: 'white',
  };

  return (
    <Card
      className="NMCard"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Body>
        <Card.Text style={cardTextStyle}>
          <h3>{title}</h3>
          <span>
            {author} • {date} • {readTime} min read
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NMCard;
