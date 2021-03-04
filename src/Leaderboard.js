import './Leaderboard.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';


const Leaderboard = ({marklist}) => {
    const [ searchTerm, setSearchTerm] = useState("");
    var count = 1;
    function increase(){
        count=count+1;
    }
    function setrank(){
        return (count);
    }
    return ( 
        <div className="body">
            <div className="title-container">
            <Link className="nav-btn" to="/">Home</Link>
            <Link className="nav-btn" to="/details">Submit Marks</Link>
            </div>
            <h3>Leaderboard: <input className="search-bar" placeholder="Enter name to search ..." type="text" onChange={(event)=>{
                setSearchTerm(event.target.value);
            }}></input></h3>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Roll Number</th>
                    <th>Name</th>
                    <th>Marks-Maths</th>
                    <th>Marks-Physics</th>
                    <th>Marks-Chemistry</th>
                    <th>Total</th>
                    <th>Percentage</th>
                </tr>
                
                {marklist.filter((val)=> {
                    if(searchTerm === ""){
                        return val;
                    }
                    else if(val.Student_Name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val; 
                        }return null;
                }).map((marklist)=>(
                        <tr key={marklist.id}>
                            <td id="rank">{setrank()}{increase()}</td>
                            <td>{marklist.Roll_Number}</td>
                            <td>{marklist.Student_Name}</td>
                            <td>{marklist.Maths_mark}</td>
                            <td>{marklist.Physics_Mark}</td>
                            <td>{marklist.Chemistry_Mark}</td>
                            <td>{marklist.Total_mark}</td>
                            <td>{marklist.Percentage}</td>
                        </tr> 
                ))}
                
            </table>
        </div>
        
     );
}
 
export default Leaderboard;