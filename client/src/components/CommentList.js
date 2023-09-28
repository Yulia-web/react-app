import React, { useEffect, useState } from 'react';
import Star from "../img/icons/star.svg"; 

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        const updatedComments = data.slice(0, 5).map(comment => ({
          ...comment,
          createdAt: formatDate(comment.createdAt),
          photos: [
            'https://source.unsplash.com/random/1',
            'https://source.unsplash.com/random/2',
            'https://source.unsplash.com/random/3',
            'https://source.unsplash.com/random/4',
            'https://source.unsplash.com/random/5',
          ],
        }));
        setComments(updatedComments);
      });
  }, []);

  const formatDate = dateString => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-item">
              <p className="date-publication">20.05.2023</p>
              <div className="comment-item-header">
                <div className="title">{comment.name}</div>
                <div className="starts">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="description">
                <p>
                  {comment.body}
                </p>
              </div>
              <div className="gallary-images">
                {comment.photos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList