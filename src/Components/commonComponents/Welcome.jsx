import welcome from '../../../src/assets/images/welcome.jpg'

const Welcome = () => {
    return (
        <div className='p-6 md:p-16'>
            <div className="">
                <img src={welcome} alt="" className="w-full h-full object-cover " />
            </div>
        </div>
    );
};

export default Welcome;