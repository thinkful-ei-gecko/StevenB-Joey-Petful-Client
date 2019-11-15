import React from 'react';
import { api } from '../config';

const AnimalContext = React.createContext({
 catsQ: null,
 dogsQ: null,
 adoptCat: () => {},
 adoptDog: () => {},
 fetchDogs: () => {},
 fetchCats: () => {},

})
export default AnimalContext

export class AnimalProvider extends React.Component {
    state = {
          catsQ: null,
          dogsQ: null
        }
        fetchCats=()=>{
            fetch(`${api}/cat/adopt`)
              .then(res => res.json())
              .then(res => {
                this.setState({
                  catsQ: res
                })
              })
          }
        fetchDogs=()=>{
            fetch(`${api}/dog/adopt`)
              .then(res => res.json())
              .then(res => {
                this.setState({
                  dogsQue: res
                })
              })
          }
        
        adoptDog=()=>{
            let dQ = this.state.dogsQ;
            
            this.setState({
              dogsQ: dQ
            });
            fetch(`${api}/dog/adopt`,{
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
            fetch(`${api}/cat/adopt`,{
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
                    <animalContext.Provider value ={value}>
                        {this.props.children}
                    </animalContext.Provider>
                )
            }
          }
        
      
}