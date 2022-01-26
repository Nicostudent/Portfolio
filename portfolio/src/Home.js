import {Link} from 'react-router-dom';
import './styles.css';
import Nico from './img/Nico1.jpeg'
const Home = () => {
  return (
    <div className='home'> 
      <div className='title'>
        <h1>
          <p>Hi,</p>
          <p>I am Nico</p>
          <p className='js_pro'>Jr Js programer</p>
        </h1>
        <Link to='About'>
          <button>More info</button>
        </Link>
      </div>
      <div className='home_img'>
        <img src={Nico} alt=' mi imagen'/>
      </div>
    </div>
  )
};

export default Home;
