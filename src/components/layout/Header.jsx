import classes from './Header.module.css';
import foodImg from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImg} alt="Food displayed on a table."/>
            </div>
        </>
    );
}

export default Header;