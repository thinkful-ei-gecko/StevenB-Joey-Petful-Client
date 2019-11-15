import React from 'react';
import { REACT_APP_API } from '../config';

export const AnimalContext = React.createContext({
 catsQ: null,
 dogsQ: null,
 adoptCat: () => {},
 adoptDog: () => {},
 fetchDogs: () => {},
 fetchCats: () => {},

})

export class AnimalProvider extends React.Component {
    state = {
          catsQ: null,
          dogsQ: null
          
        }
        
        componentDidMount (){
         this.setState({catsQ: this.fetchCats()})
         this.setState({dogsQ: this.fetchDogs()})
        
        }
        fetchCats=()=>{
            fetch(`${REACT_APP_API}/cat/adopt`)
              .then(res => res.json())
              .then(res => {
                console.log(res)
                this.setState({
                  catsQ: res
                })
              })
              
          }
        fetchDogs=()=>{
            fetch(`${REACT_APP_API}/dog/adopt`)
              .then(res => res.json())
              .then(res => {
                console.log(res)
                this.setState({
                  dogsQ: res
                })
              })
              
          }
        
        adoptDog=()=>{
            let dQ = this.state.dogsQ;
            
            this.setState({
              dogsQ: dQ
            });
            fetch(`${REACT_APP_API}/dog/adopt`,{
              method: 'DELETE'
            })
            .then(res=>{
              if(res.ok) {
                console.log('Dog Adopted by You')        
              }
            })
            .catch(err=>{
              console.log('Error!', err);
            })
          }
          adoptCat=()=>{
            let cQ = this.state.catsQue;
            cQ[0].adopter = "Thinkful";
            this.setState({
              catsQ: cQ
            });
            fetch(`${REACT_APP_API}/cat/adopt`,{
              method: 'DELETE'
            })
            .then(res=>{
              if(res.ok) {
                console.log('Cat Adopted by Thinkful Student')        
              }
            })
          
            .catch(err=>{
              console.log('Error!', err);
            })
          }
            render(){
                const value = {
                    dogsQ: this.state.dogsQ,
                    catsQ: this.state.catsQ,
                    adoptCat: this.adoptCat,
                    adoptDog: this.adoptDog,
                    fetchCats: this.fetchCats,
                    fetchDogs: this.fetchDogs

                }
                return (
                    <AnimalContext.Provider value ={value}>
                        {this.props.children}
                    </AnimalContext.Provider>
                )
            }
          }
        
      
