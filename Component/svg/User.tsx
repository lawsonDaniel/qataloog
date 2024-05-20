import React from "react";

function User( {strokeWidth = 1.5, strokeColor = '#323233', results=false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      fill="none"
      viewBox="0 0 24 18"
    >
      <path
        stroke={results ? '#F14119' : '#323233'} 
        strokeWidth={results ? '2' : '1.5'}
        strokeLinecap="round"
        
        d="M20.774 15c.75 0 1.345-.472 1.88-1.13 1.096-1.35-.703-2.43-1.389-2.957-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 000-5M3.226 15c-.75 0-1.345-.472-1.88-1.13-1.096-1.35.703-2.43 1.389-2.957C3.432 10.376 4.21 10.07 5 10m.5-2a2.5 2.5 0 010-5"
      ></path>
      <path
         stroke={results ? '#F14119' : '#323233'} 
         strokeWidth={results ? '2' : '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
       
        d="M8.084 12.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 16.436 7.7 17 8.817 17h6.368c1.116 0 2.004-.564 2.801-1.353 1.632-1.614-1.047-2.904-2.069-3.536a7.457 7.457 0 00-7.832 0z"
      ></path>
      <path
      stroke={results ? '#F14119' : '#323233'} 
      strokeWidth={results ? '2' : '1.5'}
       
        d="M15.5 4.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
      ></path>
    </svg>
  );
}

export default User;
