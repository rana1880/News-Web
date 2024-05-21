import React from 'react'

const navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">IndiaNews</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")} style={{ transition: "color 0.3s, background-color 0.3s", cursor: "pointer" }}>Technology</div>
        </li>
        
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("business")} style={{ transition: "color 0.3s, background-color 0.3s", cursor: "pointer" }}>Business</div>
        </li>

        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("health")} style={{ transition: "color 0.3s, background-color 0.3s", cursor: "pointer" }} >Health</div>
        </li>

        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("science")} style={{ transition: "color 0.3s, background-color 0.3s", cursor: "pointer" }}>Science</div>
        </li>

        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("sports")} style={{ transition: "color 0.3s, background-color 0.3s", cursor: "pointer" }} >Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("entertainment")} style={{ transition: "color 0.3s, background-color 0.3s", cursor: "pointer" }} >Entertainment</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar