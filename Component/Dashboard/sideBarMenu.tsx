"use client";
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { SideBarProps } from './type';
import { useRouter,usePathname } from 'next/navigation'

function SideBarMenu({ label, icon }: SideBarProps) {
    const [isHover, setOnHover] = useState(false);

    let pathName:string = usePathname()
    const router = useRouter()
    const newHref = label.replace(/\s+/g, '') === "/" ? "/" : "/"+label.replace(/\s+/g, '');
    const results = isHover || pathName === newHref;
    const result =   pathName === newHref
    
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10px',
                height: "38px",
                alignItems: 'center',
                paddingLeft: '30px',
                width: '256px',
                background: results ? "#FCD9D1" : "#FFFFFF",
                borderRadius: "8px",
                '&:hover': {
                    background: "#FCD9D1",
                    borderRadius: "8px"
                }
            }}
            onClick={() => {
                router.push(newHref) ;
            }}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className="items-center w-[256px]"
        >
        {results ?  <Image
            style={{
                position: 'relative',
                left: '-30px',
                marginRight: '-6px',
                zIndex: '2'
            }}
            alt={''}
            src={result ? '/Rectangle17.svg' : '/Rectangle16.svg' }
            width={16}
            height={32}
        /> : <Image
        style={{
            position: 'relative',
            left: '-30px',
            marginRight: '-6px',
            zIndex: '2'
        }}
        alt={''}
        src={'/Rectangle18.svg' }
        width={16}
        height={32}
    /> }
            {React.cloneElement(icon, { results })}
            <Typography
                sx={{
                    fontWeight: results ? "700" : "500",
                    lineHeight: '24px',
                    fontSize: '16px',
                    color: results ? "#F14119" : "#323233"
                }}
            >{label === "/" ? "Dashboard" : label}</Typography>
        </Box>
    );
}

export default SideBarMenu;
