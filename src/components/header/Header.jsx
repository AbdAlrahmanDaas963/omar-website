import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./header.css";

function Header() {
  const [clicked, setClicked] = React.useState(false);
  const controlsUl = useAnimationControls();
  const controlsLi = useAnimationControls();

  const list = [
    { title: "About" },
    { title: "Skilles" },
    { title: "My Works" },
    { title: "Contact" },
  ];
  const ulVar = {
    show: {
      height: "100vh",
      display: "flex",
    },
    hide: {
      height: "0",
    },
  };
  const liVar = {
    show: {
      opacity: "1",
    },
    hide: {
      opacity: "0",
      transition: { delay: 0.1 },
    },
  };

  const handleClick = () => {
    clicked ? hide() : show();
  };
  const show = () => {
    setClicked(true);
    controlsUl.start("show");
    controlsLi.start("show");
  };
  const hide = () => {
    setClicked(false);
    controlsUl.start("hide");
    controlsLi.start("hide");
  };
  return (
    <div className="header">
      <div className="logo">OMAR</div>
      <div>
        <motion.ul
          variants={ulVar}
          animate={controlsUl}
          transition={{ ease: "linear" }}
          className="header-ul"
        >
          {list.map((item) => (
            <motion.li
              variants={liVar}
              animate={controlsLi}
              className="header-li"
              key={item.title}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div onClick={handleClick} className="burger">
        more
      </div>
    </div>
  );
}

export default Header;
