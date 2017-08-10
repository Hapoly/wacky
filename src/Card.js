import React, { Component } from 'react';
const green = '#39D1B4';
const yellow = '#FFD712';
class Card extends Component {
 constructor(props){
    super(props);
  }
  state = {
    color : "#FFF"
  }
  changeColor = (event) => {
    this.setState({
      color : event.target.value
    });
  }
  render() {
    return (
      <div className="container">    
        <div className="top-buffer row">
          <div className="col-md-8 col-sm-12 offset-md-2">
            <div className="card" style={{background: this.state.color}}>
              <div className="card-block">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="add..." />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Add!</button>
                      </span>
                    </div>
                    <fieldset className="form-group top-buffer">
                    <div className="form-check ">
                      <div className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/> 1
                      </div>
                    </div>
                      <div className="form-check ">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/> 2
                        </label>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-12 pull-right">
                    <select className="custom-select" onChange={this.changeColor} >
                      <option value="#FFF" onClick={this.changeColor}>
                        {this.state.color == "#FFF"? <i className="fa fa-check" aria-hidden="true"></i> : ''}white
                      </option>
                      <option value="#FFFF00" onClick={this.changeColor}>
                        {this.state.color == "#FFFF00"? <i className="fa fa-check" aria-hidden="true"></i> : ''}yellow
                      </option>
                      <option value="#335BFF" onClick={this.changeColor}>
                        {this.state.color == "#335BFF"? <i className="fa fa-check" aria-hidden="true"></i> : ''}blue
                      </option>
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