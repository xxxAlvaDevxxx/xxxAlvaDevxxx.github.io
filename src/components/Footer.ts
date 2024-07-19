import { $footer, $p } from "xxx-element/elementHTML";

class Footer extends $footer {
    content = new $p("")
    constructor() {
        super()
        this.content.element.innerHTML = "&copy; 2024 Don Thomas. Todos los derechos reservados."
        this.addChild(this.content)
    }
}

export default new Footer()