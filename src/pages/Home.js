import React from 'react';
import Navbar from '../components/indexNavBar';
import '../styles/index.scss';

class Home extends React.Component {
    render(){
        return (
            <div className="test">
                <div className="navbar">
                    <Navbar></Navbar>
                </div>
                <div>
                    <div className="test">P4 Principaux types d’hameçonnage :</div><br />
                    
                    <div className="tt">Hameçonnage « Spray and Pray »</div><br />

                    Connu sous le nom d’hameçonnage trompeur, le « spray and pray » est la forme la plus ancienne et la plus primitive de l’hameçonnage. <br />
                    Les spécialistes de l’hameçonnage utilisent cette technique pour envoyer un lot de courriels notés « urgent » dans lesquels ils demandent à la victime potentielle de mettre leur mot de passe PayPal à jour ou saisir leurs données personnelles pour toucher un gain de loterie.<br />
                    Ces messages contiennent généralement des liens vers de fausses pages de connexion. Lorsque la victime saisit ses identifiants dans les formulaires falsifiés, ceux-ci sont immédiatement enregistrés sur un serveur situé dans un autre lieu, auquel le pirate a accès.<br /><br />
 

                    Spear Phishing<br />
                    Le « spear phishing » est bien plus sophistiqué que l’hameçonnage par tromperie, pour la simple raison qu’il est personnalisé.<br />
                    Plutôt que d’envoyer un message général, les escrocs ciblent des organismes, groupes ou même individus spécifiques dans le but d’obtenir leurs informations personnelles.<br />
                    Ils recueillent leurs noms, adresses e-mail et autres informations confidentielles sur des réseaux sociaux tels que LinkedIn ou dossiers e-mail piratés.<br />
                    Ce type d’hameçonnage cible principalement les entreprises et organisations, raison pour laquelle les e-mails d’hameçonnage sont quelque peu différents des e-mails trompeurs.<br />
                    Bien qu’ils soient rédigés sur le même principe, ils contiennent généralement de fausses demandes de renseignement ou factures de partenaires commerciaux.<br />
                    Les spécialistes de l’hameçonnage peuvent prétendre qu’ils ont joint un document important au message et demandent à la victime de le télécharger sur son ordinateur.<br />
                    Une fois le fichier téléchargé, le fichier installe un maliciel qui observe discrètement leur activité et recueille leurs informations personnelles.<br /><br />
 
                    CEO Phishing<br />
                    Le « CEO phishing » est une forme d’escroquerie en ligne très sophistiquée qui peut aussi prendre beaucoup de temps au pirate. <br />
                    Les cybercriminels ciblent les employés des services des ressources humaines ou finance d’une organisation et se font passer soit pour le PDG de la société ou autres cadres supérieurs.<br /> 
                    Ils correspondent avec leur cible et établissent progressivement une relation de confiance.<br />
                    Au bout de quelque temps, le pirate demande soudainement à sa cible de lui envoyer des informations personnelles concernant les employés ou, plus fréquemment, de transférer des fonds sur un compte défini.<br /> 
                    Dans la majorité des cas, ils déclarent avoir besoin de ces fonds pour un nouveau contrat et stipulent que le virement est très urgent.<br /> 
                    Aussi aberrant que cela puisse paraître, des entreprises situées dans le monde entier ont perdu plus de 5 milliards de dollars suite à des arnaques de type CEO phishing.<br /><br />
                    
                    Hameçonnage par hébergement de fichier<br />
                    Les services d’hébergement en ligne tels que Dropbox et Google Drive sont utilisés par de nombreuses personnes pour sauvegarder leurs fichiers et y accéder et les partager facilement.<br /> 
                    Les pirates spécialistes de l’hameçonnage le savent et tentent de compromettre les identifiants de leurs victimes.<br /> 
                    Le principe de l’arnaque est très similaire à l’hameçonnage par tromperie utilisant de fausses pages de connexion.<br /> 
                    Mais au lieu de rechercher quelque chose de spécifique, les pirates cherchent à accéder aux fichiers que leurs victimes ont sauvegardés en ligne pour recueillir toutes les informations importantes qu’ils pourront y trouver.<br />

                </div>
            </div>
        );
    }
};

export default Home;