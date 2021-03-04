import './Home.css';
import {Link} from 'react-router-dom';
const Home = () => {

    return (
        <div className="body">
            <div className="title-container">
                <h2>Mark Calculator</h2>
            </div>
            <div className="container">
                <Link className="submit-btn" to="/details">Enter Marks</Link>
                <Link className="view-btn" to="/leaderboard">View Leaderboard </Link>
            </div>
        </div>
      );
}
 
export default Home;