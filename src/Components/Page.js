import React, { useState } from "react";
import * as S from "./style.js";
import Facebook from "./image/facebook.png";
import Instagram from "./image/instagram.png";
import Logo from "./image/logo.png";
import Black from "./image/pepsi_black.png";
import Blue from "./image/pepsi_blue.png";
import Silver from "./image/pepsi_silver.png";
import Twitter from "./image/twitter.png";
export default function App() {
  const [image, setImage] = useState(Blue);
  const [background, setBackground] = useState("#0261bf");

  return (
    <S.Body backgroundColor={background}>
      <S.Header>
        <img src={Logo} alt="Logo" />
        <S.Navegation>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>What's New</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </S.Navegation>
      </S.Header>
      <S.Main>
        <S.TextBox>
        <S.Text>
         THAT'S WHAT <span>I LIKE</span>
        </S.Text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente
          aspernatur possimus odio accusantium inventore. Vel perferendis
          molestias a unde eum dolorem officia doloremque! Doloribus asperiores
          quas vitae quisquam libero.
        </p>
        <S.Button>VIEW ALL PRODUCTS</S.Button>
        </S.TextBox>
        <S.PepsiCans>
          <div>
            <img
              onClick={() => {
                setImage(Blue);
                setBackground();
              }}
              src={Blue}
              alt="Pepsi Blue"
            />
            <img
              onClick={() => {
                setImage(Silver);
                setBackground("#E60C2D");
              }}
              src={Silver}
              alt="Pepsi Diet"
            />
            <img
              onClick={() => {
                setImage(Black);
                setBackground("#1F1E1F");
              }}
              src={Black}
              alt="Pepsi Zero Sugar"
            />
          </div>
        </S.PepsiCans>

        <S.Pepsi>
          <img src={image} alt="Pepsi Blue" />
        </S.Pepsi>

        <S.Networks>
          <div>
            <img src={Facebook} alt="Facebook logo" />
            <img src={Twitter} alt="Twitter logo" />
            <img src={Instagram} alt="Instagram logo" />
          </div>
        </S.Networks>
      </S.Main>
    </S.Body>
  );
}
