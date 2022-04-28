import React from "react";

class ClassCount extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         count: 0
      }
      this.inctement = this.inctement.bind(this);
      this.decrement = this.decrement.bind(this);
      //Метод bind() создаёт новую функцию, которая при вызове устанавливает в 
      //качестве контекста выполнения this предоставленное значение
   }

   inctement(){
      this.setState({count: this.state.count + 1})
   }

   decrement(){
      this.setState({count: this.state.count + 1})
   }

   render(){
      return(
         <div className='box'>
            <h2>{this.state.count}</h2>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.inctement}>Inctement</button>
         </div>
      )
   }
}

export default ClassCount;