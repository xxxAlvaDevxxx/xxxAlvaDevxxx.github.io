import { $a, $h2, $img, $li, $p, $section, $ul } from "xxx-element/elementHTML";
import MainFeature from "../../interfaces/MainFeature";

class Contact extends $section implements MainFeature {
  $title = new $h2("Contacto");
  $detail = new $p("Encontrame en:");
  $socialLinks = new $ul({ class: "social-links" });
  constructor() {
    super({ id: "contact" });
    this.addChildren(this.$title, this.$detail, this.$socialLinks);

    // GitHub
    this.addLink("https://github.com/xxxAlvaDevxxx", "GitHub", "GitHub-logo.svg", "GitHub logo");
    // X
    this.addLink("https://x.com/___DonThomas", "X", "X-logo.webp", "X logo");
    // Instagram
    this.addLink(
      "https://instagram.com/___donthomas/",
      "Instagram",
      "Instagram-logo.webp",
      "Instagram logo"
    );
    // YouTube
    this.addLink(
      "https://www.youtube.com/@___DonThomas",
      "YouTube",
      "YouTube-Logo.png",
      "YouTube logo"
    );
    // Product Hunt
    this.addLink(
      "https://www.producthunt.com/@___donthomas",
      "Product Hunt",
      "product-hunt-logo.avif",
      "Product Hunt logo"
    );
    // kick
    this.addLink(
      "https://kick.com/xxxalvadevxxx",
      "Kick",
      "Kick-Logo.png",
      "Kick logo"
    );
  }

  addLink(href: string, text: string, img?: string, alt?: string) {
    let $link = new $a(text, href, `${text} contact`, "_blank");

    this.$socialLinks.addChild(new $li().addChild($link));

    if (img) {
      $link.setText("");
      $link.father
        .setStyle({ background: "#333" })
        .setAttribute({ name: "title", value: text });
      $link.addChild(new $img(`../../../public/imgs/${img}`, alt ? alt : ""));
    }
  }
}

export default new Contact();
