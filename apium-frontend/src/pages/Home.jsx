import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    const userEmail = localStorage.getItem('userEmail')

    if(userEmail) {
      navigate("/editor")
    } else {
      navigate("/login")
    }
  }

  return (
    <div className='w-full h-[89vh] text-center flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-7xl font-semibold'>Welcome to AI Code Editor</h1>
        <p className='text-lg font-bold text-gray-800'>Write, save, and collaborate on code easily.</p>
      </div>
      <button className='bg-black/90 active:bg-black text-white font-serif px-3 py-2 rounded-lg text-sm mt-5' onClick = {handleClick} >
        Open Code Editor
      </button>
    </div>
  );
};

export default Home;