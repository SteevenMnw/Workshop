import React, { useRef } from 'react';
import Navbar from '../components/indexNavBar';
import emailjs from 'emailjs-com';
import { TextField, Button } from "@material-ui/core";

var styles = {
    taff:{
        fontFamily: 'Calibri',
    },
    form:{
        marginLeft: 800,
        marginTop: 100
    },
    mail:{
        marginLeft: 68,
        fontSize: 25,
    },
    text:{
        marginTop: 40
    },
    button:{
        marginTop: 20,
        marginLeft: 33
    },
    juste:{
        marginTop: 100,
        marginLeft: 470,
        fontSize: 30,
        color: 'red'
    },
  };

const Phishing = () => {
    
    const form = useRef();

    const sendEmail = (e) => { 
        e.preventDefault();
        
        emailjs.sendForm('Outlook', 'workshop', e.target, 'user_a9ZBaY7tXcsFmai2suibD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }); 
          e.target.reset()
      };

    return (
        <div style={styles.taff}>
            <div className="navbar">
                <Navbar></Navbar>
            </div>
            <div style={styles.juste}>Testez votre entourage ! Il vous suffit juste de rentrer le mail du destinataire</div>
            <form ref={form} onSubmit={sendEmail}>
                <div style={styles.form}>
                    <TextField
                    style={styles.text}
                    label="Email"
                    variant="outlined"
                    type="text"
                    name="destinataire"
                    /><br/>
                    <Button
                    style={styles.button}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    value="Send"
                    >
                        Connexion
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Phishing;
