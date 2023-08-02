import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Ironman', viewers: 1000, favourite: false, id: 1},
        {name: 'Avengers', viewers: 1200, favourite: true, id: 2},
        {name: 'DC films', viewers: 1100, favourite: false, id: 3},
      ]
    }
  }

  onDelete = id => {
    this.setState(({data}) => ({data: data.filter(c => c.id !== id)}))
  }

  addForm = item => {
    this.setState(({data}) => ({data: [ ...data, item] }) )
  }

  render() {
    const {data} = this.state

    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }
}

export default App;