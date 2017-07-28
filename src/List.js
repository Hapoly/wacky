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

                        
                    </div>
                </div>
             </div>
             </div>
        );
    }
}
export default List;