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

function Subscribe() {
    console.log('clicked')
}

export const FormComponent = () => (
    <>
        <Grid item>
            <TextField id="outlined-basic" label="Application" variant="outlined" fullWidth />
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
        <Button variant="outlined" onClick={Subscribe}>Subscribe</Button>
    </>
);
