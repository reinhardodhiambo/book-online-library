export class Author {
  key: string;
  name: string;

  constructor(data: any) {
    this.key = data.key;
    this.name = data.name;
  }
}
