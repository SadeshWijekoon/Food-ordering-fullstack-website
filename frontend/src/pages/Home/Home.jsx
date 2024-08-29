import { useState } from 'react';
import Exploremenu from '../../compontes/Exploremenuj/Exploremenu';
import Header from '../../compontes/Header/Header';
import './Home.css'
import Fooddisplay from '../../compontes/Fooddisplay/Fooddisplay';


const Home = () => {

const [category,setCategory]=useState('All')

  return (
    <>
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
    </div>
    
    </>
  )
}

export default Home;
