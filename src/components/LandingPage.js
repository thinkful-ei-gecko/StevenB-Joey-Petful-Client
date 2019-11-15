import React from 'react';

export default class LandingPage extends React.Component{
    render(){
        return (
            <section className='landing'>
                <h1> Petful! A place where you can adopt pets not based on merit but on your place in line</h1>
                <p>We have plenty of cats and dogs for you to choose</p>
                <button className='landingButton'>
                onClick={()=>{
            this.props.history.push('/adoption');
          }}
                </button>
            </section>
        )
    }
}