import React from 'react';
import Navbar from '../components/indexNavBar';

class Phishing extends React.Component {
    render(){
        return (
            <div className="Phishing">
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div>
                    Page de phishing
                </div>
            </div>
        );
    }
};

export default Phishing;