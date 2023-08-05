import { useContext, useState } from 'react'
import { Context } from '../../context'

import './movies-add-form.css'

const MoviesAddForm = () => {
  const [state, setState] = useState({name: '', viewers: ''})

  const {_, dispatch} = useContext(Context)

  function changeHandlerInput(e) {setState({...state, [e.target.name]: e.target.value})}

  function addFormHandler(e) {
    e.preventDefault()
    if (state.name === '' || state.viewers === '') return
    const data = {name: state.name, viewers: state.viewers}
    dispatch({type: 'ADD_FORM', payload: data})
    setState({name: '', viewers: ''})
  }

  return (
    <div className='movies-add-form'>
        <h3>Yangi kinolar qo'shish</h3>
        <form className='add-form d-flex' onSubmit={addFormHandler}>
            <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' onChange={changeHandlerInput} name='name' value={state.name} />
            <input type="number" className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan" onChange={changeHandlerInput} name='viewers' value={state.viewers} />
            <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
        </form>
    </div>
  )
}

export default MoviesAddForm