// yeah idfk this should work as second image 

export const runtime = 'edge'

export async function GET(request: Request) {
  const imageData = await fetch(
    'https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7'
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/jpeg',
    },
  })
}

