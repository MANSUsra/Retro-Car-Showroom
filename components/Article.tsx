import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ArticleDetails from './ArticleDetails';
import React, { useState } from 'react';
interface ArticleProps {
  imgUrl: StaticImageData;
  date: string;
  title: string;
}

const Article: React.FC<ArticleProps> = ({ imgUrl, date, title }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleReadMoreClick = () => {
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className='blog-container_article'>
      <div className="blog-container_article-image ">
        <Image src={imgUrl} alt='blog' style={{ width: 400, height: 250, borderRadius: 5 }}/>
      </div>
      <div className="blog-container_article-content " style={{ width: 400}}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p onClick={handleReadMoreClick} className="read-more-link" style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Read Full Article
        </p>
        {isDetailsOpen && <ArticleDetails isOpen={isDetailsOpen}  onClose={handleCloseDetails} />}
      </div>
    </div>
  );
}

export default Article;
