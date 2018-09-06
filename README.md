# Overview

Part 1 - Simple Props - TitleHeader
  - Create `TitleHeader` component class + import into App
  - Pass `theTitle` as props

Part 2 - Map Array of Objects to Components - Space Cadets
  - create `SpaceCadet` component class + import to app
  - import `peopleInSpace` from `src/data/datasource.js`
  - map over `peopleInSpace` array of objects and return array of SpaceCadet components. Pass _name_ property to each `<SpaceCadet>`

Part 3 - Map Array to Components + Conditional Render - LaunchListing
    - create `LaunchListing` component class + import to app
    - import `spaceLaunches` from `src/data/datasource.js`
    - map over `spaceLaunches` array of objects and return array of SpaceCadet components. Pass _vehicle_, _date_, _country_ property to each `<LaunchListing>`
    - In `LaunchListing` component, conditionally       className `'launch--usa'` if the _country_ prop is 'USA'.
