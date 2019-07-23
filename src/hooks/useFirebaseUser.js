import React, { useEffect } from "react";

/**
 * Stole some stuff from Sammy, but its not really stealing cause he told me to use this
 */
function usePersistentState(storage, key) {
    const initialValue = '';
  // create store by fetching from store or using default
  const [state, setState] = React.useState(
    storage.getItem(key) || initialValue
  );

  useEffect(() => storage.setItem(key, state), [state, key, storage]);
  return [state, setState];
}

function useLocalStorageState(key, initialValue) {
  return usePersistentState(localStorage, key, initialValue);
}

function useSessionStorageState(key, initialValue) {
  return usePersistentState(sessionStorage, key, initialValue);
}

export {useSessionStorageState, useLocalStorageState};
