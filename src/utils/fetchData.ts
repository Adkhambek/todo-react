import { BodyType } from '../types';
import CustomError from './CustomError';

async function fetchData(dir: string, method: string, body?: BodyType) {
  const url = `http://localhost:3000/api/v1/${dir}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status === 500) {
        throw new CustomError(response.statusText, response.status);
      }

      const result = await response.json();
      throw new CustomError(result.message, response.status);
    }

    const data = await response.json();

    return {
      ok: true,
      status: response.status,
      data,
    };
  } catch (error: any) {
    return {
      ok: false,
      status: error.status,
      message: error.message,
    };
  }
}

export default fetchData;
