import styles from './BotaoPrincipal.module.css'

const BotaoPrincipal = (props) => {
    return (
        <button className={`
        ${styles.botaoPrincipal}
        ${styles[props.tamanho]}
        `}>
            {props.texto}
        </button>
    )
}

export default BotaoPrincipal;