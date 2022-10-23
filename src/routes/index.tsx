import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Content from '@/components/index/Content';
import Feature from '@/components/index/Feature';
import Hero from '@/components/index/Hero';
import Team from '@/components/index/Team';

export default component$(() => {
  return (
    <>
      <Content />
      <Hero />
      <Feature />
      <Team />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
