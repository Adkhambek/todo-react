import { BodyType } from '../types';

async function fetchData(dir: string, method: string, body: BodyType) {
  const url = `http://localhost:3000/api/v1/${dir}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status === 500) {
        throw Error(response.statusText);
      }

      const result = await response.json();
      throw Error(result.message);
    }

    const result = await response.json();

    return {
      ok: true,
      result,
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.message,
    };
  }
}

export default fetchData;
