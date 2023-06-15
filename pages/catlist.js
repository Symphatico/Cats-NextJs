import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Link, Typography } from '@mui/material';
import MediaCard from '../components/card';

export default function RowAndColumnSpacing({ dataCats }) {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage:
          'url(https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cute-seamless-cat-paw-background-picture-image_1282901.jpg)',
      }}
    >
      <Link href={'/addCat'}>
        <Button
          sx={{ margin: '1rem' }}
          variant="contained"
        >
          Add a cat
        </Button>
      </Link>
      <Link href={'/requestedPets'}>
        <Button
          sx={{ margin: '1rem' }}
          variant="contained"
        >
          Requested Animal
        </Button>
      </Link>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {dataCats.map((element, index) => {
          return (
            <Grid
              key={index}
              item
              xs={4}
            >
              <MediaCard
                {...element}
                showPicture={true}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/cats');
  const dataCats = await response.json();

  return {
    props: {
      dataCats,
    },
  };
}
