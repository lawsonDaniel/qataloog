import React from "react";

function School({ strokeWidth = 1.5, strokeColor = '#323233', results =false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
       stroke={results ? '#F14119' : '#323233'} 
       strokeWidth={results ? '2' : '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
       
        d="M7 22v-9.724c0-1.082 0-1.623.245-2.077.244-.453.693-.746 1.592-1.33l2.082-1.356C11.444 7.17 11.706 7 12 7c.294 0 .556.171 1.082.513l2.081 1.355c.899.585 1.348.878 1.592 1.331.245.454.245.995.245 2.077V22"
      ></path>
      <path
       stroke={results ? '#F14119' : '#323233'} 
       strokeWidth={results ? '2' : '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 13h.009"
      ></path>
      <path
        stroke={results ? '#F14119' : '#323233'} 
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 22v-4.838c0-2.291-.944-2.477-3-3.162M4 22v-4.838c0-2.291.944-2.477 3-3.162M2 22h20M12 7V4.982m0 0V2.97c0-.474 0-.711.146-.858.46-.463 2.354.631 3.074 1.075.608.374.78 1.122.78 1.795h-4zM10 22v-3c0-.943 0-1.414.293-1.707C10.586 17 11.057 17 12 17c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v3"
      ></path>
    </svg>
  );
}

export default School;
