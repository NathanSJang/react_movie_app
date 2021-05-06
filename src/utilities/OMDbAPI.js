const url = `http://www.omdbapi.com/?s=star wars&apikey=f135536d`

export async function getMoives () {
  return await (await fetch(url)).json()
}