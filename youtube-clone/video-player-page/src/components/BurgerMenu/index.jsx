import "./BurgerMenu.styles.scss";
function BurgerMenu() {
  return (
    <button className="burger-menu" aria-label="Menu" type="button">
      <div className="burger-menu__line"></div>
      <div className="burger-menu__line"></div>
      <div className="burger-menu__line"></div>
    </button>
  );
}

export default BurgerMenu;
