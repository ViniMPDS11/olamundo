import PostCard from 'componentes/PostCard'
import styles from './OutrosPosts.module.css'
import posts from 'json/posts.json'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OutrosPosts = ( props ) => {

    const getRandomItems = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };
    
    const parametros = useParams();

    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        const filteredItems = posts.filter(item => item.id !== Number(parametros.id));
        
        const items = getRandomItems(filteredItems, 4);
        
        setRandomItems(items);
        console.log(filteredItems)
    }, [parametros.id]);

    return (
        <>
            <div className={styles.outrosPosts}>
                <h3>{props.titulo}</h3>
                <ul className={styles.postsCards}>
                    {randomItems.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default OutrosPosts;