import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
             <div className="top-buffer row">
                <div className="row">
                    <div className="col s12 m4 offset-m4">
                        <div className="row">
                            <input type="text" id="myInput" placeholder="Title..."/>
                                 <button className="btn">Add</button>
                        </div>
                        <div className="switch">
                            <label>
                            Off
                            <input type="checkbox"/>
                            <span className="lever"></span>
                            On
                            </label>
                        </div>

 
                    <div className="switch">
                        <label>
                        Off
                        <input  type="checkbox"/>
                        <span className="lever"></span>
                        On
                        </label>
                    </div>
 <form action="#">
    <p>
    <input className="with-gap" name="group3" type="radio" id="test5"/>
    <label for="test5">Red</label>
  </p>
    <p>
      <input name="group1" type="radio" id="test2" />
      <label for="test2">Yellow</label>
    </p>
    <p>
      <input className="with-gap" name="group1" type="radio" id="test3"  />
      <label for="test3">Green</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test4" disabled="disabled" />
      <label for="test4">Brown</label>
    </p>
  </form>
                    </div>
                </div>
             </div>
             </div>
        );
    }
}
export default List;