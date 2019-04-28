export function undoable(reducer: any) {
  const initState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  // actions which not include in redo & undo
  const ignoreActions: any = [
    // 'EDIT_PAGE_SETTINGS',
    // 'CHANGE_WORK_SETTINGS',
    // 'FOCUS_PAGE',
    // 'FOCUS_COM'
  ]

  return function (state = initState, action: any) {
    const { past, present, future } = state
    switch (action.type) {
      case 'UNDO':
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      case 'REDO':
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      default:
        const newPresent = reducer(present, action)
        if (ignoreActions.includes(action.type)) {
          return {
            past: [...past],
            present: newPresent,
            future: []
          }
        }
        // 将其他 action 委托给原始的 reducer 处理
        if (present === newPresent) {
          return state
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }
}
