import './movie-list-item.css'

const MovieListItem = ({name, viewers, onDelete, onToggleProp, favourite, like}) => {
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
      <span onClick={onToggleProp} className="list-item-group-label" data-toggle='like'>{name}</span>
      <input type="number" className="list-item-group-input" defaultValue={viewers}/>
      <div className="d-flex justify-content-center align-item-center">
        <button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle='favourite'>
            <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default MovieListItem