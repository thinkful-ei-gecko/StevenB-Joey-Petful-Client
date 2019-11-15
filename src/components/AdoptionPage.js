import React from 'react';
import CatsAndDogs from './CatsAndDogs'

export default class AdoptionPage extends React.Component{
    render() {
        return (
          <div className="animals">
            <div className="row">
              <CatsAndDogs />
            </div>
          </div>
        );
      }
}