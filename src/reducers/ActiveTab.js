//State argument is not app state, only the state is reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case "TAB_SELECTED":
      return action.payload;
  }

  return state;
}
