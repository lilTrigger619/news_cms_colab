import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SCard from '../SCard/SCard';
import './Content.css';
/*
import image1 from '/images/image1.jpeg';
import image2 from '/images/image2.jpeg';
import Image from "next/image";
*/

const image1 = "/images/image1.jpeg";
const image2 = "/images/image2.jpeg";

function Content() {
  const cardData = [
    {
      imgSrc: image1,
      title: 'Police Arrested More Than 11000 People At Protests Across The US',
      author: 'Author 1',
      text: 'Markdown is a lightweight markup language with plain-text formatting syntax. Its design allows it to...',
      date: '2023-01-01',
      readTime: 5,
    },
    {
      imgSrc: image2,
      title: 'Police Arrested More Than 11000 People At Protests Across The US',
      author: 'Author 2',
      text: 'Markdown is a lightweight markup language with plain-text formatting syntax. Its design allows it to...',
      date: '2023-01-02',
      readTime: 10,
    },
  ];
  return (
    <div className="content-container">
    <div className='content-left-panel'></div>
    <div className='content-middle-panel'>
    <div className='content-text' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className='content-news'>
          <p>News</p>
      </div>
  <Button variant="outline-info" size="sm">View More</Button>{' '}
</div>
<div  style={{ gap: '20px' }}>
          {cardData.map((data, index) => (
            <div key={index} style={{ marginBottom:'20px' }}>
              <SCard {...data} />
            </div>
          ))}
        </div>
       <div className='content-subscribe-container' style={{marginTop:'100px'}}>
        <Card style={{borderRadius:'20px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Subscribe to our newsletter!</h2>
          <p>We'll send you the best of our blog just once a month.We promise.</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" style={{ width: '400px' }} />
      </Form.Group>
      <Button variant="outline-success">Subscribe</Button>{' '}
          </Card.Body>
        </Card>
       </div>
    </div>
    <div className='content-right-panel'></div>
   </div>
  );
}

export default Content;
