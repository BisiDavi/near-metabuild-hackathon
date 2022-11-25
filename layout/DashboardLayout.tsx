import type { PropsWithChildren } from 'react';

import Layout from '@/layout';
import Sidebar from '@/components/Dashboard/Sidebar';
import AuthLayout from '@/layout/AuthLayout';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <AuthLayout>
      <Layout showHero={false}>
        <section className="container mx-auto flex py-4">
          <Sidebar />
          <div className="w-10/12 p-4">{children}</div>
        </section>
      </Layout>
    </AuthLayout>
  );
}
