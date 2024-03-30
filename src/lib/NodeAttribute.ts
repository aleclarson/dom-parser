export interface NodeAttributeProps {
  name: string;
  value?: string;
}

export class NodeAttribute {
  name: string;

  value: string | undefined;

  constructor({ name, value }: NodeAttributeProps) {
    this.name = name;
    this.value = value;
  }
}
