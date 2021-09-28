import React from 'react';
import Navbar from '../components/indexNavBar';

class Scan extends React.Component {
    render(){
        return (
            <div className="Phishing">
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div>
                    Page de Scan
                </div>
            </div>
        );
    }
};

export default Scan;