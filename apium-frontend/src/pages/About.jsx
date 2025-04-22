import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      quote: "APIUM blew me away on my first try! As a frontend developer, I found the interface intuitive and the editing process seamless. It's set to become my go-to tool.",
      author: "Ashish Pratap Singh",
      role: "Frontend Developer",
      avatar: "/ashish.png"
    },
    {
      id: 2,
      quote: "I was pleasantly surprised by APIUM’s ease-of-use during its early launch. As a tester, the consistent performance helped me identify issues quickly without any hassles.",
      author: "Himanshu Kushwah",
      role: "Tester",
      avatar: "/himanshu.png"
    },
    {
      id: 3,
      quote: "Trying out APIUM for the first time was a refreshing experience. As a tech enthusiast, I loved the innovative, smooth, and efficient approach to code editing.",
      author: "Deepak deepu",
      role: "Tech Enthusiast",
      avatar: "/deepak.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToEditor = (aboutSelectedlanguage) => {
    navigate('/editor', { state: { aboutSelectedlanguage } });
  };

  const editor = [{
    id: 'java',
    icon: 'java.png',
    title: 'Java Editor',
  },
  {
    id: 'python',
    icon: 'python.png',
    title: 'Python Editor',
  },
  {
    id: 'js',
    icon: 'javascript.png',
    title: 'JavaScript Editor',
  },
  {
    id: 'c',
    icon: 'c.png',
    title: 'C++ Editor',
  }
  ];


  return (<>
    <div className="relative bg-white w-full h-64 flex items-center justify-center overflow-hidden">
      <div className="absolute top-12 left-75 text-purple-500 text-2xl">#</div>
      <div className="absolute top-20 right-100 text-purple-500 text-2xl">+</div>
      <div className="absolute bottom-7 left-65 text-purple-500 text-2xl">⟋</div>
      <div className="absolute bottom-10 right-102 text-purple-500 text-2xl">◁</div>
      <div className="absolute top-1/2 left-75 transform -translate-y-1/2 text-purple-500 text-2xl">&lt;</div>
      <div className="absolute top-1/2 right-88 transform -translate-y-1/2 text-purple-500 text-2xl">&gt;</div>
      <div className="absolute top-1/2 left-99 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-2xl">+</div>
      <div className="absolute top-16 left-95 text-purple-500 text-2xl">★</div>
      <div className="absolute top-16 right-85 text-purple-500 text-2xl">◯</div>
      <div className="absolute bottom-16 left-88 text-purple-500 text-2xl">✕</div>
      <div className="absolute bottom-16 right-78 text-purple-500 text-2xl">✓</div>
      <header className="container mx-auto py-8 px-4 text-center flex flex-col items-center justify-center">
        <div className="flex items-center mb-2">
          <img
            src="codeLogo.png"
            className="mr-3 h-7"
            alt="Logo"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">
          Meet APIUM<span className="text-purple-700">{`<About/>`}</span>
        </h1>
        <p className="text-lg text-gray-600">
          Innovation, creativity, and technology—built for the future.
        </p>
      </header>
    </div>
    <div className="bg-white py-16 px-4 relative">

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-1xl md:text-2xl lg:text-4xl font-bold text-purple-700 mb-10">
          Apium started with one goal: a lightweight, frustration-free coding experience.        </h1>
        <img src="/malecoder.svg" alt="Male Coder" className="mx-auto h-25 w-25" />
        <div className="mt-8">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We simplify coding with AI suggestions, seamless integrations, and an intuitive interface.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-2">
            Apium was built by developers, for developers—lightweight, fast, and truly intuitive.
          </p>
        </div>
        <div className="mt-12">
        </div>
      </div>
    </div>
    <div className="bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-8">
              APIUM: A Rich Feature Editor
            </h1>

            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
                Try Out Editor Right Now<br />
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Check it out! Choose your language and start coding.              </p>
            </div>
            <div className="w-full bg-white">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {editor.map((edi) => (
                    <div
                      key={edi.id}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col"
                    >
                      <div className="mb-6">
                        <img
                          src={edi.icon}
                          alt={edi.title}
                          style={{ width: '60px', height: '60px' }}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-purple-700 mb-4">
                        {edi.title}
                      </h3>
                      <div className="flex-grow"></div>
                      <a
                        onClick={() => goToEditor(edi.id)}
                        className="text-blue-500 font-medium flex items-center mt-4 hover:text-blue-600 cursor-pointer"
                      >
                        Join
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <div className="absolute -top-53 -right-40 w-130 h-130 bg-blue-200 rounded-full opacity-75" />
           <div className='absolute -top-30 -right-18'>
           <img
              src="/apium-mock.png"
              alt="Device Mock"
              className="relative w-140 h-auto "
            />
           </div>
          </div>
        </div>
      </div>
    </div>

    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-00 mb-4">What Our Users Say</h2>
          <div className="w-24 h-1 bg-purple-700 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience APIUM—your soon-to-be secret weapon for learning code and leveling up your career!
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
                    <div className="absolute top-7 right-8 text-indigo-100">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>

                    <p className="text-gray-700 text-lg mb-8 italic">"{testimonial.quote}"</p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-indigo-900">{testimonial.author}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
            <button
              onClick={prevTestimonial}
              className="bg-white text-indigo-900 rounded-full p-2 shadow-md hover:bg-indigo-50 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white text-indigo-900 rounded-full p-2 shadow-md hover:bg-indigo-50 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-10 flex-wrap justify-center gap-4">
        <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          Safe & Reliable
        </div>
        <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          24/7 Support
        </div>
        <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center">
          <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Open Source
        </div>
      </div>
    </section>

  </>
  )
}
