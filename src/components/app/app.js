import { Component, useState } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

import './app.css';

const App = () => {
  const [data, setData] = useState(arr)
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')

  function onDelete(id) {setData(data.filter(c => c.id !== id))}

  function addForm(item) {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    setData([ ...data, newItem])
  }

  function onToggleProp(id, prop) {
    setData(data.map(item => {
      if(item.id === id) return {...item, [prop]: !item[prop]}
      return item
    }))
  }

  function searchHandler(arr, term) {
    if(term === 0 ) return arr
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  function filterHandler(arr, filter) {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostViewers':
        return arr.filter(c => c.viewers >= 1000)
      default:
        return arr
    }
  }

  function updateTermHandler(term) {setTerm(term)}

  function updateFilterHandler(filter) {setFilter(filter)}

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo allMoviesCount={data.length} favouriteMovieCount={data.filter(c => c.favourite).length} />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
        </div>
        <MovieList data={filterHandler(searchHandler(data, term), filter)} onToggleProp={onToggleProp} onDelete={onDelete} />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  )
}

export default App;

const arr = [
  {name: 'Ironman', viewers: 1000, favourite: false, like: false, id: 1},
  {name: 'Avengers', viewers: 1200, favourite: false, like: false, id: 2},
  {name: 'DC films', viewers: 900, favourite: false, like: false, id: 3},
]