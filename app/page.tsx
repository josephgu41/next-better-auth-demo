import SignOutButton from '@/components/sign-out-button';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) redirect('/signin');

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {session?.user && <SignOutButton />}
    </>
  );
}
