import { component$ } from '@builder.io/qwik';
import Menu from '@/components/docs/menu/menu';

export default component$(() => {

    return (
        <>
            <aside class="fixed top-[3.5rem] w-64 h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
                <div class="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>

                <nav class="sticky top-[4.5rem] text-base lg:text-sm">
                    <ul role="list" class="h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8 !px-4">
                        <Menu/>
                    </ul>
                </nav>
            </aside>
        </>
    );
});

