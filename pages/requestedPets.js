import { Box, Fab, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MediaCard from '../components/card';

const requestedPets = ({ animalData }) => {
  const router = useRouter();
  console.log(animalData);
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage:
          'url(https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cute-seamless-cat-paw-background-picture-image_1282901.jpg)',
      }}
    >
      <Fab
        onClick={() => router.back()}
        sx={{ margin: '1rem' }}
      >
        <ArrowBackIcon />
      </Fab>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {animalData.map((element, index) => {
          return (
            <Grid
              key={index}
              item
              xs={4}
            >
              <MediaCard
                {...element}
                show={false}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default requestedPets;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/requestAnimal');
  const animalData = await response.json();
  return {
    props: {
      animalData,
    },
  };
}
