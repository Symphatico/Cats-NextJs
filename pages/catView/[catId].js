import React from 'react';
import { Box, Button, Fab, Grid, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { cats } from '../../data/cats';

function CatView({ cat }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage:
          'url(https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cute-seamless-cat-paw-background-picture-image_1282901.jpg)',
      }}
    >
      <Fab
        sx={{ height: '4rem', margin: '1rem' }}
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </Fab>
      <Image
        alt="asdsa"
        placeholder="blur"
        blurDataURL="assets/images.jpg"
        src={cat.url}
        width={cat.width / 2}
        height={cat.height / 2}
      />
    </Box>
  );
}
export default CatView;

export async function getServerSideProps(context) {
  const { catId } = context.params;
  const cat = cats.find((cat) => cat.id === catId);

  return {
    props: {
      cat,
    },
  };
}
