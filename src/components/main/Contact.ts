import { $a, $h2, $li, $p, $section, $ul } from "xxx-element/elementHTML";
import MainFeature from "../../interfaces/MainFeature";

class Contact extends $section implements MainFeature {
  $title = new $h2("Contacto");
  $detail = new $p("Encontrame en:");
  $socialLinks = new $ul({ class: "social-links" });
  constructor() {
    super({ id: "contact" });
    this.addChildren(this.$title, this.$detail, this.$socialLinks);
    this.addLink("https://github.com/xxxAlvaDevxxx", "GitHub");
    this.addLink("https://x.com/___DonThomas", "X");
    this.addLink("https://instagram.com/___donthomas/", "Instagram");
    this.addLink("https://www.youtube.com/@___DonThomas", "YouTube");
    this.addLink("https://www.producthunt.com/@___donthomas", "ProductHunt");
  }
  addLink(href: string, text: string) {
    this.$socialLinks.addChild(
      new $li().addChild(new $a(text, href, `${text} contact`, "_blank"))
    );
  }
}

export default new Contact();
