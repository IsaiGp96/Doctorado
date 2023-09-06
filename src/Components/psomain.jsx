import React from "react";

const PsoMain = () => {
    return (
        <div className="flex justify-center items-center">
            <section className="mt-10">
                <div >
                    <div className="max-w-2xl mx-auto bg-white p-8">
                        <form className="rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
                            <h1>Ingrese parámetros de control</h1>
                            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">W</label>
                                    <input type="number" className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">C1</label>
                                    <input type="number" className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">C2</label>
                                    <input type="number" className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E</label>
                                    <input type="number" className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">R1:</label>
                                    <input type="number" className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">R2:</label>
                                    <input type="number" className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Función objetivo: </label>
                                <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <button type="submit" className="text-black bg-slate-300 mt-5 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calcular</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="mt-10">
                <div>
                    <div className="max-w-2xl mx-auto bg-white p-8">
                        <form className="rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
                            <h1></h1>
                            <div className="grid mt-4 gap-6 mb-6 lg:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Última iteración</label>
                                    <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor actualmente: </label>
                                    <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor de momento</label>
                                    <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor posición local: </label>
                                    <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor posición en general: </label>
                                    <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
            <section className="mt-10">
                <div>
                    <div className="max-w-2xl mx-auto bg-white p-8">
                        <form className="rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
                            <h1></h1>
                            <div className="grid mt-4 gap-6 mb-6 lg:grid-cols-2">
                            
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor posición en general: </label>
                                <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor general: </label>
                                <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mejor posición</label>
                                <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">La mejor solución</label>
                                <input type="number" disabled className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
export default PsoMain;