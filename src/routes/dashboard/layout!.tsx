import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '@/components/dashboard/navbar/navbar'
import Sidebar from '@/components/dashboard/sidebar/sidebar';

export default component$(() => {

  return (
    <div class="flex h-screen overflow-hidden">

      <Sidebar/>

      <div class="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">

        <Navbar/>

        <main class="overflow-y-auto py-4">
          <Slot />
        </main>

      </div>

    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
    meta: [],
  };
};
