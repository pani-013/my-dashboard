import { color } from '@mui/system'
import React from 'react'
import './Middle.css'
import profilePhoto from '../../imgs/profileicon.png'


const Middle = () => {
  return (
    <div className="Middle">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="...">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="...navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="...">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="...">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="..." id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="...">Action</a></li>
            <li><a class="dropdown-item" href="...">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="...">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      <div className="bottom">
              <div className="noticeCard">  
                <h3>Notice</h3>
                <hr />
                <p className='activeAlert'>Please Acitvate Your Account!</p>
                <button className='activate'>Activate <i class='far fa-arrow-alt-circle-right'></i> </button>
              </div>
              <div className="profileData">
                    {/* bai = left, dai = right */}
                    <div className="bai">
                        <div className="profilePhoto">
                          {/* add image here */}
                        </div>
                        <div className="profileId">SAIS15360</div>
                        <br />
                        <div className="level">Noob</div>
                    </div>


                    <div className="dai">
                          <h1 className='name'>Sai Subrata Panigrahi</h1>
                          <div className="daiInfo">
                            <div className="leftcol">
                              <p> <i class='fas fa-user-alt'></i> Full Name: </p>
                              <p>  <i class='far fa-calendar-alt'></i> Date of Join: </p>
                              <p>  <i class='fas fa-id-badge'></i> User Status: </p>
                              <p> <i class='fas fa-house-user'></i> Address: </p>
                              <p>  📱 Phone:  </p>
                            </div>
                            <div className="rightcol">
                              <p>
                              Sai Subrata Panigrahi 
                              </p>
                              <p>
                              13/10/2022 
                              </p>
                              <p>
                              Active 
                              </p>
                              <p>
                              Bbhubaneshwar 
                              </p>
                              <p>
                              8919406098
                              </p>
                            </div>
                          </div>
                    </div>
              </div>
      </div>
    </div>
  )
}

export default Middle