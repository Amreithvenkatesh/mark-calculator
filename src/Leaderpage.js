import {useState,useEffect} from 'react';
import Leaderboard from './Leaderboard';

const Leader_page = () => {
    const [marklist,setMarklist] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error, setError] = useState(null);
    
        useEffect(()=>{
            fetch('http://localhost:8000/leaderboard/')
                .then(res =>{
                    if(!res.ok){
                        throw Error('Data not fetched');
                    }
                    return res.json();
                })
                .then(data =>{  
                    setMarklist(data);
                    setisLoading(false);
                    setError(null); 
                })
                .catch(err =>{
                    setError(err.messsage);
                    setisLoading(false);
                })
        },[]
        );

    return ( 
        <div className="leader-page">
            {error && <div>{error}</div>}
            {isLoading && <div>Fetching data...</div>}
            {marklist && <Leaderboard marklist={marklist} />}
        </div>
     );
}
 
export default Leader_page;
