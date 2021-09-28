import React from 'react';
import Navbar from '../components/indexNavBar';

class Fuked extends React.Component {
    render(){
        return (
            <div className="Home">
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div>
                    Tu t'es fait phisher
                </div>
            </div>
        );
    }
};
export default Fuked;