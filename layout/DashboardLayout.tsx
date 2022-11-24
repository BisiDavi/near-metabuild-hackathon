import type { PropsWithChildren } from 'react';

import Layout from '@/layout';
import Sidebar from '@/components/Dashboard/Sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Layout showHero={false}>
      <section className="container mx-auto flex h-screen py-4">
        <Sidebar />
        <div className="w-10/12">{children}</div>
      </section>
    </Layout>
  );
}
