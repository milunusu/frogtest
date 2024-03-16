// hope this works
//https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7
// App router includes @vercel/og

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    
    const imageData = await fetch(
        new URL('https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7', import.meta.url)
    ).then((res) => res.arrayBuffer());

    // Do something with imageData here
    
}
