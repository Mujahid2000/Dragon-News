import RightSideNav from './Shared/Rightside-Nav/RightSideNav';
import Header from './Shared/Header/Header';
import { useParams } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import { useState } from 'react';

const News = () => {
    const {id} = useParams;
    const [] = useState();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-4 mt-5'>
            <div className='col-span-3'>
                <h2>Dragon News</h2>
                <img src="" alt="" />
                <h2></h2>
                <p>{id}</p>
            </div>
            <div>
            <RightSideNav className='col-span-1'></RightSideNav>
            </div>
        </div>
        </div>
        
    );
};

export default News;