import React, { Component } from 'react';
const green = '#39D1B4';
const yellow = '#FFD712';
class Card extends Component {
 constructor(props){
    super(props);
  }
  state = {
    cardColor : "#FFF" ,
    textColor:"#000000",
    tasks : [
      {
        title:"title-1",
        status : false ,
      },
      {
        title:"title-2",
        status : true ,
      }
    ]
  }
  changeColor = (event) => {
    this.setState({
      cardValue: event.target.value,
     
      if ( cardValue = "1" ){
        this.setState({
            cardColor : "#FFF",
            textColor :"#000000"
        });
      }
     
     
    });
  }
  generateTask = (t) =>{
    if (t.status){
return (
            <div className="form-check ">
              <div className="form-check-label">
                <input className="form-check-input" checked type="checkbox" value="option1"/>
                {t.title}
              </div>
            </div>
    );
    }else{
return (
            <div className="form-check ">
              <div className="form-check-label">
                <input className="form-check-input" type="checkbox" value="option1"/>
                {t.title}
              </div>
            </div>
    );
    }
  
    
  }
  addItemtoList = (event) =>{
    var tasks = this.state.tasks;
    tasks.push ({
      title:document.getElementById('taskinput').value,
        status : false ,
    });
      this.setState({
        tasks: tasks
      });
  }
  render() {
    return (
      <div className="container">    
        <div className="top-buffer row">
          <div className="col-md-8 col-sm-12 offset-md-2">
            <div className="card" style={{background: this.state.cardColor}}>
              <div className="card-block">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-group">
                    <input type="text" className="form-control" id="taskinput" placeholder="add..." />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.addItemtoList} type="button"><i className="fa fa-check" aria-hidden="true"></i>Add!</button>
                      </span>
                    </div>
                    <fieldset className="form-group top-buffer">
                    {this.state.tasks.map(this.generateTask)}
                    </fieldset>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-12 pull-right" style={{color : this.state.textColor}}>
                    <select className="custom-select" onChange={this.changeColor} >
                      <option value="1" onClick={this.changeColor}>white</option>
                      <option value="2" onClick={this.changeColor} style={{background :"#eeff41"}}>yellow</option>
                      <option value="3" onClick={this.changeColor} style={{background :"#f50057"}}>pink</option>
                      <option value="4"  onClick={this.changeColor} style={{background :"#1976d2"}}>blue</option>
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