let nextComId = 0
export const addCom = () => ({
  type: 'ADD_COM',
  id: nextComId++
})
