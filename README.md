# React Native FlatList Rendering Issue with Dynamic Styles

This repository demonstrates a common issue in React Native involving the `FlatList` component and dynamic styling. When item styles change rapidly, visual glitches or incorrect rendering can occur. This is often due to the way `FlatList` handles key updates and re-renders.

## Problem

The provided `bug.js` file shows an example of this problem.  A `FlatList` renders items with background colors determined by a randomly changing value within the items. The frequent updates cause rendering inconsistencies.

## Solution

The `bugSolution.js` file provides a solution. This involves using `useMemo` to avoid unnecessary re-renders based on the style value and using `ItemSeparatorComponent` to add a consistent element between items.