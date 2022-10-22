import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main class="pt-[6.5rem] pb-20 md:pt-[5rem]">
        <Slot />
      </main>
    </>
  );
});
