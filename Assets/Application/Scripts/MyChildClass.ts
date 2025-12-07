import { MyBaseClass } from "./MyBaseClass";

@component
export class MyChildClass extends MyBaseClass {

    public hello(): void {
        print("Hello from MyChildClass");
    }
}
