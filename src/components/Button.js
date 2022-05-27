import React from 'react'

const Button = ({isSolid, children, onClick}) => {
  const cls = isSolid
    ? "w-2/3 bg-blue-400 p-1 rounded-md text-white uppercase"
    : "w-2/3 border-2 border-blue-400 p-1 rounded-md"

    return(
      <button className={cls} onClick={onClick}>{children}</button>
    );
}

export default Button