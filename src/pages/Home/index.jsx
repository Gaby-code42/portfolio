import React from 'react';
import CircleProgressBar from '../../components/ProgressBar';
import './style.scss'

const Home = () => {
  const circlesData = [
    { title: 'Html', percentage: 90 },
    { title: 'React', percentage: 75 },
    { title: 'Node.js', percentage: 70 },
    { title: 'MongoDb', percentage: 60 },
    { title: 'Javascript', percentage: 90 }
  ];

  return (
    <div className="home">
      <div className='description'>
        <h1 className='description__title'>DEVELOPPEUR <br/> WEB</h1>
        <h2 className='description__subtitle'> Je suis Raphaël Bonacina</h2>
        <p className='description__text'>
        Un développeur web fullstack passionné, spécialisé dans des technologies modernes comme React, JavaScript, Node.js, MongoDB, HTML, CSS et SCSS.
        Avec une approche centrée sur les méthodes agiles (Scrum, Kanban, Kaizen, Pomodoro), 
        je conçois des sites et applications performants, évolutifs et adaptés à vos besoins.
        Toujours curieux et en quête d’amélioration, 
        mon objectif est d’apprendre de nouveaux langages et de consolider mes acquis pour offrir des solutions innovantes.🚀                   
        👉 Explorez mon portfolio et contactez-moi pour vos projets !
        </p>
      </div>
      <div>
      <h2 className='skill__title'>Skills</h2>
      <div className="circles__container">
        {circlesData.map((circle, index) => (
          <div key={index} className="circles__wrapper">
            <h3 
            className='circles__name'
            >{circle.title}</h3>
            <CircleProgressBar percentage={circle.percentage} onChange={() => {}} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;