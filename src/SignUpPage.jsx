import React from 'react';

function SignUpPage() {
  return(
    <div className="flex items-center justify-center w-full h-screen br-gray-100">
<div className="flex flex-col w-80 p-5 rounded-md shadow-md bg-white">
  
  <h1 className="text-2xl font-bold self center mb-4">Signup to CodeYogi</h1>
  
  <div>
<label htmlFor="name" className="sr-only">Name</label>
  
<input 
  id="name" type="text"
  className=" border border-gray-300 px-3 text-gray-900 placeholder-gray-500 "
  placeholder="Name"/>
  </div>
  
  
  <div>
<label htmlFor="email-address" className="sr-only">Email address</label>
  
<input 
  id="email-address" type="email"
  className=" border border-gray-300 px-3 text-gray-900 placeholder-gray-500 "
  placeholder="Email address"/>
  </div>
  
<div>
<label htmlFor="password" className="sr-only">password</label>
  
<input 
  id="password" type="password"
  className="  border border-gray-300 px-3 text-gray-900 placeholder-gray-500 "
  placeholder="Password"/>
  </div>

<div>
<label htmlFor="confirm-password" className="sr-only">password</label>
  
<input 
  id="confirm-password" type="password"
  className="  border border-gray-300 px-3 text-gray-900 placeholder-gray-500 "
  placeholder="Confirm Password"/>
  </div>

  
<button className="self-end mt-3 text-white bg-indigo-800 rounded-md px-2 py-1">SignUp</button>

</div>
</div>
    
  );
}

export default SignUpPage;