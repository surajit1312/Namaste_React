import React from "react";
import ReactDOM from "react-dom/client";

// React Element (Object) => {React} => HTMLElement
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "This is H1 tag from React Core!"
);

// JSX => {Babel} => React Element (Object) => {React} => HTMLElement
// React Element (JSX)
const jsxHeading = (
  <div>
    <h1 className="heading" tabIndex="1">
      JSX React Element 1!
    </h1>
    <h2 className="sub-heading">JSX React Element 2!!</h2>
  </div>
);

// React Functional Component
const ReactTitleComponent = () => (
  <h1 className="title">Title from React Functional Component 🚀</h1>
);

// React Functional Component
const ReactFunctionalComponent1 = () => (
  <h3 className="title">React Functional Component 1 𝌔</h3>
);

// React Functional Component
const ReactFunctionalComponent2 = () => (
  <h3 className="title">React Functional Component 2 𝌔</h3>
);

// React Functional Component

// Using Component Composition
const ReactHeaderComponent = () => {
  return (
    <div className="container">
      {jsxHeading}
      {/* Below are the ways we can insert JSX components */}
      <ReactTitleComponent />
      <ReactFunctionalComponent1></ReactFunctionalComponent1>
      {ReactFunctionalComponent2()}
      <h2 className="heading">
        This is the heading from React Functional Component 🚀
      </h2>
      <div>{100000}</div>
      <div>{300 + 200}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
root.render(<ReactHeaderComponent />);
