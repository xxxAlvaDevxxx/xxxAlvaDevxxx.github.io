import { $h1, $header, $nav, $ul } from "xxx-element/elementHTML";

class Header extends $header {
  $nav = new $nav();
  $ul = new $ul();
  $title = new $h1("Portafolio de Don Thomas");
  constructor() {
    super();
    
    this.addChildren(
      this.$nav.addChild(this.$ul), 
      this.$title
    );
  }
}

export default new Header();
