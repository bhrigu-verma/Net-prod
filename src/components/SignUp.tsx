import React from 'react';
import BackgroundImage from './BackgroundImage';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (<>
 
   
      <div className='flex align-middle mx-auto justify-center items-center h-screen'>
      
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in"   redirectUrl="/home"  />
    </div></>
  );
};

export default SignUpPage;
