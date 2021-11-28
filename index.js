/**A function to create brand new store */
function createStore() {
  /** The store should have 4 parts
   * 1. The state
   * 2. Get the state
   * 3. Listen to changes on the state
   * 4. Update the state
   */

  let state = {};
  const listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return {
    getState,
    subscribe,
  };
}

const store = createStore();
store.subscribe(() => console.log("The state has been updated"));
