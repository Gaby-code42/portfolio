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
      <div>
        <p>Je suis Raphaël Bonacina</p>
        <h1>DEVELOPPEUR FULLSTACK</h1>
        <p>
          lit, to vollaut doluptat anis simporem as solupta temquaere doluptatium et laborep udandigenia
          culparc hicitatur aliberiae volori corem dolest, cust et ad eictatiaessi quam restem sima sam
          ipitatibusae que quatesse iur, sit quid que pro beriasped mi, tem fuga. Pa as sitiis am que vel is
          re, ut vero esequia cum volorum as eligende cum voluptior modigento voloriat quam fugiatinctur
          aut lanim enis delendem velibusa elluptatque.</p>
           </div>
      <div>
      <h2>Skills</h2>
      <div className="circles-container">
        {circlesData.map((circle, index) => (
          <div key={index} className="circle-wrapper">
            <h3>{circle.title}</h3>
            <CircleProgressBar percentage={circle.percentage} onChange={() => {}} />
          </div>
          
      
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;