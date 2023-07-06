interface DatabaseEntity {
    id: number;
    name: string;
    description: string;
}

class MyDB implements DatabaseEntity {
    id: number;
    name: string;
    description: string;
  
    constructor(id: number, name: string, description: string) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
}

const entity = new MyDB(1, "ex1", "desc");
console.log(`${entity.id} ${entity.name} ${entity.description}`);