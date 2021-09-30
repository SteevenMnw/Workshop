import React from 'react';
import Navbar from '../components/indexNavBar';
import '../styles/index.scss';

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
        marginLeft: 500,
        fontSize: 40,
        marginBottom: 70
    },
    ttitre:{
        fontSize: 30,
        marginBottom: 50
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
  
class Home extends React.Component {
    
    render(){
        return (
            <div style={styles.taff}>
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div style={styles.texte}>

                    <div style={styles.titre} >
                        <b>Tout savoir sur le phishing</b>
                    </div><br />

                    <div style={styles.ttitre}>
                        <b>4 Principaux types d’hameçonnage :</b>
                    </div>
                    
                    <div style={styles.titre_small}>
                        <b>Hameçonnage « Spray and Pray »</b>
                    </div><br />

                    <div style={styles.text}>
                        Connu sous le nom d’hameçonnage trompeur, le « spray and pray » est la forme la plus ancienne et la plus primitive de l’hameçonnage. <br />
                        Les spécialistes de l’hameçonnage utilisent cette technique pour envoyer un lot de courriels notés « urgent » dans lesquels ils demandent à la victime potentielle de mettre leur mot de passe PayPal à jour ou saisir leurs données personnelles pour toucher un gain de loterie.<br />
                        Ces messages contiennent généralement des liens vers de fausses pages de connexion. Lorsque la victime saisit ses identifiants dans les formulaires falsifiés, ceux-ci sont immédiatement enregistrés sur un serveur situé dans un autre lieu, auquel le pirate a accès.
                    </div><br /><br />
 

                    <div style={styles.titre_small}>
                        <b>Spear Phishing</b>
                    </div><br />

                    <div style={styles.text}>
                        Le « spear phishing » est bien plus sophistiqué que l’hameçonnage par tromperie, pour la simple raison qu’il est personnalisé.<br />
                        Plutôt que d’envoyer un message général, les escrocs ciblent des organismes, groupes ou même individus spécifiques dans le but d’obtenir leurs informations personnelles.<br />
                        Ils recueillent leurs noms, adresses e-mail et autres informations confidentielles sur des réseaux sociaux tels que LinkedIn ou dossiers e-mail piratés.<br />
                        Ce type d’hameçonnage cible principalement les entreprises et organisations, raison pour laquelle les e-mails d’hameçonnage sont quelque peu différents des e-mails trompeurs.<br />
                        Bien qu’ils soient rédigés sur le même principe, ils contiennent généralement de fausses demandes de renseignement ou factures de partenaires commerciaux.<br />
                        Les spécialistes de l’hameçonnage peuvent prétendre qu’ils ont joint un document important au message et demandent à la victime de le télécharger sur son ordinateur.<br />
                        Une fois le fichier téléchargé, le fichier installe un maliciel qui observe discrètement leur activité et recueille leurs informations personnelles.
                    </div><br /><br />
 
                    <div style={styles.titre_small}>
                        <b>CEO Phishing</b>
                    </div><br />

                    <div style={styles.text}>
                        Le « CEO phishing » est une forme d’escroquerie en ligne très sophistiquée qui peut aussi prendre beaucoup de temps au pirate. <br />
                        Les cybercriminels ciblent les employés des services des ressources humaines ou finance d’une organisation et se font passer soit pour le PDG de la société ou autres cadres supérieurs.<br /> 
                        Ils correspondent avec leur cible et établissent progressivement une relation de confiance.<br />
                        Au bout de quelque temps, le pirate demande soudainement à sa cible de lui envoyer des informations personnelles concernant les employés ou, plus fréquemment, de transférer des fonds sur un compte défini.<br /> 
                        Dans la majorité des cas, ils déclarent avoir besoin de ces fonds pour un nouveau contrat et stipulent que le virement est très urgent.<br /> 
                        Aussi aberrant que cela puisse paraître, des entreprises situées dans le monde entier ont perdu plus de 5 milliards de dollars suite à des arnaques de type CEO phishing.
                    </div><br /><br />
                    
                    <div style={styles.titre_small}>
                        <b>Hameçonnage par hébergement de fichier</b>
                    </div><br />

                    <div style={styles.text}>
                        Les services d’hébergement en ligne tels que Dropbox et Google Drive sont utilisés par de nombreuses personnes pour sauvegarder leurs fichiers et y accéder et les partager facilement.<br /> 
                        Les pirates spécialistes de l’hameçonnage le savent et tentent de compromettre les identifiants de leurs victimes.<br /> 
                        Le principe de l’arnaque est très similaire à l’hameçonnage par tromperie utilisant de fausses pages de connexion.<br /> 
                        Mais au lieu de rechercher quelque chose de spécifique, les pirates cherchent à accéder aux fichiers que leurs victimes ont sauvegardés en ligne pour recueillir toutes les informations importantes qu’ils pourront y trouver.
                    </div><br /> <br /> <br /> <br /> <br /> <br />
                
                    <div style={styles.ttitre}>
                        <b>Exemple d’entreprises attaqués par phishing</b>
                    </div><br /> 

                    <ul>
                        <li style={styles.list}>EasyJet :</li>
                            <div style={styles.text_list}>
                                Le secteur du tourisme fait partie des cibles privilégiées des cybercriminels. Dans la série des fuites de données des compagnies aériennes (british Airways en 2018 et Airbus, début 2019), EasyJet n’a pas été épargné.<br/>
                                Source: <a href="https://avantdecliquer.com/blog/easyjet-cyberattaque-phishing/" rel="noreferrer" target="_blank">Cyberattaque par phishing chez EasyJet</a>
                            </div><br /><br /><br />

                        <li style={styles.list}>Lise Charmel :</li>
                    
                        <div style={styles.text_list}>
                            Selon les investigations menées depuis l’étranger par la police scientifique, l’origine de cette cyberattaque envers Lise Charmel serait, hélas sans surprise, un e-mail de phishing, type d’attaque la plus fréquemment répandue, l’humain restant la faille la plus vulnérable d’une organisation.
                            “un clic sur une boîte e-mail privée entre midi et deux,
                            sur un poste des plus banals”, déplore le Directeur Général.
                            Un clic qui a permis l’intrusion d’un logiciel malveillant de type rançongiciel. Celui-ci chiffre et prend en otage l’ensemble des données d’une organisation en échange d’une clé de déchiffrement obtenue, bien évidemment, contre le paiement d’une grosse somme d’argent en bitcoins.<br/>
                            Source: <a href="https://avantdecliquer.com/blog/lise-charmel-cyberattaque-ransomware-phishing-lyon/" rel="noreferrer" target="_blank">Avant de Cliquer - Une cyberattaque paralyse le Groupe Lise Charmel</a>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Home;