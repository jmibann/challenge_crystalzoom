import React from 'react'

const CheckInput = ({children}) => (
    <div className="flex flex-row w-full justify-start items-center pb-2">
      <input type="checkbox"/><span className="pl-2">{children}</span>
    </div>  
  );

export default CheckInput