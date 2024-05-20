import React from "react";

function Microsoft({ strokeWidth = 1.5, strokeColor = '#323233',results=false }) {
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
        d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66-.19.21-.245.519-.356 1.135-1.19 6.596 1.41 12.694 7.61 15.068.665.255.998.382 1.61.382.613 0 .946-.128 1.612-.383 6.199-2.373 8.796-8.471 7.606-15.067-.111-.616-.167-.925-.357-1.136-.19-.21-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2z"
      ></path>
      <path
      stroke={results ? '#F14119' : '#323233'} 
      strokeWidth={results ? '2' : '1.5'}
        strokeLinecap="round"
        d="M12 2v20m9-10H3"
      ></path>
    </svg>
  );
}

export default Microsoft;
