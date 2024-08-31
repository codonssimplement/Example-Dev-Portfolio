import React, { useState } from 'react';

import './App.css';
import logo from './images/logo.png'; 
import html from './images/html.png'; 
import node from './images/node.png'; 
import java from './images/java.png'; 
import python from './images/python.png'; 
import react from './images/react.png'; 
import js from './images/js.png'; 
import css from './images/css.png'; 
import aws from './images/aws.png'; 

import logofotter from './images/logoFotter.png'
import facebooksvg from './images/facebook.svg'
import instagramsvg from './images/instagram.svg'
import githubsvg from './images/github.svg'


import myProfil from './images/myProfil.png'; 
import PharmacieHome from './images/PharmacieHome.png';
import PharmacieConnexion from './images/PharmacieConnexion.png';
import PharmacieDashboard from './images/PharmacieDashboard.png';

function App() {

// Fonction pour envoyer les données au backend
const sendContactForm = async (contactData) => {
  const API_URL = 'http://localhost:4000/contact'; 
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du message');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const contactData = { name, email, subject, message };

  try {
    await sendContactForm(contactData);
    setSuccessMessage('Message envoyé avec succès !');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  } catch (error) {
    setErrorMessage('Erreur lors de l\'envoi du message.');
  }
};

  return (
    <div>
     
      <header>
        <a href="#">
        <img src={logo} alt="my_logo" className="h-12" />
        </a>
        <nav>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#section_about">A propos</a></li>
            <li><a href="#section_portfolio">Portfolio</a></li>
            <li><a href="#section_services">Services</a></li>
            <li><a href="#section_experiences">Experiences</a></li>
          </ul>
        </nav>
      </header>
  
      <section className="section_name">
        <div>
          <h1>Elimane Ba</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <div>
          <button>Contactez-moi</button>
        </div>
      </section>
    
      <section id="section_about">
        <div className="section_about_div1">
          <h2>A propos</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ea
            consequuntur quidem et doloribus magnam repudiandae excepturi
            inventore animi fuga ipsam nisi iusto eaque voluptatibus sed! Eveniet neque in, aliquid non rem praesentium,
            veritatis cum doloribus aperiam, odio unde fugiat.
          </p>
          <p className="section_about_p2">
            Mollitia harum nam sed, nostrum debitis et voluptates neque, iusto,
            inventore molestiae voluptatum distinctio. Dolorum at nisi laudantium
            rerum doloremque atque amet fuga, tempore unde ullam laborum saepe assumenda
            aut, recusandae facere accusantium illum qui, nostrum sate sed.
          </p>
          <button>Télécharger mon CV</button>
        </div>
        <div className="section_about_div2">
        <img src={myProfil} alt="My_photo" className="w-full h-auto rounded-lg" />
        </div>
      </section>
      {/* End section_about */}
      
      {/* Start section_portfolio */}
      <section id="section_portfolio">
        <h2>Portfolio</h2>
        <ul className="section_portfolio_nav">
          <li><a href="#">Application Mobile</a></li>
          <li><a href="#">Site Web</a></li>
          <li><a href="#">Modélisation</a></li>
        </ul>

        <div className="section_portfolio_projet">
          <div className="section_portfolio_div1">
            <h3>Projet</h3>
            <h5>Application pour pharmacie de garde</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              voluptatum quam quidem, id nemo ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis non cupiditate consequatur molestiae architecto ab inventore commodi ullam, tempore, saepe dicta, perferendis modi optio nostrum incidunt maxime distinctio ex.
            </p>
            <button>Voir Plus <span>&#8614;</span></button>
          </div>
          <div className="section_portfolio_div2">
          <img src={PharmacieHome} alt="Pharmacie Home" className="w-full h-auto rounded-lg" />
            <img src={PharmacieConnexion} alt="Pharmacie Connexion" className="w-full h-auto rounded-lg" />
            <img src={PharmacieDashboard} alt="Pharmacie Dashboard" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      <section id="section_services">
        <h2>Services</h2>
        <div className="section_services_div1">
          <div className="grid-item">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M416 32c-13.3 0-24 10.7-24 24v82.4L137.8 119.3C130.5 118.4 121 120 112 120 53.3 120 0 173.3 0 232s53.3 112 112 112h74.1l138.8 99.4c1.3 1 2.7 1.7 4.2 2.3l.2 .1c-7.5 15.2-12.6 32.6-12.6 51.2v27.1c0 13.3 10.7 24 24 24s24-10.7 24-24v-27.1c0-32.2 16.6-60.9 41.8-77.5c25.1-16.4 56.8-23.4 90.2-17.1c13.6 2.8 27 8.4 38.8 16.5l7.5 5.5v82.3c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zM112 176c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1zM480 288c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1z" />
              </svg>
            </div>
            <h3>Développement Web</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt aperiam quasi nobis, dolorum autem, doloremque odit necessitatibus similique mollitia quibusdam laboriosam aliquam quos, ipsa maxime atque voluptatum?</p>
          </div>

          <div className="grid-item">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M416 32c-13.3 0-24 10.7-24 24v82.4L137.8 119.3C130.5 118.4 121 120 112 120 53.3 120 0 173.3 0 232s53.3 112 112 112h74.1l138.8 99.4c1.3 1 2.7 1.7 4.2 2.3l.2 .1c-7.5 15.2-12.6 32.6-12.6 51.2v27.1c0 13.3 10.7 24 24 24s24-10.7 24-24v-27.1c0-32.2 16.6-60.9 41.8-77.5c25.1-16.4 56.8-23.4 90.2-17.1c13.6 2.8 27 8.4 38.8 16.5l7.5 5.5v82.3c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zM112 176c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1zM480 288c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1z" />
              </svg>
            </div>
            <h3>Développement Mobile</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt aperiam quasi nobis, dolorum autem, doloremque odit necessitatibus similique mollitia quibusdam laboriosam aliquam quos, ipsa maxime atque voluptatum?</p>
          </div>

          <div className="grid-item">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M416 32c-13.3 0-24 10.7-24 24v82.4L137.8 119.3C130.5 118.4 121 120 112 120 53.3 120 0 173.3 0 232s53.3 112 112 112h74.1l138.8 99.4c1.3 1 2.7 1.7 4.2 2.3l.2 .1c-7.5 15.2-12.6 32.6-12.6 51.2v27.1c0 13.3 10.7 24 24 24s24-10.7 24-24v-27.1c0-32.2 16.6-60.9 41.8-77.5c25.1-16.4 56.8-23.4 90.2-17.1c13.6 2.8 27 8.4 38.8 16.5l7.5 5.5v82.3c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zM112 176c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1zM480 288c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1z" />
              </svg>
            </div>
            <h3>Consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt aperiam quasi nobis, dolorum autem, doloremque odit necessitatibus similique mollitia quibusdam laboriosam aliquam quos, ipsa maxime atque voluptatum?</p>
          </div>
          <div className="grid-item">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M416 32c-13.3 0-24 10.7-24 24v82.4L137.8 119.3C130.5 118.4 121 120 112 120 53.3 120 0 173.3 0 232s53.3 112 112 112h74.1l138.8 99.4c1.3 1 2.7 1.7 4.2 2.3l.2 .1c-7.5 15.2-12.6 32.6-12.6 51.2v27.1c0 13.3 10.7 24 24 24s24-10.7 24-24v-27.1c0-32.2 16.6-60.9 41.8-77.5c25.1-16.4 56.8-23.4 90.2-17.1c13.6 2.8 27 8.4 38.8 16.5l7.5 5.5v82.3c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zM112 176c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1zM480 288c-39.8 0-72 32.2-72 72s32.2 72 72 72c2.2 0 4.4-.1 6.6-.2l26.6-2.2c4.3-.4 8.7-2.2 12.1-5.4l24.4-20.6c7.5-6.3 18.5-6.3 26 0l24.4 20.6c3.4 3 7.8 5 12.1 5.4l26.6 2.2c2.2 .1 4.4 .2 6.6 .2c39.8 0 72-32.2 72-72s-32.2-72-72-72c-4.2 0-8.3 .4-12.4 1.1l-21.8 5.5c-7.7 1.9-15.6 3-23.7 3c-8.1 0-16.1-1.1-23.8-3l-21.7-5.5c-4.1-.7-8.2-1.1-12.3-1.1z" />
              </svg>
            </div>
            <h3>Consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt aperiam quasi nobis, dolorum autem, doloremque odit necessitatibus similique mollitia quibusdam laboriosam aliquam quos, ipsa maxime atque voluptatum?</p>
          </div>
        </div>
      </section>
    
      <section id="section_experiences">
      <h2>Expériences</h2>
      <div class="section_experiences_div1">
        <div class="grid-item">
          <img src={html} alt="" />
          <p>HTML</p>
        </div>
        <div class="grid-item">
          <img src={node} alt="" />
          <p>Node JS</p>
        </div>
        <div class="grid-item">
          <img src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div class="grid-item">
          <img src={css} alt="" />
          <p>CSS</p>
        </div>
        <div class="grid-item">
          <img src={react} alt="" />
          <p>React js</p>
        </div>
        <div class="grid-item">
          <img src={java} alt="" />
          <p>Java</p>
        </div>
        <div class="grid-item">
          <img src={aws} alt="" />
          <p>AWS</p>
        </div>
        <div class="grid-item">
          <img src={python} alt="" />
          <p>Python</p>
        </div>
      </div>
    </section>
    <section id="section_contact">
      <div>
        <h3>Contact</h3>
        <h2>Envoyer-moi un message</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <ul>
          <li>
            <img src={facebooksvg} alt="" />+221 78 632 82 32
          </li>
          <li>
            <img
              src={facebooksvg}
              alt=""
            />codons.simplement@gmail.com
          </li>
          <li>
            <img src={facebooksvg} alt="" />Grand Yoff
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" value={name}  placeholder="Prenom et Nom" onChange={(e) => setName(e.target.value)}
              required />
        <input  id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required placeholder="Email" />
           
        <textarea id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required rows="10" placeholder="Message"></textarea>
        <button>Envoyer</button>
      </form>
      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </section>
   
      

    <footer>
      <img src={logofotter} alt="logo_footer" />
      <p>&copy; Web Portfolio</p>
      <ul>
        <li>
          <a href="#">
            <img src={facebooksvg} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagramsvg} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={githubsvg} alt="" />
          </a>
        </li>
        <li>codons.simplement</li>
      </ul>
    </footer>
    </div>
  );
};



export default App;
