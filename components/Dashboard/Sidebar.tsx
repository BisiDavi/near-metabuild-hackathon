import Link from 'next/link';
import { useRouter } from 'next/router';

const sidebarMenu = [
  { title: 'Home', link: '#' },
  { title: 'Messages', link: '?section=messages' },
  { title: 'Settings', link: '?section=settings' },
];

export default function Sidebar() {
  const router = useRouter();
  const routerPath = router.asPath;
  const getActiveRoute = (routeLink: string) =>
    routerPath.includes(routeLink) ? 'font-bold text-blue-500' : '';

  return (
    <aside className="w-2/12 bg-gray-200 px-4">
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
      </ul>
    </aside>
  );
}
