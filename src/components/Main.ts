import { $main } from "xxx-element/elementHTML";
import About from "./main/About";
import Projects from "./main/Projects";
import Contact from "./main/Contact";
import Header from "./Header";
import MainFeature from "../interfaces/MainFeature";

class Main extends $main {
  $about = About;
  $projects = Projects;
  $contact = Contact;
  constructor() {
    super();
    this.addChildren(this.$about, this.$projects, this.$contact);
  }
  addChildren(...children: MainFeature[]): this {
    super.addChildren(...children);
    children.forEach((child) => {
      Header.$ul.addLink(`#${child.id}`, child.$title.text);
    });
    return this;
  }
}

export default new Main();
