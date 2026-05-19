const API_URL = 'http://localhost/recycle-api/router/router.php'

export async function callApi(functionName, data = {}) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ function: functionName, data }),
  })
  return response.json()
}
