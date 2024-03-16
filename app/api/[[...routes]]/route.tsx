/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog';
import { handle } from 'frog/next';

const initialImage = "https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmW9hoQXMaqs9U29dWiZWujPmq1NkPkinqr6xruTjg8tMw";

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
});

app.frame('/', (c) => {
  return c.res({
    image: initialImage,
    imageAspectRatio: '1.91:1',
    intents: [
      <Button value="a">ok but so mediocre</Button>,    
    ],
  });
});

app.frame('/next', (c) => {
  const { buttonValue } = c;

  if (buttonValue === 'a') {
    // Set the correct URL for the image
    const nextImageURL = `http://localhost:3002/next/a`;
    return c.res({
      action: '/next/a',
      image: nextImageURL,
      imageAspectRatio: '1.91:1',
      intents: [
        <Button value="b">and so rude</Button>,    
      ],
    });
  } else if (buttonValue === 'b') {
    // You can handle this case if needed
  }

  // Default response if buttonValue is neither 'a' nor 'b'
  return c.res({
    action: '/next/default',
    image: initialImage,
    intents: [], 
  });
});

export const GET = handle(app);
export const POST = handle(app);


