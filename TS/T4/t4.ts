function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args);
      console.log(`Method ${key} called with arguments: ${JSON.stringify(args)}. Returned: ${JSON.stringify(result)}`);
      return result;
    };
  
    return descriptor;
}
  
class MyClass {
    @logMethod
    myMethod(arg1: string, arg2: number): boolean {
      return true;
    }
}
  
const myClass = new MyClass();
myClass.myMethod('hello', 42);
