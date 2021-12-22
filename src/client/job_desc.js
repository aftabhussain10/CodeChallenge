import React, { Component } from 'react';
import './app.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default class JOB_DESC extends Component {
  state = { data: null, isLoaded: false };

  async componentDidMount() {
    try {
      const response = await fetch('/api/getJobDesc');
      const data = await response.json();
      this.setState({ data: data, isLoaded: true });
    } catch (e) {
      if (e.name != "AbortError") this.setState({ error: e.message });
    }
  }

  render() {
    const { data, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>Loading...</div>
      )
    }
   const _res = Object.entries(data).map(([key, value]) => {
      const obj = {
        key: key,
        value : value.replace(/:/g, "")
      }
      console.log(obj);
      return obj;
    });
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
              Better Leap
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ padding: 20 }}>
              {_res.map((object) => (
                <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="body2" component="div" variant="h6">
                    {object.key}
                    </Typography>
                  </CardContent>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant ="body1" color="ThreeDDarkShadow">
                    {object.value}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
              ))}
        </div>
      </Box>
    );
  }
}