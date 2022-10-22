import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <div class="py-20 bg-white">
            <div class="container mx-auto px-6 md:px-12 text-center">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2>
                    <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                </div>
                <div class="grid gap-24 md:gap-12 md:grid-cols-3">
                    <div class="space-y-4 text-center group">
                        <div class="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                            <img class="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                src="https://tailus.io/sources/blocks/polygon-avatar/preview/images/woman.jpg" alt="woman" loading="lazy" width="640" height="805"></img>
                        </div>
                        <div class="pt-4">
                            <h4 class="text-2xl">Hentoni Doe</h4>
                            <span class="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                        <div class="flex justify-center space-x-4 text-gray-500">
                            <a href="#" class="block w-max mx-auto text-blue-600">View Bio</a>
                        </div>
                    </div>
                    <div class="space-y-4 text-center group">
                        <div class="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                            <img class="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                src="https://tailus.io/sources/blocks/polygon-avatar/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667"></img>
                        </div>
                        <div class="pt-4">
                            <h4 class="text-2xl">Dan Orton</h4>
                            <span class="block text-sm text-gray-500">Designer</span>
                        </div>
                        <div class="flex justify-center space-x-4 text-gray-500">
                            <a href="#" class="block w-max mx-auto text-blue-600">View Bio</a>
                        </div>
                    </div>
                    <div class="space-y-4 text-center group">
                        <div class="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                            <img class="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                src="https://tailus.io/sources/blocks/polygon-avatar/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805"></img>
                        </div>
                        <div class="pt-4">
                            <h4 class="text-2xl">Ortance Doe</h4>
                            <span class="block text-sm text-gray-500">Marketing</span>
                        </div>
                        <div class="flex justify-center space-x-4 text-gray-500">
                            <a href="#" class="block w-max mx-auto text-blue-600">View Bio</a>
                        </div>
                    </div>
                </div>
                <button type="button" title="Start buying" class="w-max mx-auto py-3 px-6 text-center rounded-full transition border border-blue-200 active:bg-blue-200 focus:bg-blue-100">
                    <span class="block text-blue-600 font-semibold text-sm">
                        Load more...
                    </span>
                </button>
            </div>
        </div>


    );
});             