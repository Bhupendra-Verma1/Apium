import { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor';

const Home = () => {
  const [codes, setCodes] = useState([]);
  const [currentCode, setCurrentCode] = useState({
    title: '',
    language: 'Java',
    content: ''
  });
  const userEmail = localStorage.getItem('userEmail');

  // Fetch user code snippets
  const fetchCodes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/codes', {
        headers: { 
          'X-USER-EMAIL': userEmail,
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCodes(response.data);
    } catch (error) {
      console.error('Error fetching codes', error);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchCodes();
    }
  }, [userEmail]);

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/codes', currentCode, {
        headers: { 
          'X-USER-EMAIL': userEmail , 
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCodes([...codes, response.data]);
      setCurrentCode({ title: '', language: 'Java', content: '' });
    } catch (error) {
      console.error('Error creating code snippet', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Code Snippets</h2>
      {userEmail ? (
        <>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={currentCode.title}
              onChange={e => setCurrentCode({ ...currentCode, title: e.target.value })}
            />
            <br />
            <textarea
              placeholder="Language"
              value={currentCode.language}
              onChange={e => setCurrentCode({ ...currentCode, language: e.target.value })}
            />
            <br />
            <CodeEditor
              code={currentCode.content}
              onChange={(value) => setCurrentCode({ ...currentCode, content: value })}
            />
            <br />
            <button onClick={handleCreate} className='bg-blue-500 rounded-md'>Create Code Snippet</button>
          </div>
          <div>
            <h3>Saved Snippets</h3>
            <ul>
              {codes.map(code => (
                <li key={code.id}>
                  <strong>{code.title}</strong> - {code.language}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Please log in to manage your code snippets.</p>
      )}
    </div>
  );
};

export default Home;
