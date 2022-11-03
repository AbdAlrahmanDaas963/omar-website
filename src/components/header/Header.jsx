import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./header.css";
import Burger from "./Burger";

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
  // const liVar = {
  //   show: {
  //     opacity: "1",
  //   },
  //   hide: {
  //     opacity: "0",
  //     transition: { delay: 0.1 },
  //   },
  // };
  const liVar = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  const handleClick = () => {
    if (window.screen.width < 700) clicked ? hide() : show();
  };
  const show = () => {
    setClicked(true);
    controlsUl.start("show");
    controlsLi.start("visible");
  };
  const hide = () => {
    setClicked(false);
    controlsUl.start("hide");
    controlsLi.start("hidden");
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
          {list.map((item, i) => (
            <motion.li
              variants={liVar}
              custom={i}
              animate={controlsLi}
              className="header-li"
              key={item.title}
              onClick={handleClick}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div onClick={handleClick} className="burger">
        <Burger clicked={clicked} />
      </div>
    </div>
  );
}

export default Header;