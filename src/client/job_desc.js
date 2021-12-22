import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
export default class JOB_DESC extends Component {
  state = { data: null, isLoaded: false };

  async componentDidMount() {
    try {
      const response = await fetch('/api/getUsername');
      const data = await response.json();
      this.setState({ data: data, isLoaded: true });
    } catch (e) {
      if (e.name != "AbortError") this.setState({ error: e.message });
    }
  }

  render() {
    const { data, isLoaded } = this.state;
    if (!isLoaded) {
      // not loaded
      return (
        <div>Loading...</div>
      )
    }
    console.log("DATA", data);
    // const formatKeys = Object.entries(data).map((item, i) => ( item ));
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Job.com
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ padding: 20 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
            {Object.entries(data).map(([key, value]) => (
                 <Card>
                 <CardContent>
                   <Typography color="text.secondary">
                   <h2 key={key}>{key}: {value}</h2>
                   </Typography>
                 </CardContent>
               </Card>
              ))}     
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}