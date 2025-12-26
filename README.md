# Present Wrapper

A 3D web experience which enables the user to practice wrapping presents. Uses soft-body physics for simulation of paper.

## Implementation

Soft body simulation of paper is built using a collection of rigid bodies connected by joints. These joints allow freedom of rotation, but remove the ability for rigid bodies to move relative to each other. With enough of these we can get a paper-like effect. I will tweak parameters of these joints to better simulate paper.

## Technologies used

### react-three-fiber

React-Three-Fiber is used to create and manage a ThreeJS scene in a declarative way using React components.

### react-three-rapier

Rapier is a physics library written in Rust. A web assembly version of the compiled Rust library is available, with JavaScript bindings available.

react-three-rapier is a library which provides react components and hooks for easily adding physics to a scene created using react-three-fiber.
