import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'componentes/BotaoPrincipal';

const NaoEncontrada = () => {
    const navegar = useNavigate();
    const [alturaImagemErro404, setAlturaImagemErro404] = useState(0);
    const imgRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (imgRef.current) {
                setAlturaImagemErro404(imgRef.current.clientHeight);
            }
        };

        updateHeight(); // Atualiza a altura inicialmente

        // Adiciona um event listener para atualizar a altura quando a janela for redimensionada
        window.addEventListener('resize', updateHeight);

        // Limpa o event listener quando o componente desmontar
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando? 
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal texto='Voltar' tamanho='lg'/>
                </div>
                <img
                ref={imgRef}
                className={styles.imagemCachorro}
                src={erro404}
                alt='Cachorro de óculos e vestido'
                style={{bottom: `-${alturaImagemErro404/2}px`}}
                />
            </div>
            <div className={styles.espacoEmBranco}>
            </div>
        </>
    )
}

export default NaoEncontrada;