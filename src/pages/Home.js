import React from 'react'
import Carousell from '../components/Carousell';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Grid from '../components/Grid';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousell/><br/ ><br />
      <Grid />
      <Footer />
      
    </div>
  )
}
