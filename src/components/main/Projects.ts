import { $a, $div, $h2, $p, $section } from "xxx-element/elementHTML";
import MainFeature from "../../interfaces/MainFeature";

function Project(title: string, description: string) {
  const _link = new $a("GitHub",`https://github.com/xxxAlvaDevxxx/${title}`,"Github address", "_blank")
  const _title = new $h2(title).addChild(_link);
  const _description = new $p(description);
  return new $div({ class: "project" }).addChildren(_title, _description);
}

class Projects extends $section implements MainFeature {
  $title = new $h2("Proyectos");
  constructor() {
    super({ id: "projects" });
    this.addChildren(
      this.$title,
      Project(
        "Element",
        "Element es una biblioteca ligera que le ayudará a desarrollar aplicaciones web."
      ),
      Project("replace_path_go", "reemplazador de module path"),
      Project("API-python", "Es una REST API para consultar los usuarios de un hospital")
    );   
  }
}

export default new Projects();
