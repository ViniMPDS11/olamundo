import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom';

const MenuLink = (props) => {
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === props.pasta ? styles.linkDestacado : ''}
        `} to={props.pasta}>
            {props.nome}
        </Link>
    )
}

export default MenuLink;