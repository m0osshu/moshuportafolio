import React from 'react';
import notices from '../data/noticias.json';
import NoticeCard from '../components/organisms/NoticeCard';
import Text from '../components/atoms/Text';
import Footer from '../components/molecules/Footer';
import '../styles/pages/Notice.css';

function Noticias() {
    return (
        <div className="noticias-section">
            <div className="text-center mb-5">
                <Text variant="h1" type="title">Noticias</Text>
                <Text variant="p" type="body" className="section-subtitle">
                    ultimas novedades
                </Text>
            </div>
            
            <div className="notices-container">
                {notices.noticias.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Noticias;