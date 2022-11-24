import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '@/layout';

const sidebarMenu = [
  { title: 'Home', link: '/' },
  { title: 'Messages', link: '?section=messages' },
  { title: 'Settings', link: '?section=settings' },
];
export default function ReviewerDashboard() {
  const router = useRouter();
  console.log('router', router);
  return (
    <Layout showHero={false}>
      <section className="container mx-auto flex h-screen py-4">
        <aside className="w-2/12 bg-gray-200 px-4">
          <ul>
            {sidebarMenu.map((item) => (
              <li
                key={item.title}
                className="my-5 w-full border-b border-white font-bold hover:border-blue-500 hover:text-white"
              >
                <Link href={`/cv/reviewer/dashboard${item.link}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="w-10/12"></div>
      </section>
    </Layout>
  );
}
