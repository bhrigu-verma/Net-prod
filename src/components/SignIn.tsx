import React from 'react';
import BackgroundImage from './BackgroundImage';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (<>

  <div className='flex align-middle mx-auto justify-center items-center h-screen'>
    
      
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/home"  />
    </div></>
  );
};

export default SignInPage;
