import profileImage from '../assets/profile.png'; // Import your profile image
import ParticleComponent from './ParticleComponent';
import './Home.css'; // Import your CSS file
import SocialLinks from './SocialLinks';
import Certification from './Certification';

const Home = () => {
  const hour = new Date().getHours();
const greeting = hour < 12 ? 'Good Morning' : (hour < 18 ? 'Good Afternoon' : 'Good Evening');

  return (
    <> 
    <ParticleComponent/>
     <div className="home-container">
      <div className="greeting-container">
        <h1 className="greeting">👋🏻 {greeting}</h1>
        <p className='about-me'>
          Hi, I am  Ram ! I am a passionate Software Engineer with experience in AWS and Web Development. Someone who is very
          easy to work with. I am a quick learner and I am always looking for new challenges.
          Welcome to my resume website. Here, you can learn more about my background, skills, and projects.
          Feel free to contact me if you have any questions or would like to collaborate on a project.
          Thank you for visiting my resume website.
        </p>
        <span>
          <Certification/>
        </span>
        <SocialLinks/>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
    </>
  
  );
};

export default Home;
