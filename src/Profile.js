import React from 'react'
import Navbar from './Navbar.js';

function Profile({username}) {
const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address1,setAddress1]=useState("");
  const [address2,setAddress2]=useState("");
  const [state,setState]=useState("");
  const [country,setCountry]=useState("");
  const [postalcode,setPostalCode]=useState("");
    return (
        <div className="profile">
            <Navbar username={username} />
            <form action="#">
              <h1>Create Account</h1>

              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={SignUp}>Sign Up</button>
            </form>
        </div>
    )
}

export default Profile;
