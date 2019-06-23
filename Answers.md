1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.concat() .map() .filter()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are functions that return objects.
reducers are basically if else statements that reduce to which functions to run
store is state that can be accessed globally

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that should be globally accessed
Component state is more specific state that may only be needed in a few components

1.  What is middleware?

middleware directs users where they need to go based on information they give us

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a function within a function that allows us to dispatch information

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
