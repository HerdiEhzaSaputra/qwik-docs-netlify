import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  const { pathname } = useLocation();

  return (
    <>
      <header class="fixed w-full bg-white z-10">
        <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true"></input>
        <nav class="w-full border-b bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
          <div class="container m-auto px-6 md:px-12 lg:px-6">
            <div class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
              <div class="w-full flex justify-between lg:w-auto">
                <a href="/" aria-label="logo">
                  <QwikLogo />
                </a>

                <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                  <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                  <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                </label>
              </div>

              <div hidden class="w-full bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex">
                <div class="block w-full lg:items-center lg:flex">
                  <ul class="space-y-6 pb-6 tracking-wide font-medium text-gray-600 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
                    <li>
                      <a href="/product" class={{ 'block md:px-3 transition hover:text-green-700 text-green-400': pathname.startsWith('/product'), 'block md:px-3 transition hover:text-sky-700': !pathname.startsWith('/product') }}>
                        <span>Product</span>
                      </a>
                    </li>
                    <li>
                      <a href="/use-cases" class={{ 'block md:px-3 transition hover:text-green-700 text-green-400': pathname.startsWith('/use-cases'), 'block md:px-3 transition hover:text-sky-700': !pathname.startsWith('/use-cases') }}>
                        <span>Use Cases</span>
                      </a>
                    </li>
                    <li>
                      <a href="/integrations" class={{ 'block md:px-3 transition hover:text-green-700 text-green-400': pathname.startsWith('/integrations'), 'block md:px-3 transition hover:text-sky-700': !pathname.startsWith('/integrations') }}>
                        <span>Integrations</span>
                      </a>
                    </li>
                    <li>
                      <a href="/docs" class={{ 'block md:px-3 transition hover:text-green-700 text-green-400': pathname.startsWith('/docs'), 'block md:px-3 transition hover:text-sky-700': !pathname.startsWith('/docs') }}>
                        <span>Docs</span>
                      </a>
                    </li>
                    <li>
                      <a href="/about-us" class={{ 'block md:px-3 transition hover:text-green-700 text-green-400': pathname.startsWith('/about-us'), 'block md:px-3 transition hover:text-sky-700': !pathname.startsWith('/about-us') }}>
                        <span>About Us</span>
                      </a>
                    </li>
                  </ul>

                  <ul class="border-t space-y-2 pt-2 lg:space-y-0 lg:space-x-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l lg:items-center lg:flex">
                    <li>
                      <button type="button" title="Start buying" class="w-full py-3 px-6 rounded-md text-center transition active:bg-sky-200 focus:bg-sky-100 sm:w-max">
                        <span class="block text-cyan-600 font-semibold">
                          Sign in
                        </span>
                      </button>
                    </li>

                    <li>
                      <button type="button" title="Start buying" class="w-full py-3 px-6 rounded-md text-center transition bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-sky-600 sm:w-max">
                        <span class="block text-white font-semibold">
                          Try it for free
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
});
