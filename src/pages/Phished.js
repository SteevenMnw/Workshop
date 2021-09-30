import React from 'react';
import Navbar from '../components/indexNavBar';

var styles = {
    taff:{
        fontFamily: 'Calibri',
    },
    texte:{
        marginTop: 80,
        marginLeft: 200
    },
    titre:{
        color: 'blue',
        marginLeft:  480,
        fontSize: 40,
        marginBottom: 70
    },
    ttitre:{
        fontSize: 30,
        marginBottom: 30
    },
    titre_small:{
        fontSize: 25,
        marginLeft: 80,
        marginTop: 50
    },
    list:{
        fontSize: 25
    },
    text:{
        fontSize: 20,
        wordSpacing: 4,
        marginRight: 450,
        lineHeight: 1.5
    },
    text_list:{
        fontSize: 20,
        wordSpacing: 4,
        marginRight: 400,
        marginLeft: 50,
        lineHeight: 1.5
    },
  };

class Phished extends React.Component {
    render(){
        return (
            <div style={styles.taff}>
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div style={styles.texte}>

                    <div style={styles.titre} >
                        <b>Tu viens de te faire phisher</b>
                    </div><br />

                    <div style={styles.text}>
                        Selon le FBI, le phishing était le type de cybercriminalité le plus courant en 2020 , et la fréquence des incidents de phishing a presque doublé, passant de 114 702 incidents en 2019 à 241 324 incidents en 2020.<br />
                        Entre 2015 et 2019, les attaques par usurpation d’emails professionnels ont coûté aux entreprises du monde entier plus de 26 milliards de dollars de pertes et au cours des 2 dernières années, le nombre d’attaques a augmenté de 100%.‎<br />
                        La plupart des entreprises comptent sur la protection de leur infrastructure de messagerie pour arrêter les attaques BEC. Ils le font en sécurisant leur domaine, en utilisant DMARC, DKIM et SPF, l’authentification par e-mail à deux facteurs, etc.‎<br />
                        Ces coûts peuvent être atténués par des politiques, des procédures, des technologies et des formations en matière de cybersécurité. Les plateformes d’intelligence artificielle peuvent faire économiser aux organisations 8,97 $ par enregistrement.<br />
                        RiskIQ estime que les entreprises du monde entier perdent 17 700 dollars par minute en raison d’attaques de phishing et que les grandes entreprises perdent 25 dollars par minute à cause de la cybercriminalité.
                    </div><br /><br /><br />

                    <div style={styles.ttitre}>
                        <b>Quelles précautions prendre pour éviter les attaques par hameçonnage ciblé ?</b>
                    </div><br /> 
                    
                    <div style={styles.text}>
                        Afin de protéger votre entreprise d'une attaque par hameçonnage ciblé, respectez ces quelques conseils et sensibilisez vos salariés à ces pratiques :
                    </div><br /> 

                    <ul>
                        <li style={styles.text_list}>
                            <b>Mettez votre système à jour.</b> Des mises à jour importantes sur d'éventuelles failles de sécurité peuvent en effet être installées par votre système d’exploitation.
                        </li><br />

                        <li style={styles.text_list}>
                            <b>Méfiez-vous des extensions de pièces jointes qui semblent douteuses</b> et <b>peuvent contenir des codes malveillants</b> (exemples : .pif ; .com ; .bat ; .exe ; .vbs ; .lnk etc.).
                        </li><br />

                        <li style={styles.text_list}>
                            <b>Utilisez un compte utilisateur plutôt qu’administrateur.</b> L’administrateur d’un ordinateur dispose d’un certain nombre de privilèges sur celui-ci, comme réaliser certaines actions ou accéder à certains fichiers cachés de votre ordinateur. Préférez l’utilisation d’un compte utilisateur, qui vous permet également d’effectuer vos tâches quotidiennes sans entrave.
                        </li><br />

                        <li style={styles.text_list}>
                            <b>Portez une attention toute particulière aux liens sur lesquels vous cliquez.</b> Une lettre ou caractère en trop ou en moins peut vous conduire vers un tout autre site web. Privilégiez la saisie des URL directement sur la barre d'adresses ainsi que les liens commençant par « https ».
                        </li><br />

                        <li style={styles.text_list}>
                            <b>Utilisez un antivirus ou un parefeu.</b> En informatique, le pare-feu permet de limiter un certain nombre de connexions entrantes et sortantes. Si malgré tout, le pirate trouve une faille dans votre ordinateur, un antivirus peut l’empêcher de nuire.
                        </li><br />

                        <li style={styles.text_list}>
                            <b>Utilisez le filtre contre le filoutage du navigateur internet.</b> La plupart des navigateurs existants proposent une fonctionnalité d’avertissement contre le filoutage. Ces fonctions aident à maintenir votre vigilance.
                        </li><br />

                        <li style={styles.text_list}>
                            <b>Utilisez un logiciel de filtre anti-pourriel ou les fonctionnalités de classement automatique en tant que spam de votre boite de réception</b> : même si ces filtrages ne sont pas exhaustifs, ils permettent de réduire le nombre de ces courriels.
                        </li><br />

                        <li style={styles.text_list}>
                            Télécharger notre logiciel permettant de vérifier la validité d'un lien, ce qui permet donc de savoir si le lien est fiable ou non.
                        </li><br />

                    </ul>
                </div>
            </div>
        );
    }
};
export default Phished;