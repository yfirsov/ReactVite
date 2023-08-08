import { Stack } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';

type Frame = { src: string; title: string; id: string };

const Frames = () => {
  const frames: Frame[] = useMemo(
    () => [
      {
        title: 'THE AMAZING SPIDER-MAN 2',
        src: 'https://www.youtube.com/embed/nbp3Ra3Yp74',
        id: nanoid(),
      },
      {
        title: 'RUROUNI KENSHIN: THE FINAL/THE BEGINNING (2021)',
        src: 'https://www.youtube.com/embed/eAA1ZDSCWjI',
        id: nanoid(),
      },
      {
        title: 'The Lion King Official Teaser Trailer',
        src: 'https://www.youtube.com/embed/4CbLXeGSDxg',
        id: nanoid(),
      },
    ],
    [],
  );

  return (
    <Stack
      gap={2}
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="center"
      margin={1}
    >
      {frames.map(f => (
        <iframe
          key={f.id}
          style={{ border: 'none', borderRadius: '20px' }}
          title={f.title}
          width="560"
          height="315"
          src={f.src}
          sandbox="allow-presentation allow-scripts allow-same-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ))}
    </Stack>
  );
};

export default Frames;
