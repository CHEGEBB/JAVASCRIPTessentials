//TypeScript adds types and visibility modifiers to JavaScript classes.
//Members: Types
//TypeScript adds types to class members, including properties and methods.
class Person {
    name: string;
  }
        
  const person = new Person();
  person.name = "Jane";
  
  console.log(person);
//Members: Visibility Modifiers
//TypeScript adds visibility modifiers to class members, including properties and methods.
// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
class Person {
    private name: string;//this property is private
  
    public constructor(name: string) {//this constructor is public
      this.name = name;
    }
  
    public getName(): string {//this method is public
      return this.name;
    }
  }
        
  const person = new Person("Jane");
  
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
  //Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
class Person {
    // name is a private member variable
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Jane");
  
  console.log(person.getName());
//Inheritance
// TypeScript supports class inheritance

// A class can inherit from another class by using the extends keyword.
// The derived class can access the properties and methods of the base class.
// The derived class can override the properties and methods of the base class.
// The derived class can call the constructor of the base class using the super keyword.
class Person {
    protected name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  class Employee extends Person {
    private department: string;
  
    public constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  
    public getElevatorPitch(): string {
      return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
  }
        
  const employee = new Employee("Jane", "Sales");
  
  console.log(employee.getElevatorPitch());
  console.log(employee.getName());