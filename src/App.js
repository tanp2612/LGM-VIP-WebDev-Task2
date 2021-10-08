/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, {useState} from "react";
import "./App.css";
import logo from "./11zon_cropped.png"
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
const App=()=>{
    const [user, Setuser]=useState([]);
    const [isLoading, setLoading] = useState(false);
    const getusers=async()=>{
       setLoading(true)
        const response=await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse=await response.json();
        Setuser(jsonresponse.data);
        if (jsonresponse){
        setLoading(false);
        }
    };
    
    
    return (
        <>
        <header>
        <img class="logo" src={logo} alt="logo"/>
        <nav>
            <ul class="nav__links">
                <li><a href="https://unlyricaltruths.wordpress.com/2021/07/20/1984-blog/">Services</a></li>
                <li><a href="https://tanp2612.github.io/LGMVIP-WebDev/Task-1/">Projects</a></li>
                <li><a href="https://www.linkedin.com/in/tanvi-patil-900953209/">About</a></li>
            </ul>
        </nav>
        <button onClick={getusers}>Get Users</button>
    </header>
        <div className="App"></div>
        <div className="boo">
        {isLoading ? null : <Backdrop open>
                 <CircularProgress color="secondary" />
                 </Backdrop>}
            {user.map(({id, email, first_name, last_name, avatar})=>{
                return(
                    <div className="card">
                        <div className="info">
                            <img src={avatar} alt="profile"></img>
                            <p className="name">{first_name}{last_name}</p>
                            <p>Email-id:{email}</p>
                        </div>
                    </div>
                )

            }
            )}

        </div>
        </>
    )
}



export default App;