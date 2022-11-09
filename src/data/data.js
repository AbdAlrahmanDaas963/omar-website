import Interior1 from "./images/interior/1.jpg";
import Interior2 from "./images/interior/2.jpg";
import Interior3 from "./images/interior/3.jpg";
import Interior4 from "./images/interior/4.jpg";
import Interior5 from "./images/interior/5.jpg";
import Interior6 from "./images/interior/6.jpg";
import Interior7 from "./images/interior/7.jpg";
import Interior8 from "./images/interior/8.jpg";
import Interior9 from "./images/interior/9.jpg";
import Interior10 from "./images/interior/10.jpg";
import Interior11 from "./images/interior/11.jpg";
import Interior12 from "./images/interior/12.jpg";
import Interior13 from "./images/interior/13.jpg";
import Interior14 from "./images/interior/14.jpg";

import Exerior1 from "./images/exerior/1.jpg";
import Exerior2 from "./images/exerior/2.jpg";
import Exerior3 from "./images/exerior/3.jpg";
import Exerior4 from "./images/exerior/4.jpg";
import Exerior5 from "./images/exerior/5.jpg";

import logo1 from "./images/logo/1.jpg";

import poster1 from "./images/poster/1.jpg";
import poster2 from "./images/poster/2.jpg";
import poster3 from "./images/poster/3.jpg";

const InteriorDesign = [
  { src: Interior1 },
  { src: Interior2 },
  { src: Interior3 },
  { src: Interior4 },
  { src: Interior5 },
  { src: Interior6 },
  { src: Interior7 },
  { src: Interior8 },
  { src: Interior9 },
  { src: Interior10 },
  { src: Interior11 },
  { src: Interior12 },
  { src: Interior13 },
  { src: Interior14 },
];

const ExeriorDesign = [
  { src: Exerior1 },
  { src: Exerior2 },
  { src: Exerior3 },
  { src: Exerior4 },
  { src: Exerior5 },
];

const Logos = [{ src: logo1 }];
const Posters = [{ src: poster1 }, { src: poster2 }, { src: poster3 }];

const all = { InteriorDesign, ExeriorDesign, Logos, Posters };

export function getData() {
  return all;
}
