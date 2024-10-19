export async function getPersonName(id) {
  const url = `https://swapi.dev/api/people/${id}/`;
  const result = await fetch(url);
  const person = await result.json();

  return person;
}
