import React from 'react';
import { ImSpinner7 } from 'react-icons/im';

function Loading(){
  return (
    <div className="flex h-1/2  items-center justify-center text-6xl text-gray-600">
      <ImSpinner7 className="animate-spin"/>
    </div>);
}

export default Loading;