import React from 'react';
import './landing.css';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import logo from '../../Assets/images/logo_insurgente.png';
import canva from '../../Assets/images/canva.svg';
import whatsapp from '../../Assets/images/whatsapp.svg';
import instagram from '../../Assets/images/instagram.svg';
import Button from '@mui/material/Button';

export const Landing = () => {
  return (
    <>
      <Grid container className='landing-container' justifyContent={'center'}>
        <Grid size={{ xs: 11, md: 8 }}>
            <img src={logo} alt="Logo Insurgente Accesorios" className='logo'/>
            <Typography variant="h4" className='title'>
                Insurgente Accesorios
            </Typography>
            <Typography className='subtitle'>
                Accesorios hechos a mano y al mejor estilo 
            </Typography>
        </Grid>
        <Grid size={{ xs: 11, md: 8 }}>
            <a href="https://wa.me/573183541565" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="Logo de Whatsapp" className='icon-contact'/></a>
            <a href="https://www.instagram.com/insurgente_accesorios/profilecard/?igsh=YTFoYngxcXFoeWJm" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Logo de Instagram" className='icon-contact'/></a>
        </Grid>
        <Grid size={{ xs: 11, md: 8 }} className='buttons-container'>
            <Button variant="contained" className='btn-landing' component="a" 
            href="https://www.canva.com/design/DAGXpC43JF8/PxF2rP5-R9AqZfHGFrxDoA/view?utm_content=DAGXpC43JF8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            rel="noopener noreferrer">
                <Grid container size={1} alignItems={'center'}>
                    <img src={canva} alt="Logo de Canva" className='icon'/>
                </Grid>
                <Grid container size={8} alignItems={'center'} justifyContent={'center'}>
                    Nuestro catálogo
                </Grid>
            </Button>
        </Grid>
        <Grid size={{ xs: 11, md: 8 }} className='buttons-container'>
            <Button variant="contained" className='btn-landing' component="a" 
            href="https://wa.me/573183541565"
            target="_blank"
            rel="noopener noreferrer">
                <Grid container size={1} alignItems={'center'} >
                    <img src={whatsapp} alt="Logo de Whatsapp" className='icon'/>
                </Grid>
                <Grid container size={8} alignItems={'center'} justifyContent={'center'}>
                    Whatsapp
                </Grid>
            </Button>
        </Grid>
        <Grid size={{ xs: 11, md: 8 }} className='buttons-container' component="a" 
            href="https://www.instagram.com/insurgente_accesorios/profilecard/?igsh=YTFoYngxcXFoeWJm"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="contained" className='btn-landing'>
                <Grid container size={1} alignItems={'center'}>
                    <img src={instagram} alt="Logo de Instagram" className='icon'/>
                </Grid>
                <Grid container size={8} alignItems={'center'} justifyContent={'center'}>
                    Instagram
                </Grid>
            </Button>
        </Grid>
      </Grid>
    </>
  );
};