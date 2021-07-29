import React from 'react';
import styles from './Articles.module.scss';
import axios from 'axios';
import Header from '../Header/Header';

const Articles = () => {

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);


  return (
    <div>
      <Header />

      <h1 style={{ textDecoration: 'underline' }}>Articles</h1>

      {loading && 'Загрузка...'}

      <div className={styles.postWrapper}>
        {posts.map(post => ( //возврат
          <div key={post.id} className={styles.card}>

            <img src="" alt="" />
            <h4 className={styles.title}>{post.title}</h4>
            <p className={styles.body}>{post.body}</p>
            <a href="/">Read now</a>

          </div>
        ))}
      </div>

      {/* <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" /> */}


    </div>
  );
};

export default Articles;