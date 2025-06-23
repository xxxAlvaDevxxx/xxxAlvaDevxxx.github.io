import { $a, $article, $div, $h2, $p, $section } from "xxx-element/elementHTML";
import MainFeature from "../../interfaces/MainFeature";

function Project(title: string, description: string, topic?: string[]) {
  const _link = new $a(
    "GitHub",
    `https://github.com/xxxAlvaDevxxx/${title}`,
    "Github address",
    "_blank"
  );
  const _title = new $h2(title).addChild(_link);
  const _description = new $p(description);

  if (topic) {
    const _topics = new $section({ class: "topics" });
    _description.addChild(_topics);

    topic.forEach((t) => {
      const _topic = new $article({ class: "topic" }).setText(t);
      _topics.addChild(_topic);
    });
  }

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
        "Element es una biblioteca ligera que le ayudará a desarrollar aplicaciones web.",
        ["TypeScript"]
      ),
      Project("replace_path_go", "reemplazador de module path", ["Go"]),
      Project(
        "API-python",
        "Es una REST API para consultar los usuarios de un hospital",
        ["Python", "Flask", "JavaScript", "TypeScript", "CSS"]
      ),
      Project(
        "t-wlc",
        "Es un paquete para golang que permite registrar logs de una manera sencilla y configurable.",
        ["Go"]
      ),
      Project(
        "tfc",
        "tfc es un paquete Go ligero y flexible que permite limpiar y administrar archivos y directorios. Admite operaciones de eliminación, creación y limpieza de archivos y directorios según el tiempo de acceso.",
        ["Go"]
      )
    );
  }
}

export default new Projects();
