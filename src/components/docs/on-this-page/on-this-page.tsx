import { useContent, useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {

    const { headings } = useContent();
    // const contentHeadings = headings?.filter((h) => h.level === 2 || h.level === 3) || [];
    const contentHeadings = headings?.filter((h) => h.level === 2) || [];
    const contentHeadingsChild = headings?.filter((h) => h.level === 3) || [];

    const { pathname } = useLocation();
    const editUrl = `#update-your-edit-url-for-${pathname}`;

    const loc = useLocation();

    return (
        <>
            <aside class="fixed top-[3.5rem] w-64 h-screen shadow-xl px-4 right-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
                {contentHeadings.length > 0 ? (
                    <>
                        <nav class="sticky top-[4.5rem] text-base lg:text-sm">
                            <div class="-ml-0.5 w-full h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-2">
                                <h5 class="text-slate-900 font-semibold text-sm leading-6 dark:text-slate-100">
                                    On this page
                                </h5>
                                <ul class="text-slate-700 text-sm leading-6">
                                    {contentHeadings.map((h) => (
                                        <>
                                            <li>
                                                <a
                                                    href={`#${h.id}`}
                                                    class="block py-1 font-medium text-sky-500 dark:text-sky-400"
                                                >
                                                    {h.text}
                                                </a>
                                            </li>
                                            {contentHeadingsChild.map((hc, i) => (
                                                <li key={i} class="ml-4">
                                                    <a
                                                        href={`#${hc.id}`}
                                                        class={(loc.pathname === `${loc.pathname}#${hc.id}` ? 'group flex items-start py-1 text-sky-500 dark:text-sky-400' : 'group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300')}
                                                    >
                                                        <svg
                                                            width="3" height="24" viewBox="0 -9 3 24"
                                                            class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                                                        ><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                        </svg>
                                                        {hc.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </>
                                    ))}
                                </ul>

                                <div class="-ml-0.5 pl-0.5 space-y-2">
                                    <h5 class="text-slate-900 font-semibold text-sm leading-6 dark:text-slate-100">
                                        Contribute
                                    </h5>
                                    <ul class="text-slate-700 text-sm leading-6">
                                        <li class="ml-4">
                                            <a href={editUrl} target="_blank">
                                                Edit this page
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="-ml-0.5 pl-0.5 space-y-2">
                                    <h5 class="text-slate-900 font-semibold text-sm leading-6 dark:text-slate-100">
                                        Community
                                    </h5>
                                    <ul class="text-slate-700 text-sm leading-6">
                                        <li class="ml-4">
                                            <a href="https://qwik.builder.io/chat" target="_blank">
                                                Join our community
                                            </a>
                                        </li>
                                        <li class="ml-4">
                                            <a href="https://github.com/BuilderIO/qwik" target="_blank">
                                                Github
                                            </a>
                                        </li>
                                        <li class="ml-4">
                                            <a href="https://twitter.com/QwikDev" target="_blank">
                                                @QwikDev
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                    </>
                ) : null}

            </aside>
        </>
    );
});
