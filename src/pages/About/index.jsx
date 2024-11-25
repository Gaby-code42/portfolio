
import React from 'react';
import './style.scss'
import PngHtml from '../../assets/html-css-logo-png-png-image-873073.png'
import PngJava from '../../assets/JavaScript-Logo.png'
import PngReact from '../../assets/Image-Source-PlusPNG.com.png'
import PngNode from '../../assets/Node_logo_NodeJS.png'
import PngDev from '../../assets/pngwing.com.png'

function About (){
    return(
        <div className='aboutContainer'>
            <h2 className='aboutContainer__title'> Mes Compétences</h2>
            <div className='aboutContainer__htmlCss'>
            <div className='aboutContainer__subContainer'>
            
        <h3>Intégration web avec HTML - CSS</h3>
        <p>Compétences essentielles pour créer des interfaces web modernes, adaptatives et conformes aux maquettes.</p>
        <ul>
            <li>Utilisation de flexbox et CSS Grid</li>
            <li>Implémenter une interface responsive avec HTML et CSS</li>
            <li>Responsive design</li>
            <li>Intégrer du contenu conformément à une maquette Figma avec HTML et CSS</li>
        </ul>    
            </div>
            <img src={PngHtml} alt='logo html' className='aboutContainer__img'></img>
            </div>
            <div className='aboutContainer__javascript'>
            <img src={PngJava} alt='logo java' className='aboutContainer__img'></img>
            <div className='aboutContainer__subContainer'> 
                <h2>Développement web avec JavaScript</h2>
                <p>Compétences pour développer des fonctionnalités dynamiques et interactives sur le web.</p>
                <ul>
            <li>Récupérer les données utilisateurs via des formulaires</li>
            <li>Manipuler les éléments du DOM avec JavaScript</li>
            <li>Gérer les événements utilisateurs avec JavaScript</li>
            <li>Manipulation des formulaires</li>
            <li>ES6+ : destructuration, modules, promesses, async/await, classes, etc.</li>
            <li>Requêtes à une API : fetch</li>
            <li>Installation de bibliothèques et implantation dans du code React</li>
            <li>Gestion des dépendances avec Yarn et Npm</li>
                </ul>

            </div>
            </div>
            <div className='aboutContainer__react'>
            <div className='aboutContainer__subContainer'>
            <h2>React</h2>
        <p>Compétences nécessaires pour maîtriser React et développer des interfaces utilisateur dynamiques et réactives.</p>
        <ul>
            <li>Création de Hooks custom et natifs comme useState, useRef, useEffect</li>
            <li>Configurer la navigation entre les pages de l’application avec React Router</li>
            <li>Initialiser une application avec Create React App</li>
            <li>Développer des éléments de l’interface utilisateur avec des composants React</li>
            <li>Utilisation de différentes bibliothèques</li>
            <li>Gestion des requêtes pour une API REST</li>
            <li>Gestion du style avec Sass, Scss - Connaissance intermédiaire de Scss</li>
        </ul>
            </div>
            <img src={PngReact} alt='logo react' className='aboutContainer__img'></img>

            </div>
            <div className='aboutContainer__nodeJs'>
            <img src={PngNode} alt='logo node.js' className='aboutContainer__img'></img>
            <div className='aboutContainer__subContainer'>
            <h2>Développement du back-end avec Node.js</h2>
        <p>Compétences pour concevoir et gérer le back-end d’une application web avec Node.js.</p>
        <ul>
            <li>Implémenter un modèle logique de données conformément à la réglementation</li>
            <li>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
            <li>Stocker des données de manière sécurisée</li>
            <li>Implantation d’une API RESTful avec authentification</li>
            <li>Implantation de bibliothèques dans le back-end</li>
            <li>Implantation d’une API NoSQL type MongoDB</li>
            <li>Gestion des fichiers grâce à Multer, formatage des images avec Sharp, formatage des fichiers avec Puppeteer</li>
            <li>Sécuriser les routes grâce à JWT, cryptage des mots de passe utilisateurs avec Bcrypt</li>
            <li>Formulaire de contact, possible grâce à Nodemailer</li>
        </ul>
            </div>
            </div>
            <div className='aboutContainer__dev'>
            <div className='aboutContainer__subContainer'>
            <h2>Optimisation et débug</h2>
        <p>Techniques pour améliorer les performances des sites web et identifier les problèmes.</p>
        <ul>
            <li>Optimiser les performances d’un site web</li>
            <li>Débugger un site web grâce aux Chrome DevTools</li>
            <li>Rédiger un cahier de recette pour tester un site</li>
            <li>Connaissances intermédiaires en SEO</li>
            <li>Connaissances intermédiaires en accessibilité web</li>
            <li>Outils d’accessibilité et d’optimisation de performances :
                <ul>
                    <li>Wave</li>
                    <li>Lighthouse</li>
                    <li>Axe</li>
                    <li>Colour contrast analyzer</li>
                    <li>Google Keyword Planner</li>
                    <li>Google</li>
                    <li>KWFinder</li>
                    <li>Google Search Console</li>
                </ul>
            </li>
        </ul>
        <h2>Gestion de projet et outils de développeurs</h2>
        <p>Outils et méthodes pour gérer efficacement un projet web et suivre son déroulement.</p>
        <ul>
            <li>Suivre le déroulement du projet grâce à un outil de gestion projet
                <ul>
                    <li>Utilisation de Miro, Notion</li>
                    <li>Utilisation d'un Kanban</li>
                    <li>Appliquer des méthodes agiles comme SCRUM</li>
                    <li>Apprentissage de la méthode Kaizen et Pomodoro</li>
                </ul>
            </li>
            <li>Rédiger les spécifications techniques à partir de besoins fonctionnels</li>
            <li>Découper une fonctionnalité en tâches pour le développement</li>
            <li>Présenter la solution technique</li>
            <li>Mettre en place une méthode de veille technologique</li>
            <li>Versionner un projet avec Git et Github</li>
            <li>Installer un environnement de développement front-end</li>
            <li>Utilisation de Slack</li>
        </ul>
            </div>
            <img src={PngDev} alt='logo node.js' className='aboutContainer__img'></img>
            </div>

        </div>
    )
}

export default About