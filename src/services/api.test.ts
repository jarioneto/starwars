// Third party
import MockAdapter from 'axios-mock-adapter';

// Services
import { fecthPeople, fetchSide } from './api';
import http from './http';

const axiosMock = new MockAdapter(http);

describe('API service', () => {
  test('Should fetch people', async () => {
    axiosMock.onGet('people/1').reply(200);

    const response = await fecthPeople(1);

    expect(response).toBe(1);
  });

  test('Should fetch people with error', async () => {
    axiosMock.onGet('people/1').reply(400);

    let response;

    try {
      await fecthPeople(1);
    } catch (error) {
      response = error;
    }

    expect(response).toEqual(new Error('Request failed with status code 400'));
  });

  test('Should fetch side', async () => {
    axiosMock.onGet('people/1').reply(200);
    axiosMock.onGet('people/4').reply(200);

    const response = await fetchSide();

    expect([1, 4]).toContain(response);
  });

  test('Should fetch side with error', async () => {
    axiosMock.onGet('people/1').reply(400);
    axiosMock.onGet('people/4').reply(400);

    let response;

    try {
      await fetchSide();
    } catch (error) {
      response = error;
    }

    expect(response).toEqual(new Error('Request failed with status code 400'));
  });
});
