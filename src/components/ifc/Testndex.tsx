import * as OBC from "openbim-components";
export class HelloWorldComponent extends OBC.Component<string> {
  enabled = true;

  private readonly _message = "Hello";

  constructor(components: OBC.Components) {
    super(components);
  }

  get() {
    return this._message;
  }

  greet(name: string) {
    const message = `${this._message} ${name}!`;
    console.log(message);
  }
}
