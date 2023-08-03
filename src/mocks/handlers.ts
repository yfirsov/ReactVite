import { rest } from 'msw';
import { nanoid } from '@reduxjs/toolkit';

const token = nanoid();

export const handlers = [
  rest.get('/protected', (req, res, ctx) => {
    const headers = req.headers.all();
    if (headers.authorization !== `Bearer ${token}`) {
      return res(
        ctx.json({
          message: 'You shall not pass. Please login first.',
        }),
        ctx.status(401),
      );
    }
    return res(
      ctx.json({
        message:
          'Join us on the Reactiflux Discord server in #redux if you have any questions.',
      }),
    );
  }),
  rest.post('/login', (_req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.json({
        user: {
          firstName: 'John',
          lastName: 'Doe',
          avatarName: 'JD',
        },
        token,
      }),
    );
  }),
];
