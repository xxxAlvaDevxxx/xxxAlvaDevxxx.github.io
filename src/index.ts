import { $2 } from "xxx-element";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

new $2("title").setText("Portafolio")
new $2("article#container").addChildren(Header, Main, Footer);
