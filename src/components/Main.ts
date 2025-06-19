import { $main } from "xxx-element/elementHTML";
import About from "./main/About";
import Projects from "./main/Projects";
import Contact from "./main/Contact";
import Blog from "./main/Blog";
import Header from "./Header";
import MainFeature from "../interfaces/MainFeature";

class Main extends $main {
  $about = About;
  $projects = Projects;
  $blog = Blog;
  $contact = Contact;
  constructor() {
    super();
    this.addChildren(
      this.$about,
      this.$projects /* ,this.$blog */,
      this.$contact
    );
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
