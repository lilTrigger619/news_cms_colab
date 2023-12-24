import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


function NewsCard({imgSrc,title,text,author, date, readTime}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: '762px',
    borderRadius:'20px',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s ease',
  };
  return (
    <Card style={cardStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px',padding:'10px', }}>
          <Image src={imgSrc} style={{ width: '200px', height: '210px', objectFit: 'cover',borderRadius:'20px' }} />
        </div>
        <div style={{marginTop:'50px',padding:'5px' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <div>
            <Card.Text>{author} • {date} • {readTime} min read </Card.Text>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default NewsCard;
