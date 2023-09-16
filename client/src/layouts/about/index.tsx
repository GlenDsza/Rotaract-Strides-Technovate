import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import Header from 'components/navbar/user_index';
const AboutUs= () => {

    return <div>
    <Header />

    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <Carousel showArrows={true} showThumbs={false} className="mb-8">
        <div>
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzc1MTc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image 1" />
          <p className="legend">Image 1 Description</p>
        </div>
        <div>
          <img src="/path/to/image2.jpg" alt="Image 2" />
          <p className="legend">Image 2 Description</p>
        </div>
        {/* Add more images and descriptions */}
      </Carousel>
      <div className="text-gray-700">
        <p className="text-lg leading-7 mb-4">
          Rotary is a global network of 1.4 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
        </p>
        <p className="text-lg leading-7 mb-4">
          Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects. From literacy and peace to water and health, we are always working to better our world, and we stay committed to the end.
        </p>
        <p className="text-lg leading-7 mb-4">
          <a href="#learn-more" className="text-blue-500">Learn more</a> about our structure and our foundation and our strategic vision.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">What we do</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>Promote peace</li>
          <li>Fight disease</li>
          <li>Provide clean water, sanitation, and hygiene</li>
          <li>Save mothers and children</li>
          <li>Support education</li>
          <li>Grow local economies</li>
          <li>Protect the environment</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Our mission</h2>
        <p className="text-lg leading-7 mb-4">
          We provide service to others, promote integrity, and advance world understanding, goodwill, and peace through our fellowship of business, professional, and community leaders.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Vision statement</h2>
        <p className="text-lg leading-7">
          Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.
        </p>
      </div>
    </div>



    </div>;
  };
  
  export default AboutUs;
  