const Header = ({ onAdd }) => {
  return (
    <div className="container">
    <header className="header">
        <h1>Task tracker</h1> 
        <button className="button" onClick={onAdd}>Add</button>
    </header>
    </div>
  )
}

export default Header