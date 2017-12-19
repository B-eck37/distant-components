# Redux

## What's the problem with distant components in React?

Sharing data to distant components is easily disconnected and subject to mistakes. Slower processing times. Parent components must track data for their children that they don't need.

## What is Redux? Why/when do we use it?

Redux is a pattern that allows all data to be stored in one place where we can share data with distant components; and only the components involved with the updates will be used. It is used when you need to pass data between components and the standard react way becomes to complex (I.E - Multiple components)

## What are the steps to add Redux to a React app?

Step 1 - Read
    A. Create Store
    B. Hook up <Provider>(index.js around <App>)
    C. Hook up components using connect

Step 2 - Write
    A. Create reducer(s) with actions and action creators
    B. 

## What is a store?

The store is a library(OBJECT) of data that is used by any components that wants/needs it. 

## What is a reducer? What does the reducer do for us in Redux?

A reducer is a function that takes state and an action as parameters and returns a modified copy of state. In redux, this is the only way to modify state.

## What is immutability? Why do we use it?

Data is considered immutable when function that use the data don't mutate it but instead return a modified copy. Because this data is a reference (to an object or an array), we'll trivially be able to tell that the data has changed, without needing to dig through the object to see what exactly changed. This is useful in React to know if a component should re-render, or doesn't need to bother.

## Vocab

Action: a plain objec. All actions must have a type but the payload is optional.

Action Creator: a function that creates an action for us. For convenience, it helps us keep code DRY.

Dispatch: Sends actions to the store using this. 



