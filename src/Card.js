import React, { Component } from 'react';

class Card extends Component {
    background = (color) => {
      this.setState({
          color : color
      });
      console.log(color);
  }
    render() {
        return (
            <div className="container">    
              <div className="top-buffer row">
                    <div className="col-md-8 col-sm-12 offset-md-2">
                        <div className="card" style={{backgroundColor: this.setState.color }}>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-lg-12">
                                       <div className="input-group">
                                        <input type="text" className="form-control" placeholder="add..." />
                                        <span className="input-group-btn">
                                        <button className="btn btn-secondary" type="button">Add!</button>
                                        </span>
                                        </div>
                                        <select className="custom-select">
                                            <option selected>choose your favorite background Color</option>
                                            <option color="#e91e63">pink</option>
                                            <option color="#FFFF00">yellow</option>
                                            <option color="#335BFF">blue</option>
                                        </select>
                                    </div>
                                </div>
                             

                            </div>
                    </div>
                 </div> 
                 </div>
            </div>
        );
    }
}
export default Card;