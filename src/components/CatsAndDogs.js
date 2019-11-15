import React, { Component } from 'react';
import { AnimalContext } from '../Context/context';
import { throwStatement } from '@babel/types';

export default class CatsAndDogs extends Component{
    state = {
        catIndex: 0,
        dogIndex: 0,
        catLength: (this.context.catsQ!==null)?this.context.catsQ.length:1,
        dogLength: (this.context.dogsQ!==null)?this.context.dogsQ.length:1,
        usersQ: [
          {
            name: 'Steven'
          },
          {
            name: 'Joey'
          },
          {
            name: 'Anna'
          },
          {
            name: 'Dave'
          },
          {
            name: 'You'
          }
        ]
    }
    static contextType = AnimalContext;

    componentDidMount() {
      setInterval(() => {
        this.userPosition()
      }, 10000);
    }

    userPosition() {
      if (this.state.usersQ.length > 1) {
        let newUserQ = this.state.usersQ.slice(1, this.state.usersQ.length);
        this.setState({
          usersQ: newUserQ
        })
      }
      return;
    }

    catsLeft=()=>{
        if(this.state.catIndex > 0) {
          this.setState({
            catIndex: this.state.catIndex-1
          })
        }
      }
    
      catsRight=()=>{
        if(this.state.catIndex < this.context.catsQ.length-1) {
          this.setState({
            catIndex: this.state.catIndex+1
          })
        }
      }
      dogsLeft=()=>{
        if(this.state.dogIndex > 0) {
          this.setState({
            dogIndex: this.state.dogIndex-1
          })
        }
      }
    
      dogsRight=()=>{
        if(this.state.index < this.context.dogsQ.length-1) {
          this.setState({
            dogIndex: this.state.dogIndex+1
          })
        }
      }
    renderCats =()=>{
  
        if(!this.context.catsQ){
            return (
                <h3> Surfing our databases interwebs in search of your future feline companion </h3>
            )} else if(!this.context.catsQ.length){
                return (
                    <div className="allAdopted">
          <h2>No Cats For You. How Very Unfortunate</h2>
          <h2>Thanks For Trying! Come Back Later Maybe?</h2>
        </div>
                
            )
    } else {
        const cat = this.context.catsQ[this.state.catIndex]
        return (
            <section className="animal">
              <header>
                
                <h2 className="animal-name">
                  <i className="left" onClick={this.catLeft}/>
                  {cat.name}
                  <i className="right" onClick={this.catRight} />
                </h2>
                <img src={cat.imageURL} alt={cat.imageDescription} />
              </header>
              <main>
                <h3>More about {cat.name}</h3>
                <ul className="animal-attributes">
                 
                  <li className="def-sex">{cat.sex}</li>
                  
                  <li className="def-age">{cat.age} years</li>
                 
                  <li className="def-breed">{cat.breed}</li>
                  
                  <li className="def-story">{cat.story}</li>
                </ul>
                <button 
                  className="adopter"
                  type="button"
                  disabled={this.state.usersQ[0].name !== 'You'}
                  onClick={() => this.context.adoptCat()}
                >
                  {
                    `Adoption in Process by: ${this.state.usersQ[0].name}`
                  }
                </button>
              </main>
            </section>
          )
    

        }
    }
    renderDogs =()=>{
        
            if(!this.context.dogsQ){
                return (
                    <h3> Surfing our databases interwebs in search of your future canine companion </h3>
                )} else if(!this.context.dogsQ.length){
                    return (
                        <div className="allAdopted">
              <h2>No Dogs For You. How Very Unfortunate</h2>
              <h2>Thanks For Trying! Come Back Later Maybe?</h2>
            </div>
                    
                )
        } else {
            const dog = this.context.dogsQ[this.state.dogIndex]
            return (
                <section className="animal">
                  <header>
                    
                    <h2 className="animal-name">
                      <i className="left" onClick={this.dogLeft}/>
                      {dog.name}
                      <i className="right" onClick={this.dogRight} />
                    </h2>
                    <img src={dog.imageURL} alt={dog.imageDescription} />
                  </header>
                  <main>
                    <h3>More about {dog.name}</h3>
                    <ul className="animal-attributes">
                     
                      <li className="def-sex">{dog.sex}</li>
                      
                      <li className="def-age">{dog.age} years</li>
                     
                      <li className="def-breed">{dog.breed}</li>
                      
                      <li className="def-story">{dog.story}</li>
                    </ul>
                    <button 
                      className="adopter"
                      type="button"
                      disabled={this.state.usersQ[0].name !== 'You'}
                      onClick={() => this.context.adoptDog()}
                    >
                      {
                        `Adoption in Process by: ${this.state.usersQ[0].name}`
                      }
                    </button>
                  </main>
                </section>
              )
        
    
            }
        }
        render(){
            let cat = <div>{this.renderCats()}</div>
            let dog = <div>{this.renderDogs()}</div>
            let users = this.state.usersQ.map(arr => arr.name + ', ')
            return(
                <>
                <h3>Adopters order: {users}</h3>
                <div className='Cat'>
                    {cat}
                </div>
                <div className='Dog'>
                    {dog}

                </div>
                </>
            )
        }
}