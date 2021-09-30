import React from 'react';
import Navbar from '../components/indexNavBar';

var styles = {
    taff:{
        fontFamily: 'Calibri',
    },
};

class Scan extends React.Component {
    render(){
        return (
            <div style={styles.taff}>
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