import React , {useState} from 'react';
import './home.css';
import Header from '../../components/header';
import Exploremenu from '../../components/explore-menu/exploremenu';
import FoodDisplay from '../../components/fooddisplay';
import Appdownload from '../../components/appdownload/appdownload';


const Home = () => {
    const [category, setCategory] =useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>
        
    </div>
  )
}

export default Home;