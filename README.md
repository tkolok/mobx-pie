# MobX Pie
This page was created to help you use [React][react] + [TypeScript][typescript] + [MobX][mobx] combo easy... as pie.

## Why? What is the purpose?
I read a lot of topics about [MobX][mobx].
So much people said the biggest problem with it was the freedom. 
It doesn't say anything how write code with it - just use it as you want!
It sounds good, but if you have a big group and a big project everybody will use it as he/she would like and after that
your code will be just a big spaghetti code.
So the purpose of this page is adding struct and logic how to use this really good framework.
I hope it will be helpful!

## Structure
I try to use MVC pattern in my *MobX pie* applications.
Because of [MobX][mobx] you don't need to bind your model to the controller: view update happens automatically.
This means our models are controllers, too.
These applications have 3 folders.
Classes/interfaces mean models and self-handled controllers, components mean view and stores mean root controllers (I
explain it later).
Our applications are based on classes.
So if you create a class and you create a view for it.
So simple, right?
I recommend to start names of interfaces with 'I', components with 'C'.
It helps to you distinguish your files/objects.
For example you have a Todo class.
With this name convention you can find easily the connected component *(CTodo)* and interface *(ITodo)*.

```
src
├─classes
├─components
└─stores
```

### Classes
Here you can find TypeScript classes and interfaces.
I suggest you to create folders for every big part of your application.
For example if you have a dashboard, a user page, etc. then create sub-folders for them.
It will separate your classes.
- File format: `ts` *(if there is any function which returns `JSX.Element` it can be `tsx`)*

**Example:**
```typescript jsx
import {observable} from 'mobx';

export interface ITodo {
    completed: boolean;
    text: string;
}

class Todo implements ITodo {
    @observable
    public completed: boolean = false;
    @observable
    public text: string = '';

    constructor(text) {
        this.text = text;
    }

    public changeCompleted(): void {
        this.completed = !this.completed;
    }
}

export default Todo;
```

As you can see I created an interface for the class.
It is not recommended but it can be useful when your [promises][promise] returns an object with the same properties.
If it is needed, you can create a constructor for your class with the given interface parameter.
Use [`@observable`][observable] decorator on those properties which will appear on the view.
When one of these properties will change it will automatically on view, too.
It is not important to add a default value to properties but I suggest it.
If you call an array function on an undefined property then your app will throw an error.
In functions of these classes try to avoid modify parameters, modify just the given object.

### Components
Here you can find React components/templates.
The inner hierarchy of this folder follows DOM hierarchy.
If a component is child of an other component in the DOM, then create a folder in the folder of parent component.
For reusable components create a common folder.
- File format: `tsx`

**Example:**
```typescript jsx
import * as React from 'react';
import {observer} from 'mobx-react';
import Todo from '../interfaces/Todo';

@observer
class CTodo extends React.Component<{todo: Todo}, any> {
    public render(): JSX.Element {
        const todo: Todo = this.props.todo;
        return (
            <li onClick={() => todo.changeCompleted()}>
                {todo.text}
                {todo.completed ? ' (Completed)' : ''}
            </li>
        );
    }
}

export default CTodo;
```

It is the view.
Always extends [`React.Component`][component].
As you can see it needs 2 generic variables.
First one is [`props`][props].
It is an object which contains that class to which we would like to bind the view.
You can add more properties to this object if needed.
In the body of class you can refer to these properties as `this.props.<name>`.
The second means the [`state`][state].
I didn't meet any case when I had to add an object as second parameter instead of `any`.
If your `props` has a lot of properties then create an interface for it inside the given file.

```typescript jsx
interface Props {
    a: MyObj1;
    b: MyObj2;
    /* ... */
}

class CMy extends React.Component<Props, any> {
    /* ... */
}
```

Don't forget to add [`@observer`][observer] decorators for those components which have changeable props.
This decorator make the magic of automation.
If you have any view related properties (boolean which define accordion is open, or string which store sorting value,
etc.) then add [`@observable`][observable] decorator to these properties.

### Store
Here you can find MobX stores.
No subfolders are necessary here.
There aren't so much stores in an application so they stay in one big folder.
- File format: `ts` *(if there is any function which returns `JSX.Element` it can be `tsx`)*

**Example:**
```typescript jsx
import {observable} from 'mobx';
import Todo from '../interfaces/Todo';

class Store {
    @observable
    public todos: Todo[] = [];

    public addTodo(text: string) {
        this.todos.push(new Todo(text));
    }
}

const store: Store = new Store();
export default store;
```

Stores are simple TypeScript classes but properties of them may have [`@observable`][observable] decorator.
Stores are root of object tree and they store properties of view.
So if you can't add something to an other object then put it into stores.
You can store in stores fetching variables for loading or list of your items.
Also you can add functions to handle them.
So stores aren't real controllers but they control main objects.
Unfortunately [MobX][mobx] doesn't support [`@observable`][observable] static properties so I suggest create a new
instance by your class and export it as default.
Try to minimize to import/use stores.
They are just roots so try to add control to objects and avoid usage of stores in classes.

## Examples
To check examples run below commands in terminal:
```text
npm install
npm run build
```
After that just open `*/src/index.html`.
Enjoy!

[component]: https://reactjs.org/docs/react-component.html
[mobx]: https://mobx.js.org/
[observable]: https://mobx.js.org/refguide/observable-decorator.html
[observer]: https://mobx.js.org/refguide/observer-component.html
[package]: https://docs.npmjs.com/files/package.json
[promise]: https://www.promisejs.org/
[props]: https://reactjs.org/docs/components-and-props.html
[react]: https://reactjs.org/
[state]: https://reactjs.org/docs/state-and-lifecycle.html
[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
[typescript]: https://www.typescriptlang.org/
[webpack]: https://webpack.js.org/configuration/
