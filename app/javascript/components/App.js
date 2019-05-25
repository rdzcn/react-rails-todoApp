import React from 'react'
import '../css/style.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <form className="pick">
          <input className="pick-date" type="date" required />
          <button type="submit" className="pick-button">Pick a date</button>
        </form>
      </div>
    ) 
  } 
}  

export default App
