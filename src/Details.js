import './Details.css';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
const Enter_marks = () => {
    const [roll_no,setRoll_no]= useState(null);
    const [name,setName]= useState('');
    const [mathsmark,setMathsmark]= useState(null);
    const [physicsmark,setPhysicsmark]= useState(null);
    const [chemistrymark,setChemistrymark]= useState(null);
    // const [totalmark,setTotalmark]= useState(null);
    // const [percentage,setPercentage]= useState(null);   

    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit= (e)=>{
        e.preventDefault();
        const marklist = {roll_no,name,mathsmark,physicsmark,chemistrymark};
        console.log(marklist)
        setIsPending(true);

        fetch('http://localhost:3000/leaderboard/',{
            method:'POST',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(marklist)
        }).then(res=>{
            if(!res.ok){
                alert('Roll Number already exists');
            }
            console.log('new data added');
            setIsPending(false);
            history.push('/');
        });
        
    }
    function findTotal(){
        var arr = document.getElementsByName('marks');
        var tot=0;
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
                tot += parseInt(arr[i].value);
        }
        if(tot!==0)
            document.getElementById('total').value = tot;
        return tot;

    }
    function findPercentage(){
        var arr = document.getElementsByName('marks');
        var tot=0;
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
                tot += parseInt(arr[i].value);
        }
        if(tot!==0)
            document.getElementById('percentage').value = Number(tot*(1/3).toFixed(2));
        return tot*(1/3);
    }

    return ( <div className="body">
        <div className="title-container">   
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/leaderboard">View Leaderboard</Link>
        </div>
        <div className="form-container">
            <h2> Mark Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter your Roll Number:</label>
                <input 
                    type="number"
                    required
                    value={roll_no}
                    onChange={(e)=>setRoll_no(e.target.value)}
                />
                <label>Enter your Name:</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Enter your Maths Mark:</label>
                <input 
                    onBlur={findTotal()}
                    name="marks"
                    className="inputtotal"
                    type="number"
                    required
                    min="0"
                    max="100"
                    value={mathsmark}
                    onChange={(e)=>setMathsmark(e.target.value)}
                />
                <label>Enter your Physics Mark:</label>
                <input 
                    onBlur={findTotal()}
                    name="marks"
                    className="inputtotal"
                    type="number"
                    required
                    min="0"
                    max="100"
                    value={physicsmark}
                    onChange={(e)=>setPhysicsmark(e.target.value)}
                />
                <label>Enter your Chemistry Mark:</label>
                <input 
                    onBlur={findTotal()}
                    name="marks"
                    className="inputtotal"
                    type="number"
                    required
                    min="0"
                    max="100"
                    value={chemistrymark}
                    onChange={(e)=>setChemistrymark(e.target.value)}
                />
                <label>Your Total Marks:</label>
                <input 
                    readOnly
                    onBlur={findPercentage()}
                    name="total"
                    id="total"
                    type="number"
                    // value={totalmark}
                    // onChange={(e)=>setTotalmark(e.target.value)}
                    
                />
                <label>Percentage:</label>
                <input 
                    readOnly
                    id="percentage"
                    type="number"
                    step="0.000000000000001"
                    // value={percentage}
                    // onChange={(e)=>setPercentage(e.target.value)}
                />
                {!isPending && <button>Submit Marks</button>}
                {isPending && <button disabled>Submitting...</button>}
            </form>
        </div>
        </div>

     );
}
 
export default Enter_marks;
