import { useState } from 'react';
import AuthService from '../services/AuthService'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';
import toast from 'react-hot-toast';

const Login = () => {

  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const credentials = useSelector((state) => state.auth.credentials)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = e => {
    dispatch(setCredentials({...credentials, [e.target.name]: e.target.value }))
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)
      
    const response = await AuthService.login({email : credentials.email, password : credentials.password})

    if(response) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userEmail', credentials.email)
      setTimeout(() => setFailed(false), 1000)
      toast.success("Login successful")
      navigate('/editor');
    } else {

      setFailed(true)
      toast.error("Failed to login")
    }

    setLoading(false)
  };

  return (
    <div className='flex h-[80vh] mt-10 items-center justify-center w-full flex-col'>
      <div>
        <h2 className='text-3xl font-roboto'>Log in to your account</h2>
      </div>
      <div className='w-[80vh] h-[80vh] flex items-center flex-col mb-2'>
        <form onSubmit={handleSubmit} className='w-99 h-70 mt-5 flex justify-center items-center flex-col'>

          {failed ? (
            <div className='bg-red-300 border-1 text-sm text-red-800 border-red-400 h-6 w-full rounded-sm mb-4 px-2'>Invalid username or password.</div>
          ) :
            (<></>)
          }
          <div
            className="w-full flex flex-col bg-[#eff1ed] rounded-lg px-3 py-2 border-2 border-transparent focus-within:border-black"
            onClick={() => document.getElementById("emailInput").focus()}
          >
            <label className="text-xs font-normal text-gray-600">EMAIL OR USERNAME</label>
            <input
              id="emailInput"
              name="email"
              type="email"
              placeholder=""
              onChange={handleChange}
              required
              className="outline-none bg-transparent"
            />
          </div>

          <div
            className="w-full flex flex-col bg-[#eff1ed] rounded-lg px-3 py-2 mt-3 border-2 border-transparent focus-within:border-black"
            onClick={() => document.getElementById("passwordInput").focus()}
          >
            <label className="text-xs font-normal text-gray-600">PASSWORD</label>
            <div className="flex items-center">
              <input
                id="passwordInput"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder=""
                onChange={handleChange}
                required
                className="outline-none bg-transparent flex-1"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent div click event
                  setShowPassword(!showPassword);
                }}
                className="ml-2 text-gray-600 hover:text-black"
              >
                {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
              </button>
            </div>
          </div>
          <button className={`w-full rounded-md h-9 text-white font-medium flex justify-center gap-3 items-center ${(credentials?.email !== "" && credentials?.password !== "") ? "bg-orange-500 hover:bg-orange-300" : "bg-red-300"} mt-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit">
            Log in
            {loading ? (
              <div className="w-3 h-3 border-2 mt-1 border-t-transparent rounded-full animate-spin"></div>
            ) :
              (<></>)
            }
          </button>
          <div className='w-40 h-10 flex justify-center items-center my-2'>
            <Link
              to="/reset"
            >
              <p className='text-red-700 text-sm hover:text-red-400'>Forgot Password?</p>
            </Link>
          </div>
        </form>
        <div className='w-99 border border-transparent border-b-gray-300 pb-3'>
          <div className='flex gap-2 justify-center items-center w-full font-sans bg-[#edede9] py-1.5 rounded-md'>
            <div className='w-5 h-5'>
              <svg viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
            </div>
            Continue with Google
          </div>
          <div className='flex gap-2 mt-2 justify-center items-center w-full font-sans bg-[#edede9] py-1.5 rounded-md'>
            <div className='w-5 h-5'>
              <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
            </div>
            Continue with GitHub
          </div>
          <div className='flex gap-2 mt-2 justify-center items-center w-full font-sans bg-[#edede9] py-1.5 rounded-md'>
            <div className='w-5 h-5'>
              <div className='w-5 h-5'>
                <img
                  src="x-logo.png"
                  className='w-full h-full object-contain'
                  alt="x-logo"
                />
              </div>
            </div>
            Continue with X
          </div>
        </div>
        <div className='flex gap-1 text-xs mt-2'>
          New to Apium?
          <Link
            to="/register"
          >
            <p className='text-red-600 text-xs'>Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
