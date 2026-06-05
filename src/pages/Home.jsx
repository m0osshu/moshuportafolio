import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/organisms/UserCard';
import Footer from '../components/molecules/Footer';
import user from '../data/user';
import '../styles/pages/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <UserCard user={user} />
      <div className="home-page__actions">
      </div>
      <Footer />
    </div>
  );
}

export default Home;