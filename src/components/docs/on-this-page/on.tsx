
import { component$ } from '@builder.io/qwik';

export default component$(() => {

    return (
        <aside
            class="fixed top-[3.5rem] w-64 h-screen shadow-xl px-4 right-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">

            <nav class="sticky top-[4.5rem] text-base lg:text-sm">
                <div class="-ml-0.5 w-full h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
                    <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this
                        page</h5>
                    <ul class="text-slate-700 text-sm leading-6">
                        <li><a href="#configuring-custom-screens"
                            class="block py-1 font-medium text-sky-500 dark:text-sky-400">Configuring
                            custom screens</a></li>
                        <li class="ml-4"><a href="#overriding-the-defaults"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Overriding the defaults</a></li>
                        <li class="ml-4"><a href="#overriding-a-single-screen"
                            class="group flex items-start py-1 text-sky-500 dark:text-sky-400"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Overriding a single screen</a></li>
                        <li class="ml-4"><a href="#adding-larger-breakpoints"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Adding larger breakpoints</a></li>
                        <li class="ml-4"><a href="#adding-smaller-breakpoints"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Adding smaller breakpoints</a></li>
                        <li class="ml-4"><a href="#using-custom-screen-names"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Using custom screen names</a></li>
                        <li><a href="#advanced-configuration"
                            class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Advanced
                            configuration</a></li>
                        <li class="ml-4"><a href="#max-width-breakpoints"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Max-width breakpoints</a></li>
                        <li class="ml-4"><a href="#fixed-range-breakpoints"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Fixed-range breakpoints</a></li>
                        <li class="ml-4"><a href="#multi-range-breakpoints"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Multi-range breakpoints</a></li>
                        <li class="ml-4"><a href="#custom-media-queries"
                            class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg
                                width="3" height="24" viewBox="0 -9 3 24"
                                class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>Custom media queries</a></li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
});
