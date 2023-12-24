import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from '/images/image1.jpeg';
import Image from "next/image";

const carouselStyle = {
  width: '500px',
  height: '250px',
  margin: 'auto', // Center the carousel horizontally
};

const ExampleCarouselImage = '/images/image1.jpeg';

function IndividualIntervalsExample() {
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item interval={1000}>
        <Image className="d-block w-100" src={ExampleCarouselImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image className="d-block w-100" src={ExampleCarouselImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={ExampleCarouselImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;


