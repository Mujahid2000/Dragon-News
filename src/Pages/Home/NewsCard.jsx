import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({newscard}) => {
    const {title, image_url, details,_id} = newscard;
    return (
        <div className="card bg-base-100 shadow-xl">
<div className="card-body">
    <h2 className="card-title">{title}</h2>
    <img className='w-full ' src={image_url} alt="" />
    
        {
            details.length > 200? 
            <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='text-blue-500 underline leading-3'>Read more..</Link></p>
            :<p>{details}</p>
        }
    
    <div className="card-actions justify-end">

    </div>
</div>
</div>
    );
};

export default NewsCard;