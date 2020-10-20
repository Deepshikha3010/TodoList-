import React, { Component, Fragment } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {handleChange, handleSubmit,item,editTodo} =this.props;
        console.log(handleChange,handleSubmit,item,editTodo);
        return ( 
            <Fragment>
               <section className="card col-md-9 mx-auto my-2">
                 <article className="card-body">
                     <form onSubmit={handleSubmit}>
                         <div className="form-group-inline">
                             <label htmlFor="item">Add Item</label>
                         <input 
                         type="text"
                         className="form-control"
                         name="item"
                         placeholder="add Item"
                         id="item"
                         required
                         onChange={handleChange}
                         value={item}
                         />
                         <div className="form-group-inline">
                             <button className={
                             editTodo ? "btn btn-dark my-4 float-right" :
                             "btn btn-success my-4 float-right"}>
                                    {editTodo ?"Edit Item" :"Add Item"}
                             </button>

                         </div>
                         </div>
                     </form>

                 </article>
               </section>
            </Fragment>
         );
    }
}
 
export default TodoInput;