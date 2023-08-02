import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';

function App() {
  const data = [
    {name: 'Ironman', viewers: 1000, favourite: false, id: 1},
    {name: 'Avengers', viewers: 1200, favourite: true, id: 2},
    {name: 'DC films', viewers: 1100, favourite: false, id: 3},
  ]

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data}/>
        <MoviesAddForm />
      </div>
    </div>
  )
}

export default App;