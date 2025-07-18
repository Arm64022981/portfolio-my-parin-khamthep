import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/portfolio/homepage');
    return null;
}