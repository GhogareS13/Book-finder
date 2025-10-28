import React from 'react';
import styles from './BookCard.module.css'; // Import the CSS Module

const BookCard = ({ book }) => {
 
  const coverId = book.cover_i;
  const coverUrl = coverId 
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` // M for Medium size
    : 'https://via.placeholder.com/150x200?text=No+Cover'; // Placeholder image

  const author = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
  const publishYear = book.first_publish_year || 'N/A';
  
  return (
    <div className={styles.card}>
      
      {/* Cover Image */}
      <img 
        src={coverUrl} 
        alt={`Cover of ${book.title}`} 
        className={styles.cover}
      />
      
      {/* Book Details */}
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>By: {author}</p>
      <p className={styles.detail}>Published: {publishYear}</p>
    </div>
  );
};

export default BookCard;