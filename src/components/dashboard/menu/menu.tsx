import { component$ } from '@builder.io/qwik';
import { useContent, Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {

    const { menu } = useContent();
    const loc = useLocation();
    const { pathname } = useLocation();

    return (
        <>
            {
                menu
                    ? menu.items?.map((item) => (
                        <>
                            <ul class="space-y-2 tracking-wide mt-8">
                                {item.items?.map((item) => (
                                    <li>
                                        <Link
                                            href={item.href}
                                            aria-label={item.href}                                                                                                                                                            
                                            class={(loc.pathname === item.href ? 'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group')}
                                            // class={{
                                            //     'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400': loc.pathname === item.href, 'px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group': !pathname.startsWith(item.href),
                                            // }}
                                        >
                                            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                                            </svg>
                                            <span
                                                class={(loc.pathname === item.href ? '-mr-1 font-medium' : 'group-hover:text-gray-700')}
                                            >{item.text}</span>
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                        </>
                    ))
                    : null
            }

            {/* <li>
                <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                    </svg>
                    <span class="-mr-1 font-medium">Dashboard</span>
                </a>
            </li> */}
        </>
    );
});
