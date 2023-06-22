import React from 'react';
import { Typography, Grid, TextField, FormHelperText, Button } from '@material-ui/core';
import {
    InfoCard,
    Header,
    Page,
    Content,
    ContentHeader,
    HeaderLabel,
    SupportButton,
} from '@backstage/core-components';

function handleSubmit (event: any) {
    event.preventDefault()
   const application = event.target.application.value;
//    fetch('http://localhost:7007/consume-be/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     application: application,
//   })
// })

}

export const FormComponent = () => (
    <>
        <form onSubmit={handleSubmit}>

        <Grid item>
            <TextField id="outlined-basic" name='application' label="Application" variant="outlined" fullWidth />
            <FormHelperText>Name of the Application</FormHelperText>
        </Grid>

        <Grid item>
            <TextField id="outlined-basic" label="Application" variant="outlined" fullWidth />
            <FormHelperText>THisi</FormHelperText>
        </Grid>

        <Grid item>
            <TextField id="outlined-basic" label="Application" variant="outlined" fullWidth />
            <FormHelperText>THisi</FormHelperText>
        </Grid>
        <Button type='submit' variant="outlined">Subscribe</Button>
        </form>
    </>
);
