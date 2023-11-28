# Passing Functions as Props

## Overview

In the last class, you learned how to pass information from a parent component into a child component through `props`. For this class, we are going to pass functions through the `props` as well. We are also going to display a nested component using `.map` rather than hard-coding each one individually.

## Class Outline

- Warm-up exercise
- Review code challenges
- Introduction of the code challenge topic
- Code review of lab assignment
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Parent Component
- Child Component
- Spread Operator

#### Execute

- Be able to pass functions from a parent component to a child component
- Understand the spread operator
- Understand `.map` and how to use it to render data in a React application

## Notes

1. How can a child component update the state of a parent component?

1. How does a parent component send a function into a child component?

1. Using React-Bootstrap, how do you determine if a modal is open or closed?

1. Allowing the child component to update the state in the parent component:

  - Step 1. send a function into the child component that updates the state in the parent component

  ```javaScript
  function Parent() {
    const [name, setName] = useState('bob);

    function updateName(newName) {
      setName(newName);
    }

    return(
      <Child updateName={updateName}>
    )
  }
  ```

  - Step 2. invoke that function from the props in the child component
  ```javaScript
  function Child(props) {

    const [childName. setChildName] = useState('');

    // this function calls the function that the parent component send us with the new name as an argument
    function updateChildName() {
      props.updateName(childName);
    }

    render(){
      return(
        <>
          <form onSubmit={updateChildName}>
            <label>What is your new name?</label>
            <input onChange={() => setChildName(e.target.value)} />
          </form>
        </>
      )
    }
  }
  ```

  - Step 3. The invoked function from the child component will update the name in the parent component and tada! Your child component has essentially changed the state of your parent component.
