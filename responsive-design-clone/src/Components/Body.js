import React, {Component} from 'react';

class Body extends Component {
    constructor(){
        super();
    }

    render(){
        return(

            <div className='body-stuff'>

                <h1 className='welcome'>Welcome To Our Studio!</h1>
                <h1 className='nice-to-meet-you'>IT'S NICE TO MEET YOU</h1>
                <button className='tell-me-more-button'>TELL ME MORE</button>

            </div>
        )
    }
}
export default Body;