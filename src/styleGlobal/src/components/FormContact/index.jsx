import React, { useState } from "react"
import './style.scss'

const FormulaireContact = () => {
    const [formData, setFormData] = useState({
        nom:'',
        prenom:'',
        email:'',
        message:'',
    })
    console.log("FormData envoyé:", formData);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/api/contact', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            alert("Votre message a été envoyé !")
            setFormData({
                nom:'',
                prenom:'',
                email:'',
                message:'',
            })
        } else {
            alert("Erreur lors de l'envoi. Veuillez réessayer.");
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <div className="form__names">
            <div className="formulaire">
              <label className="formulaire__label">Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="formulaire__input"
              />
            </div>
            <div className="formulaire">
              <label className="formulaire__label">Prénom</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="formulaire__input"
              />
            </div>
          </div>
          <div className="form__mails">
          <div className="formulaire">
            <label className="formulaire__label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="formulaire__input"
            />
          </div>
          <div className="formulaire">
            <label className="formulaire__label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="formulaire__input"
            />
          </div>
          </div>
    
          <button type="submit">Envoyer</button>
        </form>
      );
    };

    export default FormulaireContact;

