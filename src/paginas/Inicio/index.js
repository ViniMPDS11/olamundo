import { Fragment } from 'react';
import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import PostCard from 'componentes/PostCard';

const Inicio = () => {
    return (
        <Fragment>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>))}
            </ul>
        </Fragment>
    )
}

export default Inicio;