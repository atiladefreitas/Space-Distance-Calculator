export async function FetchSpaceships() {
  const url = import.meta.env.VITE_API_URL;

  console.log('katchau', url);

  const response = await fetch(`${url}/starships/`);

  if (response.status === 200) {
    return await response.json();
  } else {
    return null;
  }
}
