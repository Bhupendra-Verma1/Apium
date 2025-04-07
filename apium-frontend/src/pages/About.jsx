import React from 'react';

export default function About() {

  const mission = {
    title: 'Our Mission',
    text: 'We simplify development with AI-powered code suggestions, seamless integrations, and a fully comfortable interface—making coding more efficient and enjoyable for developers of all levels.',
  };

  const story = {
    title: 'Our Story',
    text: 'Founded in January 2025 by two final-year BCA students, Apium emerged from our genuine frustration with heavy, clunky code editors. What began as our final-year graduation project quickly evolved into a passion for crafting a simpler, more intuitive code editor. We built Apium to provide a lightweight, user-friendly environment that truly feels like home—no matter where you code.',
  };

  const coreValues = [
    { icon:( <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1050 400"
      className='h-30 w-30'
    >
      <rect fill="#F9F9F9" width="1050" height="400" />
      <circle fill="#E6E6E6" cx="150" cy="200" r="50" />
      <circle fill="#CCCCCC" cx="300" cy="200" r="50" />
      <circle fill="#B3B3B3" cx="450" cy="200" r="50" />
      <circle fill="#999999" cx="600" cy="200" r="50" />
      <circle fill="#808080" cx="750" cy="200" r="50" />
      <circle fill="#666666" cx="900" cy="200" r="50" />
    </svg>
    ),title:'Innovation', text: 'We constantly experiment with AI and UX to stay ahead of the curve.' },
    { icon: '',title: 'Simplicity', text: 'Every feature must earn its place; bloat has no home here.' },
    { icon: '💻', title: 'Collaboration', text: 'We believe the best code is written together.' },
    { icon: '🤝', title: 'Performance', text: 'Milliseconds matter—both in load times and in your day.' },
  ];

  const keyFeatures = [
    { icon: '⚡', title: 'Intelligent Suggestions', description: 'Context-aware code completion powered by machine learning.' },
    { icon: '🌐', title: 'Multi-Language Support', description: 'From JavaScript to Rust, we’ve got you covered.' },
    { icon: '🎨', title: 'Customizable Interface', description: 'Themes, layouts, and plugins—tailor the IDE to your taste.' },
    { icon: '🔄', title: 'Real-Time Collaboration', description: 'Share your workspace and code side-by-side with teammates.' },
  ];

  const techStack = {
    frontend: ['React', 'Monaco Editor', 'Tailwind CSS', 'TypeScript'],
    backend: ['Node.js', 'WebSocket', 'IndexedDB', 'Cloud Sync'],
  };

  const team = [
    { name: 'Ashutosh Singh', role: 'Co-Founder & CTO', img: 'https://via.placeholder.com/150', bio: 'Java full-stack engineer and AI enthusiast.' },
    { name: 'Priya Mehta', role: 'Co-Founder & UX Lead', img: 'https://via.placeholder.com/150', bio: 'Designs interfaces that feel effortless.' },
    { name: 'Ravi Patel', role: 'Backend Architect', img: 'https://via.placeholder.com/150', bio: 'Scales real-time systems to millions of users.' },
  ];

  const vision = [
    'AI-Powered Code Analysis – Automated bug detection and refactoring.',
    'Enhanced Collaboration Tools – Video-chat, whiteboarding, and more.',
    'Mobile Companion App – Review and merge pull requests on the go.',
    'Natural Language Code Generation – Describe a feature in plain English; get working code.',
  ];

  const testimonials = [
    { quote: 'I cut my development time in half—this editor just gets out of the way.', author: 'Sonia Gupta, Full-Stack Engineer' },
    { quote: 'The AI suggestions are uncanny. It feels like pair programming with a senior dev.', author: 'Amit Shah, Frontend Developer' },
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:text-gray-800">
      <header className="container mx-auto py-9 px-4 text-center flex flex-col items-center justify-center">
        <div className="flex items-center mb-2">
          <img
            src="codeLogo.png"
            className="mr-3 h-7"
            alt="Logo"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">
          Meet APIUM <span className="text-purple-700">{`<About/>`}</span>
        </h1>
        <p className="text-lg text-gray-600">
          Innovation, creativity, and technology—built for the future.
        </p>
      </header>

      <main className="container mx-auto px-4 space-y-20">
        <section>
          <h2 className="text-3xl mb-2 font-semibold inline-block">{mission.title}</h2>
          <p className="text-lg max-w-3xl">{mission.text}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2 inline-block">{story.title}</h2>
          <p className="text-lg max-w-3xl">{story.text}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((core) => (
              <div
                key={core.title}
                className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transform transition"
              >
                <div className="flex flex-col items-center mb-3">
                  <span className="text-5xl mb-1">{core.icon}</span> 
                  <h3 className="text-xl font-medium text-center">{core.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {core.text}
                </p>
              </div>
            ))}
          </div>
        </section>


        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transform transition"
              >
                <div className="flex flex-col items-center mb-3">
                  <span className="text-5xl mb-1">{feat.icon}</span>
                  <h3 className="text-xl font-medium text-center">{feat.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>



        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-500 inline-block">Under the Hood</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h3 className="text-xl font-medium mb-2">Frontend</h3>
              <ul className="list-disc pl-6 space-y-1">
                {techStack.frontend.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Backend</h3>
              <ul className="list-disc pl-6 space-y-1">
                {techStack.backend.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block">Looking Ahead</h2>
          <ul className="list-disc pl-6 space-y-2 max-w-3xl">
            {vision.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 inline-block">What Developers Are Saying</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {testimonials.map((t, idx) => (
              <blockquote key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                <p className="italic mb-4">“{t.quote}”</p>
                <footer className="text-right font-semibold">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Get Started?</h2>

        </section>
      </main>
 
    </div>

  );
}
