import { useState } from 'react';
import Exploremenu from '../../compontes/Exploremenuj/Exploremenu';
import Header from '../../compontes/Header/Header';
import './Home.css'
import Fooddisplay from '../../compontes/Fooddisplay/Fooddisplay';
import Appdownload from '../../compontes/App downlod/App download';


const Home = () => {

const [category,setCategory]=useState('All')

  return (
    <>
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
    
    </>
  )
}

export default Home;
