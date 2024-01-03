"use client"
import React from 'react';
import Article from './Article';
import Ferrari_V12 from "@public/Ferrari_V12.jpg";
import Blog2 from "@public/blog2.jpg";
import Blog3 from "@public/blog3.jpg";
import Blog4 from "@public/blog4.jpg";
import Blog5 from "@public/blog5.jpg";
import Blog6 from "@public/blog6.jpg";
import {CSSProperties} from 'react';

interface BlogProps {
}

const titleStyles: CSSProperties = {
  fontSize: '2.5rem',  
  fontWeight: 'bold',  
  textAlign: 'center',  
  marginBottom: '20px', 
};

const subtitleStyles: CSSProperties = {
  fontSize: '1.5rem', 
  fontWeight: '600', 
  textAlign: 'center', 
  marginBottom: '60px',
};


const Blog: React.FC<BlogProps> = () => {
  return (
    <div id="blog" className='blog section__padding mx-auto mt-12' style={{ margin: '140px', marginBottom: '0', padding: '20px' }}>
      <div className='blog-heading'>
        <h1 style={titleStyles}>Blog</h1>
        <h3 style={subtitleStyles} className='text-center mx-auto'>A lot is happening, We are blogging about it.</h3>
        <div className='flex flex-wrap gap-12 p-6 justify-center flex-row' style={{ margin: '20px', padding: '10px' }}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Article imgUrl={Ferrari_V12} date="Dec 02, 2023" title="The Heart of Power and Precision: Unveiling the Ferrari V12 Engine" />
            <Article imgUrl={Blog2} date="Nov 20, 2023" title="Cruisin' Together: Unveiling the Vibrant Culture of Classic Car Enthusiast Communities" />
            <Article imgUrl={Blog3} date="Nov 26, 2023" title="Legends of Elegance: Exploring the World of Opulent Classic Cars" />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Article imgUrl={Blog4} date="Oct 18, 2023" title="Majestic Mercedes: A Journey Through the Timeless Elegance of Classic Cars" />
            <Article imgUrl={Blog5} date="Dec 28, 2023" title="Riding Through History: A Spectacular Journey at the Classic Car Exposition" />
            <Article imgUrl={Blog6} date="Dec 31, 2023" title="Porsche Perfection: Unveiling the Legacy of Precision, Power, and Performance" />
          </div>
    </div>
      </div>
    </div>
  );
}

export default Blog;
