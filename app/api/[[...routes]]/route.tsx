/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'

const initialImage = "https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmW9hoQXMaqs9U29dWiZWujPmq1NkPkinqr6xruTjg8tMw";

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
})

app.frame('/', (c) => {
  return c.res({
    image: initialImage,
    imageAspectRatio: '1.91:1',
    intents: [
      <Button value="a">ok but so mediocre</Button>,    
    ],
  })
})

app.frame('/next', (c) => {
  const { buttonValue } = c

  if (buttonValue == 'a') {
    return c.res({
      action: '/next/a',
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/next/a`,
      imageAspectRatio: '1.91:1',
      intents: [
        <Button value="b">and so rude</Button>,    
      ],
    })
  } else if (buttonValue == 'b') {
    return c.res({
      action: '/next/b',
      image: initialImage,
      imageAspectRatio: '1.91:1',
      intents: [
        <Button value="a">ok but so mediocre</Button>,    
      ],
    })
  }

  // Default response if buttonValue is neither 'a' nor 'b'
  return c.res({
    action: '/next/default',
    image: initialImage,
    intents: [], 
  })
})

export const GET = handle(app)
export const POST = handle(app)
