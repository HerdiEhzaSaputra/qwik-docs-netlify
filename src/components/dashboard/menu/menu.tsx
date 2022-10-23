import { component$ } from '@builder.io/qwik';
import { useContent, Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {

                           const { menu, headings } = useContent();

    const contentmMenu = headings?.filter((h) => h.level === 2) || [];
    const contentmMenuChild = headings?.filter((h) => h.level === 3) || [];
    const loc = useLocation();

    return (
        <>
            {menu
                ? menu.items?.map((item) => (
                    <>
                        <li class="mt-4">
                            <button type="button" 
                                class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                                aria-controls={item.text} 
                                data-collapse-toggle={item.text}
                            >
                                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{item.text}</span>
                                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id={item.text} class="hidden py-2 space-y-2">
                                {item.items?.map((item) => (
                                    <>
                                        <button type="button" 
                                            class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                                            aria-controls={item.text} 
                                            data-collapse-toggle={item.text}
                                        >
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{item.text}</span>
                                            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <ul id={item.text} class="hidden py-2 space-y-2">
                                            {item.items?.map((item) => (
                                                    <li>
                                                        <Link
                                                            class={(loc.pathname === item.href ? 'block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400' : 'block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300')}
                                                            href={item.href}
                                                        >
                                                            {item.text}
                                                        </Link>
                                                    </li>
                                            ))}
                                        </ul>
                                    </>
                                ))}
                            </ul>
                            {/* <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                {item.items?.map((item) => (
                                    <li>
                                        <Link
                                            class={(loc.pathname === item.href ? 'block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400' : 'block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300')}
                                            href={item.href}
                                        >
                                            {item.text}
                                        </Link>
                                        <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                            {item.items?.map((item) => (
                                                <li>
                                                    <Link
                                                        class={(loc.pathname === item.href ? 'block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400' : 'block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300')}
                                                        href={item.href}
                                                    >
                                                        {item.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul> */}
                        </li>
                    </>
                ))
                : null}
        </>
    );
});
