import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="pt-[6.5rem] pb-20 md:pt-[5rem]">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
