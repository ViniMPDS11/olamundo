import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                    <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Vinícius Matheus, aluno de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                    </p>
                </h1>
            </div>

            <div className={styles.imagens}>
                <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                alt="Circulo com preenchimento em degradê"/>

                <img className={styles.minhaFoto}
                src='https://github.com/vinimpds11.png'
                alt="Foto de Vinícius Matheus"
                />
            </div>
        </div>
    )
}

export default Banner;