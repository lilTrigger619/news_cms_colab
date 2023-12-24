import NMCard from '../NMCard/NMCard.js';
import Carousel from '../carousel/Carousel.js';
//import image1 from '../../images/image1.jpeg';
//import image2 from '../../images/image2.jpeg';
//import image3 from '../../images/image3.jpeg';
import './Main.css';
import useGetWeeklyPosts from '../../customHooks/getWeeklyPosts.js';

function TextExample() {
	const {data:weeklyPosts, error, loading} = useGetWeeklyPosts();
	/*
  const cardData = [
    {
      imgSrc: image1,
      title: 'Police Arrested More Than 11000 People At Protests Across The US',
      author: 'Author 1',
      date: '2023-01-01',
      readTime: 5,
    },
    {
      imgSrc: image2,
      title: 'Police Arrested More Than 11000 People At Protests Across The US',
      author: 'Author 2',
      date: '2023-01-02',
      readTime: 10,
    },
    {
      imgSrc: image3,
      title: 'Police Arrested More Than 11000 People At Protests Across The US',
      author: 'Author 3',
      date: '2023-01-03',
      readTime: 8,
    },
  ];
	*/

  return (
    <div className="main-container">
      <div className='main-left-panel'></div>
      <div className='main-middle-panel'>
        {/* <div className='main-ad'>
          <Carousel />
        </div> */}
        <div className='main-text'>
          <p>Editor's Pick This Week</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {weeklyPosts.map((data, index) => (
            <div key={index} style={{ flex: '1', margin: '0 10px' }}>
              <NMCard {...data} />
            </div>
          ))}
        </div>
      </div>
      <div className='main-right-panel'></div>
    </div>
  );
}

export default TextExample;
