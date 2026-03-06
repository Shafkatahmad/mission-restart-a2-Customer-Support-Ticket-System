# React Concept Questions

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows developers to write HTML-like code inside JavaScript. It makes it easier to design and visualize the structure of the user interface because the markup and logic can be written together in the same file. JSX improves readability and simplifies the process of creating UI components. Although JSX looks like HTML, it is actually converted into regular JavaScript by tools like Babel before being executed in the browser.

---

## What is the difference between State and Props?

State and Props are both used to manage data in React components, but they have different roles. Props (short for properties) are used to pass data from a parent component to a child component and they are read-only, meaning the child component cannot modify them. State, on the other hand, is managed within a component and can change over time. State is typically used for data that affects how a component renders or behaves, such as user input or counters.

---

## What is the useState hook, and how does it work?

The `useState` hook is a built-in React hook that allows functional components to have and manage state. It provides a way to store and update data within a component. When `useState` is called, it returns two values: the current state value and a function used to update that state. When the update function is called, React re-renders the component with the new state value. This allows developers to build dynamic and interactive user interfaces.

---

## How can you share state between components in React?

State can be shared between components by lifting the state up to their closest common parent component. The parent component stores the state and then passes it down to child components through props. This allows multiple components to access and use the same data while keeping the state management centralized. This pattern is commonly known as “lifting state up” in React and helps maintain a predictable data flow in an application.

---

## How is event handling done in React?

Event handling in React is similar to handling events in HTML but follows JavaScript naming conventions using camelCase. Instead of using lowercase event names like `onclick`, React uses names like `onClick`. Event handlers are written as JavaScript functions and passed to elements as props. When a user interacts with the UI, such as clicking a button or submitting a form, the associated event handler function is triggered and executes the desired logic.
