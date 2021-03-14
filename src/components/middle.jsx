import React from 'react';
import './middle.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function Middle(){
    return(
        <div>
            <div class="card-deck">
              <div class="card bg-dark text-white">
                <img class="card-img" src="https://source.unsplash.com/random" alt="Card image" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img class="card-img" src="https://source.unsplash.com/random" alt="Card image" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img class="card-img" src="https://source.unsplash.com/random" alt="Card image" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img class="card-img" src="https://source.unsplash.com/random" alt="Card image" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
              <div class="card bg-dark text-white">
                <img class="card-img" src="https://source.unsplash.com/random" alt="Card image" />
                <div class="card-img-overlay">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>
            </div>

            <div className="mindpost">
                <div class="container">
                    <div className="firstline">
                        <div className="avatar">
                          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
                        </div>
                        <div className="mind">
                          <input type="text" className="mindInput" placeholder="What's on your mind, Harshit?" />
                        </div>
                        <hr className="hline"></hr>
                    </div>
                    <div className="buttonline">
                        <div className="mindbuttons">
                          <Button
                            variant="contained"
                            color="secondary"
                            className="mindbutton"
                          >
                            Delete
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            className="mindbutton"
                          >
                            Delete
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            className="mindbutton"
                            style={{margin: "5px"}}
                          >
                            Delete
                          </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Middle;