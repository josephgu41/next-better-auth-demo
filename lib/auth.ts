import { betterAuth } from 'better-auth';
import { Pool } from 'pg';
import '@/lib/envConfig';

export const auth = betterAuth({
  database: new Pool({
    // connection options
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    'http://localhost:3000',
    process.env.BETTER_AUTH_URL!
  ]
});
