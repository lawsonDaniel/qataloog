import React from "react";

function Coupon({ strokeWidth = 1.5, strokeColor = '#323233',results = false }) {
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
        strokeLinejoin="round"
    
        d="M2.464 9.344c-.248 0-.475-.202-.464-.465.067-1.542.255-2.546.78-3.34a4.658 4.658 0 011.11-1.174C5.055 3.5 6.7 3.5 9.992 3.5h4.014c3.292 0 4.937 0 6.104.865.431.32.807.717 1.109 1.174.525.794.713 1.798.78 3.34.011.263-.216.465-.465.465-1.386 0-2.51 1.189-2.51 2.656s1.124 2.656 2.51 2.656c.249 0 .476.202.465.466-.067 1.541-.255 2.545-.78 3.34a4.659 4.659 0 01-1.11 1.173c-1.166.865-2.811.865-6.103.865H9.993c-3.292 0-4.937 0-6.104-.865a4.659 4.659 0 01-1.109-1.174c-.525-.794-.713-1.798-.78-3.34-.011-.263.216-.465.464-.465 1.386 0 2.51-1.189 2.51-2.656S3.85 9.344 2.464 9.344z"
      ></path>
    </svg>
  );
}

export default Coupon;