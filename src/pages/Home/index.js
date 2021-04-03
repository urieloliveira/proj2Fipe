import React, { useState } from "react";
import {
  Container,
  Content,
  Card_link,
  Icon,
  Button,
  Menu,
  Header,
  Menu_links,
  Button_outline,
  Logo,
  Menu_Icon_Open,
  Menu_icon_close,
  Card,
  Card_title,
  Card_description,
  Hamburguer_menu,
  Hamburger_menu_header,
  Hamburger_menu_link,
} from "./styles";

function Home(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Header>
        <Menu>
          <Logo href="/"></Logo>
          <Menu_Icon_Open onClick={() => setToggle(true)}></Menu_Icon_Open>
          <Menu_links>
            <li>Waze</li>
            <li>Carpool</li>
            <li>Parceiros</li>
          </Menu_links>
          <Menu_links>
            <li>Pegue carona</li>
            <li>Mapa ao vivo</li>
            <li>Baixar</li>
            <li>
              <Button_outline onClick={() => props.history.push("/search")}>
                Entrar
              </Button_outline>
            </li>
          </Menu_links>
        </Menu>
      </Header>
      <Content>
        <Card>
          <img
            src="https://kstatic.googleusercontent.com/files/46e435e488928422ac7fee9e6883889260e4dd88205a637156c8e0ea5f46e1990520ef2947f18a28d07435aa70a69b8bc9a6e1b5b299d998477a8974bdbf4317"
            alt=""
            class="card-logo"
          />
          <Card_title>Um mundo com menos trânsito é possível</Card_title>
          <Card_description>
            Seja uma das +130 milhões de pessoas que ajudam a construí-lo.
          </Card_description>
          <Button>Baixar</Button>
          <Card_link href="">Saiba mais</Card_link>
          <Icon
            style={{
              right: "60px",
              left: "auto",
            }}
          >
            <img
              src="https://kstatic.googleusercontent.com/files/9aab8ecf0d18ddbdd0e837e9279110d7f2a6c95c0f54813c6bf0c8603b3748f292928e3305b5ed27a623f1ed8e989c7b0e5fae7b2ea343722c6b42fddb2a8604"
              alt=""
            />
          </Icon>
        </Card>
        <Card>
          <div
            style={{
              left: "0",
              height: "100%",
              position: "absolute",
              width: " calc(50% + 40px)",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              background: "#FCE354",
              clipPath: "polygon(0 0, 70% 0, 100% 100%, 0 100%)",
            }}
          />
          <div
            style={{
              right: "0",
              height: "100%",
              position: "absolute",
              width: "calc(50% + 40px)",
              backgroundImage: `url("https://lh3.googleusercontent.com/QRuzdAHgO26osbICxbUK-1LeEZRZK0a_ggFr0RZNkFRT_Syk4ArnEb2-2eaUUFOrNyoxLZGT8KAl4JAgc7XTd8MYiIDTjy38FQyjAA")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
            }}
          />
          <Icon>
            <img
              src="https://kstatic.googleusercontent.com/files/811eae0c24a1c64093bacbc3f717cbda8a6e494d48fa1788017542b8e258050dcf185ced5794936ef634f77d18e3a4e67edde7ebcf725e209bd62f2f489ad033"
              alt=""
            />
          </Icon>
        </Card>

        <Card>
          <img
            src="https://kstatic.googleusercontent.com/files/384118d36070d9761c18af9f59bb8edf71ef2b43199786d77368ffcdfc0ad28ce4fa59ee9366e0fc446cf8aa2019b59575c7fd1fe5181ad4b10e01a7bbadf01b"
            alt=""
          />
          <Card_title>Compartilhe pedágios, combustível e conversas</Card_title>
          <Card_description>
            Tem um assento vazio no seu carro? Precisa de carona? Divida o
            trajeto com quem está indo para o mesmo destino.
          </Card_description>
          <Button>Baixar</Button>
          <Card_link>Saiba mais</Card_link>
          <Icon>
            <img
              src="https://kstatic.googleusercontent.com/files/8db732783ede471cf6c6afce2a3e9f4d61da6122a7fd71f04b745c1fe104473a1fd2dfe43718b78a1dda7c8717c70a1024acf0d62c0cc916ba645f1da50d573a"
              alt=""
            />
          </Icon>
        </Card>
      </Content>

      <Hamburguer_menu toggle={toggle}>
        <Hamburger_menu_header>
          <Logo href="/"></Logo>
          <Menu_icon_close onClick={() => setToggle(false)}></Menu_icon_close>
        </Hamburger_menu_header>
        <Hamburger_menu_link>
          <li>
            <a href="/">Waze</a>
          </li>
          <li>
            <a href="/">Carpool</a>
          </li>
          <li>
            <a href="/">Parceiros</a>
          </li>
        </Hamburger_menu_link>
        <Hamburger_menu_link>
          <li>
            <a href="/">Pegue carona</a>
          </li>
          <li>
            <a href="/">Mapa ao vivo</a>
          </li>
          <li>
            <a href="/">Baixar</a>
          </li>
        </Hamburger_menu_link>
        <Hamburger_menu_link>
          <li>
            <a href="/">Suporte</a>
          </li>
          <li>
            <a onClick={() => props.history.push("/search")}>Entrar</a>
          </li>
        </Hamburger_menu_link>
      </Hamburguer_menu>
    </Container>
  );
}

export default Home;
