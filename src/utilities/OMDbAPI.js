
export async function getMoives (searchVal) {
  const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=f135536d`
  console.log(searchVal)
  return await (await fetch(url)).json()
}