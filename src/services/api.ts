// Types
import { Sides, Side } from 'types';

// Services
import http from './http';

const fecthPeople = async (id: Side): Promise<Side> => {
  await http.get(`people/${id}`);
  return id;
};

const fetchSide = async (): Promise<Side> => {
  const fetchDark = fecthPeople(Sides.dark);
  const fetchLight = fecthPeople(Sides.light);

  const side = await Promise.race<Side>([fetchLight, fetchDark]);

  return side;
};

export { fecthPeople, fetchSide };
