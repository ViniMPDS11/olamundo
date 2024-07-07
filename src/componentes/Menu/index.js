
import styles from './Menu.module.css';
import MenuLink from './MenuLink/index';


const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink nome='Início' pasta='/'/>
                <MenuLink nome='Sobre Mim' pasta='/sobremim'/>
            </nav>
        </header>
    );
}

export default Menu;