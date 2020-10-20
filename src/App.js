import React, { Component, Fragment } from "react";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import FooterComponet from "./Components/FooterComponet/Footer"
import TodoInput from "./Components/TodoComponent/TodoInput";
import TodoList from "./Components/TodoComponent/TodoList";
import { v4 as uuidv4 } from 'uuid';


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            items:[],
            id:uuidv4(),
            item:'',
            editTodo:false,
        };
    }


    //form handleChange--updation

    handleChange =(e) =>{
        this.setState({ item : e.target.value});
    };
    //form handleSubmit--change into uncontrolled into controlled
   handleSubmit =(e) =>{
       e.preventDefault();
       let newItem ={
           id:this.state.id,
           item:this.state.item,

       }
    
     this.setState({
         items:[...this.state.items,newItem],
         id:uuidv4(),
         item:"",
         editTodo:false,
     });
  
    };
    //handle delete functionality

    handleDelete =(id) =>{
        let filterContent =this.state.items.filter((item) => item.id !==id);
        this.setState({items:filterContent});
    }
    //handle Edit functionalty 

    editTodo =(id) =>{
        let editContent = this.state.items.filter((item) => item.id !==id);
        let selectedItem =this.state.items.find((item) => item.id !==id);
        this.setState({
            items:editContent,
            item:selectedItem.item,
            id:id,
            editTodo:true,
        });
    
    };

    render(){
        console.log(this.state.items);
        return(
        <Fragment>
            <header id="headerBlock">
            <HeaderComponent />
            </header>

            <main className="container">
                <TodoInput item={this.state.item}
                 handleChange={this.handleChange}
                 handleSubmit={this.handleSubmit}
                 editTodo ={this.state.editTodo}/>
                <TodoList  items={this.state.items} 
                handleDelete={this.handleDelete}
                handleEdit={this.editTodo}
                />
            
            </main>
            <hr className="hr my-2" />
            <footer className="container">
                <p>
                    <FooterComponet/>
                </p>
               </footer>
                    </Fragment>
                );
            
       
        
    }

}

export default App;