import { component$ } from '@builder.io/qwik';
import { useContent, Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {

    const { menu } = useContent();
    const loc = useLocation();

    return (
        <>
            {menu
                ? menu.items?.map((item) => (
                    <>
                        <li class="mt-4">
                            <Link
                                class={(loc.pathname === item.href ? 'block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400' : 'mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200')}
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
                            </ul>
                        </li>
                    </>
                ))
                : null}
        </>
    );
});
