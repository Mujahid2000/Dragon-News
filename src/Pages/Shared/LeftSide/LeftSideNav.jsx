import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("categories.json")
          .then(res => res.json())
          .then(data => {
                setCategory(data);
            });
    }, []);

    return (
        <div className="space-y-10">
            <h2 className='text-2xl'>All Categories</h2>
            {
            category.map(category => <Link 
                className="block ml-4 text-xl font-medium px-4"
                key={category.id}
                to={`/category/${category.id}`}
                >{category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;