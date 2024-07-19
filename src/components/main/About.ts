import {
  $div,
  $img,
  $p,
  $h4,
  $ul,
  $li,
  $section,
  $h2,
} from "xxx-element/elementHTML";
import MainFeature from "../../interfaces/MainFeature";

class AboutContent extends $div {
  img = new $img(
    "https://avatars.githubusercontent.com/u/106893746?v=4",
    "Foto de Don Thomas"
  );
  details = new $p(
    "Hola, soy Don thomas, un desarrollador web apasionado por crear soluciones innovadoras y eficientes. Tengo una sólida formación en la web y varios años de experiencia en el desarrollo de aplicaciones web, servidores web y poco de móviles y escritorio"
  );
  titleSkills = new $h4("Mis habilidades incluyen:");
  contentSkills = new $ul();
  constructor() {
    super({ class: "about-content" });
    this.addChildren(
      this.img,
      new $div().addChildren(this.details, this.titleSkills, this.contentSkills)
    );
    this.contentSkills.addChildrenToList(
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "C#",
      "Golang",
      "Python",
      "SQL"
    );
  }
}

class About extends $section implements MainFeature {
  $title = new $h2("Sobre mí");
  aboutContent = new AboutContent();
  constructor() {
    super({ id: "about" });
    this.addChildren(this.$title, this.aboutContent);
  }
}

export default new About();
