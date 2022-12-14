import { component$ } from '@builder.io/qwik';

export default component$(() => {

    return (
        <>
            <header
                class="sticky top-0 z-50 w-full flex items-center justify-between px-3 py-2 bg-white">

                <div class="relative" data-headlessui-state="open">
                    <button
                    class="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5"
                    id="headlessui-menu-button-6" type="button" aria-haspopup="true" aria-expanded="true"
                    data-headlessui-state="open" aria-controls="headlessui-menu-items-7">v3.2.0<svg width="6"
                        height="3" class="ml-2 overflow-visible" aria-hidden="true">
                        <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round"></path>
                    </svg></button>
                    {/* <div class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5"
                        aria-labelledby="headlessui-menu-button-6" id="headlessui-menu-items-7" role="menu"   
                        data-headlessui-state="open"><span
                            class="flex items-center justify-between px-3 py-1 text-sky-500 dark:text-sky-400"
                            id="headlessui-menu-item-57" role="menuitem" aria-disabled="true"
                            data-headlessui-state="disabled">v3.2.0<svg width="24" height="24" fill="none"
                                aria-hidden="true">
                                <path d="m7.75 12.75 2.25 2.5 6.25-6.5" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></span><a href="https://v2.tailwindcss.com" class="block px-3 py-1"
                                id="headlessui-menu-item-58" role="menuitem" 
                                data-headlessui-state="">v2.2.19</a><a href="https://v1.tailwindcss.com"
                                    class="block px-3 py-1" id="headlessui-menu-item-59" role="menuitem" 
                                    data-headlessui-state="">v1.9.6</a><a href="https://tailwindcss-v0.netlify.app/"
                                        class="block px-3 py-1" id="headlessui-menu-item-60" role="menuitem" 
                                        data-headlessui-state="">v0.7.4</a>
                                </div> */}
                </div>

                <div class="flex right-0">
                    <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800 mr-12">
                        <label class="sr-only" id="headlessui-listbox-label-8"
                            data-headlessui-state="">Theme</label><button type="button" id="headlessui-listbox-button-9"
                                aria-haspopup="true" aria-expanded="false" data-headlessui-state=""
                                aria-labelledby="headlessui-listbox-label-8 headlessui-listbox-button-9"><span
                                    class="dark:hidden"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        class="stroke-slate-400 dark:stroke-slate-500"></path>
                                    <path
                                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                        class="stroke-slate-400 dark:stroke-slate-500"></path>
                                </svg></span><span class="hidden dark:inline"><svg viewBox="0 0 24 24" fill="none"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                        class="fill-transparent"></path>
                                    <path
                                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                        class="fill-slate-400 dark:fill-slate-500"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                        class="fill-slate-400 dark:fill-slate-500"></path>
                                </svg></span></button><a href="https://github.com/tailwindlabs/tailwindcss"
                                    class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"><span
                                        class="sr-only">Tailwind CSS on GitHub</span><svg viewBox="0 0 16 16" class="w-5 h-5"
                                            fill="currentColor" aria-hidden="true">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg></a></div>

                    <div class="w-64 bg-white dark:bg-slate-900 relative pointer-events-auto">
                        <button type="button"
                            class="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"><svg
                                width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
                                <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>Quick search...<span class="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl
                                K</span></button>
                    </div>
                </div>
            </header>
        </>
    );
});
