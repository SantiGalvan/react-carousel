import mainStyle from '../Main/Main.module.scss';

const Button = ({ children, className, isCarousel, onButtonClick }) => {
    return (
        isCarousel ?
            <button onClick={onButtonClick} className={mainStyle.btn}>{children}</button>
            :
            <button className={className}>{children}</button>
    );
}

export default Button;