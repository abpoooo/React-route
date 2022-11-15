## How virtual DOM is rendered

    ONLY render the necessary component where the state (props) changes

React.memo (useMemo, useCallback)

## React's component lifecycle

1. Initialization/mounting
2. updating
3. Unmounting\
   https://itnext.io/reacts-component-lifecycle-6c13e09d10ad

## useEffect (useLayoutEffect)

useEffect (callback function, [dependency])

side effects:

1. timers (setInterval, setTimeout)-cleanup
2. add event listener-clean up
3. fetch data
4. updating/measuring DOM
5. set/get value from your localStorage
6. ...
   Some effects need clean up to avoid memory leak

### dependency []

1. when the dependency is empty [], componentDidMount
2. when there is no dependency, componentDidMount + componentDidUpdate
3. when the dependency is not empty, callback run is depending on the changes of dependencies
