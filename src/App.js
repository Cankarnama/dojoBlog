

// </div>
import logo from './logo.svg'; 
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import netNinja from './components/netNinja';

const title ='and yes i was able to debug this code myself';

function App(){
  return(
       <div className="App">
       <Navbar/>
      
      <div className="content">
         <h1>{title}</h1>
      
         <a href="link">click the link below</a>
         <input className='inputfield'
           type="text"
           id="Name"
           name="Name"
           placeholder="Jane Doe"
           size="103"
           style={{
             height: "40px",
             width: "80%",
             borderRadius: "50px",
      
           }}
         />
      
      
      <Home/>
      
      </div>
      </div>
      )
      

 }
 export default App;





//       <div>
//         <form >
//       <label htmlFor="questions">security question</label>
//       <select name="questions" id="questions">
//         <option value="q1">what is the name of your favourite food</option>
//         <option value="q2">what is the name of your favourite person</option>
//         <option value="q3">what is the name of your favourite sport</option>
//       </select>
// <br /><br />

//  <label htmlFor="answers"> security question answers</label>
//  <input type="text" id="answers" name="answers" required/>

//  <br /><br />

 
//  <label htmlFor="hobbies"> what are your hobbies:</label>
//  <br />
//  <textarea name="hobbies" id="hobbies" cols="50" rows="30" required></textarea>
// <br />
// <label htmlFor="gender">male</label>
// <input type="radio" id='gender' name='gender2' value="male"/>

// <label htmlFor="gender2">female</label>
// <input type="radio" id='gender2' name='gender'value="female" />

// <label htmlFor="gender3">other</label>
// <input type="radio" id='gender3' name='gender' value="other" />
// <br /><br />


//  <input type="submit" name=" submit the form" />
//  </form>
//     </div>