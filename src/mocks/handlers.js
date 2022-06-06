import { rest } from 'msw';
import { URL } from '../api';

export const MOCKED_GRADES = ['one', 'two', 'three'];

export const handlers = [
  rest.get(URL, (_, res, ctx) => 
    res(
      ctx.status(200),
      ctx.json({ grades: MOCKED_GRADES }),
    )),
]