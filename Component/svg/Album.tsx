"use client";
import React from 'react';

const Album = ({ strokeWidth = 1.5, strokeColor = '#323233',results = false  }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6"
       stroke={results ? '#F14119' : '#323233'}
      strokeWidth={results ? '2' : '1.5'}
    />
    <path
      d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z"
       stroke={results ? '#F14119' : '#323233'}
      strokeWidth={results ? '2' : '1.5'}
    />
    <path
      d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18"
       stroke={results ? '#F14119' : '#323233'}
      strokeWidth={results ? '2' : '1.5'}
      strokeLinejoin="round"
    />
    <path
      d="M12.9998 7H13.0088"
       stroke={results ? '#F14119' : '#323233'}
      strokeWidth={strokeWidth * 1.33} // Adjust to match the original stroke-width="2" proportionally
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Album;
