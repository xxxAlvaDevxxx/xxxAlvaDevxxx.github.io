import { $a, $div, $h2, $h3, $p, $section } from "xxx-element/elementHTML";
import MainFeature from "../../interfaces/MainFeature";

let postNo = 1;

function Post() {
  const _title = new $h3(`Titulo de la publicacion ${postNo}`);
  const _resume = new $p(`Pesumen de la publicacion ${postNo}...`);
  const _link = new $a("Leer mas", "#");
  return new $div({ class: "post" }).addChildren(_title, _resume, _link);
}

class Blog extends $section implements MainFeature {
  $title = new $h2("Blog");
  constructor() {
    super({ id: "blog" });
    this.addChildren(this.$title, Post(), Post())
  }
}

export default new Blog()