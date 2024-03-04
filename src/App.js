import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
  <div className='outer'>
    <h1 className='heading'>Random GIF</h1>
    <div className='boxes'>
      <Random/>
      <Tag/>
    </div>
  </div>
  );
}

export default App;
