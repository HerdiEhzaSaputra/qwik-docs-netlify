import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '@/components/docs/navbar/navbar';
import OnThisPage from '@/components/docs/on-this-page/on-this-page';
import Sidebar from '@/components/docs/sidebar/sidebar';
import styles from './docs.css';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="flex h-screen overflow-hidden">

      <Sidebar/>

      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Navbar/>

        <main class="flex">
          
          <div class="flex-auto w-full max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
            
            <article class="">
              
              <Slot />

            </article>

          </div>

          <OnThisPage/>

        </main>

      </div>

    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
