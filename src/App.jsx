import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchList, setWatchList] = useState([])

  let handleAddToWatchList = (movieObj) =>{
    let newWatchList = [...watchList, movieObj] //spread previous watch list and add new movie to the watch list
    setWatchList(newWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    console.log(newWatchList)
  }

  let handleRemoveFromWatchList = (movieObj) =>{
    let filteredWatchList = watchList.filter((movie) =>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner/><Movies handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/></>}/>
          <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
