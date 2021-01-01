import React from 'react'
import{auth} from './firebase';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function Test() {
    return (
        <div>{/**this is for testing purpose as  if condition is not working properly so to redirect to some page once it logs in*/}
            <h1>hey you are logged in</h1>
          
            <Button
              onClick={() => auth.signOut()}>
                  click me to log out
             
              </Button>
             <Link to="/">click me to go back</Link>
            
        </div>
    )
}

export default Test
