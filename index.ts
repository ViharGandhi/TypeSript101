let greetings:string = "Hello world"// typecasting
let num:number = 3;

console.log(typeof(num))
console.log(greetings)

// interface types


interface Users{
    name:string,
    id:number
}

const user:Users={
    name:"Vihar",
    id:23, 
}

let thing:any = "Vihar"

thing = 2;

type mybool = true | false


let newans : mybool = false

type colors = "red" | "blue"

let newcolor:colors = "red"

console.log(user)

function wrapitinarray(obj:string|string[]){
    if(typeof(obj)==="string"){
        return [obj]
    }
    return obj
}
const myarray = wrapitinarray(["vihar"])

type StringArray = Array<string>;


const newstrarr:StringArray = ["vihar","jash"]
console.log(newstrarr)
console.log(myarray)

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
  
  interface Book {
    title: string;
    author: string;
  }
  
  class BookBackpack implements Backpack<Book> {
    private book: Book | null = null;
  
    add(book: Book): void {
      this.book = book;
    }
  
    get(): Book {
      if (this.book === null) {
        throw new Error("No book in the backpack.");
      }
      return this.book;
    }
  }
  
  // Usage
  const myBackpack = new BookBackpack();
  myBackpack.add({
    title: "The Catcher in the Rye",
    author: "J.D. Salinger"
  });
  const book = myBackpack.get();
  console.log(book);
  