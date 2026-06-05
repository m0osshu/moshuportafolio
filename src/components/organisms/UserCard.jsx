import React from 'react';
import { motion } from 'framer-motion';
import Image from '../atoms/Image';
import UserBody from '../molecules/UserBody';
import '../../styles/organisms/UserCard.css';

function UserCard({ user, className = '' }) {
  return (
    <div className={`user-card ${className}`}>

      <motion.div
        className="user-card__photo"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={user.foto}
          alt={`Foto de ${user.name}`}
          className="user-card__img"
        />
      </motion.div>

      <div className="user-card__body">
        <UserBody user={user} />
      </div>

    </div>
  );
}

export default UserCard;