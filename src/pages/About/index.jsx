
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
            <h1 className='aboutContainer__title'> Mes Compétences</h1>
            <div className='aboutContainer__htmlCss'>
            <div className='aboutContainer__subContainer'>
            
        <h2>Intégration web avec HTML - CSS</h2>
        <p>
            Les compétences essentielles pour l'intégration web avec HTML et CSS incluent l'utilisation de Flexbox et CSS Grid,
            deux méthodes puissantes pour créer des mises en page flexibles et réactives.
            Il est également crucial de savoir implémenter une interface responsive,
            afin que le site s'adapte correctement à différents appareils et tailles d'écran,
            en utilisant HTML et CSS.
            Le responsive design est une approche incontournable pour garantir une expérience utilisateur optimale sur tous types de périphériques.
            Enfin, l'intégration du contenu doit être réalisée conformément à des maquettes Figma,
             en veillant à respecter les spécifications de conception et d'esthétique grâce à HTML et CSS..
        </p>
            </div>
            <img src={PngHtml} alt='logo html' className='aboutContainer__img'></img>
            </div>
            <div className='aboutContainer__javascript'>
            <img src={PngJava} alt='logo java' className='aboutContainer__img'></img>
            <div className='aboutContainer__subContainer'> 
                <h3>Développement web avec JavaScript</h3>
                <p>
                Compétences pour développer des fonctionnalités dynamiques et interactives sur le web.
                <br/>
                <br/>
                Le développement avec JavaScript représente une compétence clé pour rendre un site interactif et dynamique. 
                Les bases comprennent la manipulation des éléments du DOM (Document Object Model),
                ce qui permet de modifier le contenu, le style et la structure d'une page en temps réel.
                Une connaissance approfondie de la gestion des événements utilisateurs avec JavaScript est également cruciale pour répondre aux actions des visiteurs,
                comme les clics ou les saisies dans des formulaires. En outre, il est important de maîtriser l'utilisation de modules,
                promesses, async/await, et les nouvelles fonctionnalités de JavaScript comme les classes et les destructurations,
                qui facilitent l'écriture de code propre et efficace.
                La manipulation des formulaires avec JavaScript est aussi essentielle pour récupérer et valider les données soumises par les utilisateurs.
                Enfin, l'utilisation de requêtes API avec fetch permet d'interagir avec des services externes pour récupérer et afficher des données en temps réel.
                </p>
            </div>
            </div>
            <div className='aboutContainer__react'>
            <div className='aboutContainer__subContainer'>
            <h2>React</h2>
        <p>
            Compétences nécessaires pour maîtriser React et développer des interfaces utilisateur dynamiques et réactives.
            <br/>
            <br/>
            Le développement avec React est crucial pour construire des applications web interactives et performantes.
            Il est important de comprendre comment créer des hooks personnalisés comme useState, useEffect, et useRef,
            pour gérer l'état et les effets secondaires dans les composants React.
            La configuration de la navigation entre les différentes pages de l'application à l'aide de React Router est également essentielle pour une expérience utilisateur fluide.
            Pour les projets React, il est primordial de savoir initialiser une application avec Create React App ou d'autres outils modernes,
            tout en maîtrisant l'intégration de bibliothèques externes et l'optimisation des performances.
            La gestion du style avec des outils comme Sass et la connaissance des bonnes pratiques dans l'utilisation des composants
            React sont également essentielles pour construire des interfaces cohérentes et maintenables.
        </p>
            </div>
            <img src={PngReact} alt='logo react' className='aboutContainer__img'></img>

            </div>
            <div className='aboutContainer__nodeJs'>
            <img src={PngNode} alt='logo node.js' className='aboutContainer__img'></img>
            <div className='aboutContainer__subContainer'>
            <h3>Développement du back-end avec Node.js</h3>
        <p>
            Compétences pour concevoir et gérer le back-end d’une application web avec Node.js.
            <br/>
            <br/>
            Le développement back-end avec Node.js permet de créer des applications serveur robustes et évolutives. 
            La maîtrise de Node.js commence par la compréhension de l'installation de bibliothèques et de modules via NPM et Yarn,
            ainsi que de l'implémentation d'une API REST pour la communication entre le serveur et le client.
            Le développement d'une logique métier avec des opérations CRUD (création, lecture, mise à jour, suppression) et
            la gestion de l'authentification via JWT (JSON Web Tokens) sont des compétences importantes pour garantir la sécurité des applications.
            La gestion des données avec des bases de données NoSQL comme MongoDB ou relationnelles, et le stockage sécurisé des données, est également essentielle.
            Enfin, il est important d'implémenter des fonctionnalités comme l'envoi d'e-mails ou le cryptage des mots de passe pour renforcer la sécurité de l'application.
        </p>
 
            </div>
            </div>
            <div className='aboutContainer__dev'>
            <div className='aboutContainer__subContainer'>
            <h2>Optimisation et débug</h2>
        <p>
            Techniques pour améliorer les performances des sites web et identifier les problèmes.
            <br/>
            <br/>
            L'optimisation des performances et le débogage d'un site web sont des compétences essentielles pour garantir une expérience utilisateur fluide et efficace.
            Il est important de savoir comment optimiser les performances d'un site web en réduisant le temps de chargement,
            en optimisant les images et en minimisant les fichiers JavaScript et CSS. Le débogage avec les Chrome DevTools est également indispensable,
            car cet outil permet d'inspecter, de tester et de diagnostiquer des problèmes sur un site. 
            En parallèle, rédiger un cahier de recette pour tester un site garantit que toutes les fonctionnalités sont correctement implémentées et fonctionnelles avant la mise en production.
            Il est aussi important de posséder des connaissances intermédiaires en SEO (Search Engine Optimization), pour optimiser la visibilité du site sur les moteurs de recherche.
            Les compétences en accessibilité web sont essentielles pour rendre le site accessible à tous les utilisateurs, y compris ceux en situation de handicap.
            Plusieurs outils d'accessibilité et d'optimisation de performances sont utilisés pour tester et améliorer ces aspects, comme :</p>
        <ul>
            <li>Wave, qui permet de tester l'accessibilité d'un site.</li>
            <li>Lighthouse, pour évaluer les performances, l'accessibilité et le SEO.</li>
            <li>Axe, un autre outil pour tester l'accessibilité.</li>
            <li>Colour contrast analyzer, pour vérifier la lisibilité des couleurs.</li>
            <li>Google Keyword Planner et KWFinder, utilisés pour la recherche de mots-clés et l'optimisation du contenu.</li>
            <li>Google Search Console, qui permet de suivre les performances SEO et les erreurs de site.</li>
        </ul>
        <h2>Gestion de projet et outils de développeurs</h2>
        <p>
            Outils et méthodes pour gérer efficacement un projet web et suivre son déroulement.
        <br/>
        <br/>
        La gestion de projet web est cruciale pour assurer le bon déroulement des tâches et l'atteinte des objectifs.
        Pour cela, plusieurs outils et méthodes permettent de suivre efficacement le projet et de coordonner les efforts des développeurs.
        Il est important de pouvoir organiser le travail, définir les priorités et communiquer au sein de l’équipe.
        Les compétences suivantes sont essentielles dans ce domaine :
        <ul>
            <li>Suivi du projet avec des outils comme Miro, Notion et l'utilisation d'un Kanban.</li>
            <li>Application de méthodes agiles telles que SCRUM, Kaizen et Pomodoro pour une gestion du temps et une productivité accrues.</li>
            <li>Rédaction des spécifications techniques basées sur les besoins fonctionnels du projet.</li>
            <li>Découpage des fonctionnalités en tâches détaillées pour une mise en œuvre plus simple.</li>
            <li>Présentation de la solution technique pour valider les choix avec les parties prenantes.</li>
            <li>Mise en place d'une veille technologique pour rester à jour sur les dernières innovations.</li>
            <li>Versionnage avec Git et GitHub, un outil essentiel pour gérer les versions du projet.</li>
            <li>Installation d’un environnement de développement front-end, une étape clé pour démarrer le projet de manière structurée.</li>
            <li>Utilisation de Slack pour assurer une communication fluide au sein de l’équipe de développement.</li>
        </ul>
        </p>
            </div>
            <img src={PngDev} alt='logo node.js' className='aboutContainer__img'></img>
            </div>

        </div>
    )
}

export default About