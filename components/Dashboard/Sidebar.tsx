import Link from 'next/link';
import { useRouter } from 'next/router';

import sidebarMenu from '@/json/sidebar.json';
import useNav from '@/hooks/useNav';
import getInitials from '@/lib/getInitials';

export default function Sidebar() {
  const { authData, authStatus } = useNav();
  const router = useRouter();
  const routerPath = router.asPath;
  const getActiveRoute = (routeLink: string) =>
    routerPath.includes(routeLink) ? 'font-bold text-blue-500' : '';

  return (
    <aside className="w-2/12 bg-gray-200 px-4 relative">
      <ul>
        {sidebarMenu.map((item) => {
          const activeRoute = getActiveRoute(item.link);
          return (
            <li
              key={item.title}
              className={`${activeRoute} my-5 w-full border-b border-white  hover:border-blue-500 hover:text-white`}
            >
              <Link href={`/cv/reviewer/dashboard${item.link}`}>
                {item.title}
              </Link>
            </li>
          );
        })}
        {authStatus === 'success' && authData !== null && (
          <div className="icon bg-skyblue mx-auto flex h-14 bottom-24 left-16 absolute w-14 items-center justify-center rounded-full text-2xl font-bold text-white">
            {getInitials(authData)}
          </div>
        )}
      </ul>
    </aside>
  );
}
