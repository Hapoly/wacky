import React, { Component } from 'react';
const green = '#39D1B4';
const yellow = '#FFD712';
class Card extends Component {
 constructor(props){
    super(props);
    this.state = { color:"#ffff"};
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor(color) {
    // const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: color});
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
                                        <select className="custom-select" >
                                            <option selected>choose your favorite background Color</option>
                                            <option  onClick={this.changeColor.bind(this , green)}>pink</option>
                                            <option color="#FFFF00" onClick={this.changeColor}>yellow</option>
                                            <option color="#335BFF" onClick={this.changeColor}>blue</option>
                                        </select>
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
                             

                            </div>
                    </div>
                 </div> 
                 </div>
            </div>
        );
    }
}
export default Card;