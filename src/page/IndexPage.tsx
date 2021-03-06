import React from 'react'
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    }
}))

function IndexPage() {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Typography variant="h1">메인 페이지!</Typography>
        </Grid>
    )
}

export default IndexPage