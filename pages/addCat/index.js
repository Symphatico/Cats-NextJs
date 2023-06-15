import { Box, Button, Fab, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { redirect } from 'next/navigation';

const AddCatForm = () => {
  const [values, setValues] = useState();
  const router = useRouter();
  const { push } = useRouter();
  const styleInput = {
    margin: '1rem',
    backgroundColor: 'antiquewhite',
  };

  const submit = () => {
    const { name, origin, description, life_span, url } = values;

    const newCatValues = {
      breeds: [{ name, origin, description, life_span }],
      id: new Date(),
      url,
    };
    fetch('http://localhost:3000/api/requestAnimal', {
      method: 'POST',
      body: JSON.stringify({ newCatValues }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      response.json();
    });
  };
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage:
          'url(https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cute-seamless-cat-paw-background-picture-image_1282901.jpg)',
      }}
    >
      <Fab onClick={() => router.back()}>
        <ArrowBackIcon />
      </Fab>
      <Grid
        container
        direction="column"
      >
        <TextField
          label="Name"
          id="name"
          variant="filled"
          sx={styleInput}
          onChange={(e) => {
            const name = e.target.value;
            setValues({ ...values, name });
          }}
        />
        <TextField
          label="Origin"
          variant="filled"
          id="origin"
          sx={styleInput}
          onChange={(e) => {
            const origin = e.target.value;
            setValues({ ...values, origin });
          }}
        />
        <TextField
          label="Description"
          id="description"
          variant="filled"
          sx={styleInput}
          onChange={(e) => {
            const description = e.target.value;
            setValues({ ...values, description });
          }}
        />
        <TextField
          label="Life span"
          id="life_span"
          variant="filled"
          sx={styleInput}
          onChange={(e) => {
            const life_span = e.target.value;
            setValues({ ...values, life_span });
          }}
        />
        <TextField
          sx={styleInput}
          label="Image URL"
          id="image_url"
          variant="filled"
          onChange={(e) => {
            const url = e.target.value;
            setValues({ ...values, url });
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            submit();
            router.back();
          }}
        >
          Submit Cat
        </Button>
      </Grid>
    </Box>
  );
};

export default AddCatForm;
