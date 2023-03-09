// Singleton: Só pode existir uma instância dessa classe - GoF
export class Database{
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void{
    console.log(`O usuário ${this.user} está conectado no ${this.host} e possui senha: ${this.password}`);
  }
  // Factory method p/ criar novos objetos
  static getDatabase(host: string,
    user: string,
    password: string,): Database{
    if(Database.database){
      console.log("Já criada");
      return Database.database;
    }
    console.log("Nova instância");
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database1 = Database.getDatabase("localhost", "root", "12345678");
database1.connect();

const database2 = Database.getDatabase("localhost", "root", "12345678");
database2.connect();

console.log(database1 === database2);
