import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className="mx-auto mt-12" src="https://i.ibb.co/brcYRkj/logo.png" alt="" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <p className='mt-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;