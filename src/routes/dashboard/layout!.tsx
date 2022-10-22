import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '~/components/dashboard/navbar/navbar'
import Sidebar from '~/components/dashboard/sidebar/sidebar';

export default component$(() => {

  return (
    <div>
      <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <Navbar/>
          <Slot />
        </div>
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
