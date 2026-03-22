import React from 'react';
import CircleProgressBar from '../../components/ProgressBar';
import './style.scss'

const Home = () => {
  const circlesDataFront = [
    { title: 'Html', percentage: 90 },
    { title: 'React', percentage: 75 },
    { title: 'Javascript', percentage: 90 }
  ];
  const circlesDataBack =[ 
    { title: 'Node.js', percentage: 60}
  ]
  const circlesDataDesign = [
    { title: 'figma', percentage:60 }
  ]
  const circlesDataOther = [
     { title : 'Git & GitHub',percentage: 90 },
     { title : 'MongoDb', percentage: 70}
  ]

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
      <h2 className='skill__title'>Skills</h2>
      <div>
      <h3>Front-end</h3>
      <div className="circles__container">
        {circlesDataFront.map((circle, index) => (
          <div key={index} className="circles__wrapper">
            <h4 
            className='circles__name'
            >{circle.title}</h4>
            <CircleProgressBar percentage={circle.percentage} onChange={() => {}} />
          </div>
        ))}
      </div>
      <h3>Back-end</h3>
      <div className="circles__container">
        {circlesDataBack.map((circle, index) => (
          <div key={index} className="circles__wrapper">
            <h4 
            className='circles__name'
            >{circle.title}</h4>
            <CircleProgressBar percentage={circle.percentage} onChange={() => {}} />
          </div>
        ))}
      </div>
      </div>
      <h3>Design</h3>
      <div className="circles__container">
        {circlesDataDesign.map((circle, index) => (
          <div key={index} className="circles__wrapper">
            <h4 
            className='circles__name'
            >{circle.title}</h4>
            <CircleProgressBar percentage={circle.percentage} onChange={() => {}} />
          </div>
        ))}
      </div>
      <h3>Others</h3>
      <div className="circles__container">
        {circlesDataOther.map((circle, index) => (
          <div key={index} className="circles__wrapper">
            <h4 
            className='circles__name'
            >{circle.title}</h4>
            <CircleProgressBar percentage={circle.percentage} onChange={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;