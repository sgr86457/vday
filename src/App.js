import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import eddyS2Lidiane from "./assets/eddyS2Lidiane.jpeg";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Hello Anant!"
        text="This valentine's luckily you met a coder! :D Here is a small gift from the artist in me to the shy boy in you :)"
        btnText="Oh Zara Zara Click Me, Click Me!"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Happy Valentine's!"
        text="Now I know, this is all very cheesy AF, but that's the advantange of knowing me xD, I hope your life is filled with love and happiness <3"
        btnText="Loads of Love, Sakshi! :)"
        sequency="2"
      />
    </div>
  );
};

export default App;
