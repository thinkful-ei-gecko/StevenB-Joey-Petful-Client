import React, { Component } from 'react';
import { AnimalContext } from '../Context/context';

export default class CatsAndDogs extends Component{
    state = {
        index: 0,
        catLength: (this.context.catsQ!==null)?this.context.catsQue.length:1,
        dogLength: (this.context.dogsQ!==null)?this.context.dogsQue.length:1
    }
    static contextType = AnimalContext;
    catsLeft=()=>{
        if(this.state.index > 0) {
          this.setState({
            idx: this.state.index-1
          })
        }
      }
    
      catsRight=()=>{
        if(this.state.index < this.context.catsQ.length-1) {
          this.setState({
            idx: this.state.index+1
          })
        }
      }
      dogsLeft=()=>{
        if(this.state.index > 0) {
          this.setState({
            idx: this.state.index-1
          })
        }
      }
    
      dogsRight=()=>{
        if(this.state.index < this.context.dogsQ.length-1) {
          this.setState({
            idx: this.state.index+1
          })
        }
      }
    render(){
        if(this.context.catsQ===null){
            return (
                <h3> Surfing our databases interwebs in search of your future feline companion </h3>
            )} else if(!this.context.catsQ.length){
                return (
                    <div className="allAdopted">
          <h2>No Cats For You. How Very Unfortunate</h2>
          <h2>Thanks For Trying! Come Back Later Maybe?</h2>
        </div>
                
            )
        
    }

}