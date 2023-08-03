import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Ironman', viewers: 1000, favourite: false, like: false, id: 1},
        {name: 'Avengers', viewers: 1200, favourite: false, like: false, id: 2},
        {name: 'DC films', viewers: 1100, favourite: false, like: false, id: 3},
      ]
    }
  }

  onDelete = id => {
    this.setState(({data}) => ({data: data.filter(c => c.id !== id)}))
  }

  addForm = item => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    this.setState(({data}) => ({data: [ ...data, newItem] }) )
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  render() {
    const {data} = this.state
    const allMoviesCount = data.length
    const favouriteMovieCount = data.filter(c => c.favourite).length

    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onToggleProp={this.onToggleProp} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }
}

export default App;