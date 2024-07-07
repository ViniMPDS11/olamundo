import { useParams, Routes, Route } from 'react-router-dom';
import ReactMarkDown from 'react-markdown';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import './Post.css'
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';

// Configuração para importar imagens dinamicamente
const importAll = (r) => {
    let images = {};
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item);
        return null; // Retorna um valor explicitamente para resolver o aviso
    });
    return images;
};

const images = importAll(require.context('assets/posts', true, /\.(png|jpe?g|gif)$/));

const Image = ({ alt, src }) => {
    try {
        const imagePath = images[src.replace('assets/posts/', '')];
        if (!imagePath) throw new Error();
        return <img alt={alt} src={imagePath} style={{ margin: '20px auto', maxHeight: '288px' }} />;
    } catch (error) {
        console.error(`Image at ${src} not found`);
        return null;
    }
};

const Post = () => {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NaoEncontrada />
    }

    const capa = require(`assets/posts/${post.id}/capa.png`);

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo fotoCapa={capa} titulo={post.titulo}>
                            <div className='post-markdown-container'>
                                <ReactMarkDown
                                    components={{
                                        img: ({ node, ...props }) => <Image {...props} />
                                    }}
                                >
                                    {post.texto}
                                </ReactMarkDown>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Post;
