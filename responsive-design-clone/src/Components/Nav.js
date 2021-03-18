import React, {Component} from 'react';

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            options: 'closed'
        }
    }

    open = () => {
        if(this.state.options === 'closed'){
            this.setState({options: 'open'})
        }else{
            this.setState({options: 'closed'})
        }
    }


    render(){
        return (
            <nav>

                <button className='menu-button' onClick={this.open}>MENU</button>

                <ul className={this.state.options === 'closed' ? 'closed' : 'open'}>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>

                

            </nav>
        )
    }
}
export default Nav;