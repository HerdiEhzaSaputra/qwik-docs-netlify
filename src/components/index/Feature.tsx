import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <>
            <div class="py-16 bg-yellow-50 overflow-hidden">
                <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
                    <div>
                        <span class="text-yellow-600 text-lg font-semibold">Main features</span>
                        <h2 class="mt-4 text-2xl text-yellow-900 font-bold md:text-4xl">A technology-first approach to payments <br class="sm:block" hidden></br>and finance</h2>
                    </div>
                    <div class="mt-16 grid -mx-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div class="relative group">
                            <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-yellow-100"></div>
                            <div class="relative p-8 space-y-4">
                                <img src="https://tailus.io/sources/blocks/flat/preview/images/avatars/burger.png" class="w-10" width="512" height="512" alt="burger illustration"></img>
                                <h6 class="text-lg text-yellow-800 font-medium">Close to the metal</h6>
                                <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                            </div>
                        </div>
                        <div class="relative group">
                            <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-yellow-100"></div>
                            <div class="relative p-8 space-y-4">
                                <img src="https://tailus.io/sources/blocks/flat/preview/images/avatars/package-delivery.png" class="w-10" width="512" height="512" alt="package-delivery illustration"></img>
                                <h6 class="text-lg text-yellow-800 font-medium">Close to the metal</h6>
                                <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                            </div>
                        </div>
                        <div class="relative group">
                            <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-yellow-100"></div>
                            <div class="relative p-8 space-y-4">
                                <img src="https://tailus.io/sources/blocks/flat/preview/images/avatars/metal.png" class="w-12 -m-1" width="512" height="512" alt="metal illustration"></img>
                                <h6 class="text-lg text-yellow-800 font-medium">Close to the metal</h6>
                                <p class="text-gray-600">
                                    Placeat omnis repellendus animi magnam harum earum non illo provident laborum quae ipsa unde nemo quasi, aliquam nesciunt totam recusandae natus! Magni.
                                </p>
                            </div>
                        </div>
                        <div class="relative group">
                            <div aria-hidden="true" class="absolute inset-0 rounded-xl scale-90 transition duration-300 group-hover:scale-100 group-hover:bg-yellow-100"></div>
                            <div class="relative p-8 space-y-4">
                                <img src="https://tailus.io/sources/blocks/flat/preview/images/avatars/trowel.png" class="w-10" width="512" height="512" alt="towel illustration"></img>
                                <h6 class="text-lg text-yellow-800 font-medium">Close to the metal</h6>
                                <p class="text-gray-600">
                                    Placeat omnis repellendus animi magnam harum earum non illo provident laborum quae ipsa unde nemo quasi, aliquam nesciunt totam recusandae natus! Magni.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});