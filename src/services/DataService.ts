// src/services/ConcreteDataService.js
import { injectable } from 'inversify';

// DataService.ts
export interface IDataService {
  
  getData() : string;
  getValue() : number;
  setValue(value: number):void;

}


@injectable()
export class ConcreteDataService implements IDataService{
  private _value: number = 0;
  
  constructor(){
    console.log("ConcreteDataService")
  }
  // Getter method
    getValue(): number {
      return this._value;
    }

    // Setter method
   setValue(newValue: number) {
    console.log("Setting myValue");
      this._value = newValue;
    
  }
  getData() {
    return 'Data from ConcreteDataService1';
  }
}




// @injectable()
// export class ConcreteDataService implements DataService {
//   async fetchData(): Promise<string[]> {
//     // Fetch data from an API
//     return ['item1', 'item2', 'item3'];
//   }
//    sayHello() {
//     return "hello";

//    }
// }
