import "../../styles/nav/NavItem.scss";

function NavItem(props) {
  const navigateToItem = () => {
    const element = document.getElementsByClassName(
      props.name.toLowerCase()
    )[0];
    props.closeNav();
    // This sucks, but we need to wait for the nav to close
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="navItem" onClick={navigateToItem}>
      {props.name}
    </div>
  );
}

export default NavItem;
