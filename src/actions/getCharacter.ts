
export const getCharacter = async (id: number): Promise<Character> => {
   const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
   return res.json()
}