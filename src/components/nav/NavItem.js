import "../../styles/nav/NavItem.scss";

function NavItem(props) {
  const navigateToItem = () => {
    const element = document.getElementsByClassName(props.name)[0];
    props.closeNav();
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navItem" onClick={navigateToItem}>
      {props.name}
    </div>
  );
}

export default NavItem;
