import { Stack } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';

type Frame = { id: string; src: string; title: string };

const Frames = () => {
  const frames: Frame[] = useMemo(
    () => [
      {
        id: nanoid(),
        src: 'https://www.youtube.com/embed/nbp3Ra3Yp74',
        title: 'THE AMAZING SPIDER-MAN 2',
      },
      {
        id: nanoid(),
        src: 'https://www.youtube.com/embed/eAA1ZDSCWjI',
        title: 'RUROUNI KENSHIN: THE FINAL/THE BEGINNING (2021)',
      },
      {
        id: nanoid(),
        src: 'https://www.youtube.com/embed/4CbLXeGSDxg',
        title: 'The Lion King Official Teaser Trailer',
      },
      {
        id: nanoid(),
        src: 'https://www.youtube.com/embed/dT0kexzmU7A',
        title: 'The Recruit | Official Trailer | Netflix',
      },
      {
        id: nanoid(),
        src: 'https://www.youtube.com/embed/nW948Va-l10',
        title: "Marvel Studios' Loki | Official Trailer | Disney+",
      },
      {
        id: nanoid(),
        src: 'https://www.youtube.com/embed/Xj2b0swdpX8',
        title: 'LOVE DEATH + ROBOTS VOLUME 3 | Official Trailer | Netflix',
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
