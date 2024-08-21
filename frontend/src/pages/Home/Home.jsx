import { useState } from 'react';
import Exploremenu from '../../compontes/Exploremenuj/Exploremenu';
import Header from '../../compontes/Header/Header';
import './Home.css'

const Home = () => {

const [category,setCategory]=useState('All')

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home;
