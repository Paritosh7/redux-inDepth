/** Library code
 * A function to create brand new store */
function createStore() {
  /** The store should have 4 parts
   * 1. The state
   * 2. Get the state
   * 3. Listen to changes on the state (subscribing and unsubscribing to changes)
   * 4. Update the state
   */

  // state
  let state = {};
  const listeners = [];
  // getting the state
  const getState = () => state;

  // listening to state
  const subscribe = (listener) => {
    listeners.push(listener);
    // Returning a function to unsubscribe
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

/** App Code
 * Reducer is a pure function
 */
function reducer(state = [], action) {
  if (action.type === "ADD_TODO") {
    state = state.concat([action.todo]);
  }

  return state;
}

const store = createStore();
const unsubscribe = store.subscribe(() =>
  console.log("The state has been updated")
);
unsubscribe();
