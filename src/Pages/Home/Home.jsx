import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSide/LeftSideNav';
import RightSideNav from '../Shared/Rightside-Nav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {

    const newsLoaderdata = useLoaderData()
    // console.log(newsLoaderdate);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid text-center grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 space-y-3  p-3'>
                    {
                       newsLoaderdata.map(news => <NewsCard key={news._id} newscard={news} ></NewsCard>)
                    }
                </div>
                <div className=' p-3'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;