import PostModelo from 'componentes/PostModelo';
import { Fragment } from 'react';
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return (
        <Fragment>
            <PostModelo fotoCapa={fotoCapa} titulo='Sobre mim'>
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Vinícius!
                </h3>
                <img 
                src='https://github.com/vinimpds11.png'
                alt='Foto do Vinícius'
                className={styles.fotoSobreMim}
                />

                <p className={styles.paragrafo}>    
                    Minha história com a programação começou graças ao meu irmão, que trabalha na área e me introduziu ao mundo da programação, ensinando-me muitas coisas. Desde então, desenvolvi uma paixão por esse universo, e hoje estou focado em me tornar um desenvolvedor full-stack, com uma ênfase especial no front-end.
                </p>
                <p className={styles.paragrafo}>    
                    Sou natural de Santo André-SP e, aos 21 anos, já acumulei uma série de experiências valiosas. Fui jovem aprendiz da CPTM, onde me formei em operação de trens metropolitanos pelo Senai, destacando-me entre os alunos. Essa experiência me proporcionou uma base sólida e uma visão disciplinada sobre o trabalho. Também fui jovem aprendiz na Vigor Brasil, onde adquiri experiência administrativa e compreendi melhor as rotinas de uma empresa.
                </p>
                <p className={styles.paragrafo}>    
                    Meu interesse em programação me levou a fazer um curso introdutório ao Python no Senai, além de cursos introdutórios em várias plataformas de Cloud, como Google Cloud, Azure Cloud e Amazon Web Services. Essa formação diversificada ampliou meus horizontes e solidificou minha determinação de seguir carreira na tecnologia.
                </p>
                <p className={styles.paragrafo}>    
                    Atualmente, sou Jovem Aprendiz na ViaMobilidade e estou concluindo minha segunda aplicação React pela Alura, uma instituição que admiro muito. Além disso, tenho planos de fazer faculdade de design gráfico, complementando minha formação técnica com habilidades criativas.
                </p>
                <p className={styles.paragrafo}>    
                    Espero que minha trajetória inspire outros a perseguirem seus sonhos e a nunca desistirem, independentemente dos desafios que possam surgir pelo caminho.
                </p>

            </PostModelo>
        </Fragment>
    )
}

export default SobreMim;