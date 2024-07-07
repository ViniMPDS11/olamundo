
import styles from './Menu.module.css';
import MenuLink from './MenuLink/index';


const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink nome='Início' pasta='/olamundo' pastaDois='/olamundo/'/>
                <MenuLink nome='Sobre Mim' pasta='/olamundo/sobremim'/>
            </nav>
        </header>
    );
}

export default Menu;