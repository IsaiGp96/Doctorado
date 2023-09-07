import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="bg-white text-black">
            <main>
                <section className="dark:bg-gray-900">
                    <div className="h-[10rem] bg-gray-100 dark:bg-gray-800">
                        <div className="container mx-auto px-6 py-10 ">
                            <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Toma de decisiones avanzadas con inteligencia de enjambre en un ambiente multicriterio</h1>
                            <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">El aumento de información disponible para la toma de decisiones ha llevado a grandes cambios en la industria, por tal motivo, se requiere de
                                análisis inteligentes óptimos que no se basen en la intuición. Es por ello que se propone la integración del algoritmo de enjambre de partículas (PSO) y el análisis dimensional (AD) en un ambiente
                                multi-criterio, para lograr una mayor precisión en la toma de decisiones, validando la propuesta con un caso numérico. <a id="enlace" href="https://scholar.google.com/citations?view_op=view_citation&hl=es&user=4HAFFT0AAAAJ&citation_for_view=4HAFFT0AAAAJ:UeHWp8X0CEIC">Leer más</a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 bt text-center mx-auto max-w-5xl overflow-hidden rounded-xl bg-white ">

                        <div className="mt-10 flex justify-center">
                            <section className="dark:bg-gray-900 mt-20 ">
                                <div className="mx-auto max-w-lg">
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Metaheurísticos</h1>
                                </div>
                                <div className="container mx-auto rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 ">
                                    <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"></h1>
                                    <p className="mt-4 text-justify text-gray-500 dark:text-gray-300">
                                        Una actividad continua y común del ser humano es la toma de decisiones, en la que se debe elegir  una  opción
                                        entre  varias  posibilidades.  Debido  a  ello,  se lleva  a  cabo la  presente investigación con el objetivo
                                        de desarrollar un sistema inteligente-MCDM para el análisis y toma  de  decisiones  (ATD)  que  proporcione
                                        soluciones  satisfactorias. <a id="enlace" href="http://erevistas.uacj.mx/ojs/index.php/memoriascyt/article/view/4660/5406">Leer más</a>
                                    </p>
                                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
                                        <Link to={"/PSO"}>
                                            <div>
                                                <img className="h-96 w-full rounded-lg object-cover" src="https://enlinea.santotomas.cl/wp-content/uploads/sites/2/2021/05/abeja.jpg" alt />
                                                <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Optimización de enjambre de particulas(PSO)</h2>
                                            </div>
                                        </Link>
                                        <Link to={"/BA"}>
                                            <div>
                                                <img className="h-96 w-full rounded-lg object-cover" src="https://www.gob.mx/cms/uploads/article/main_image/75856/MURCIELAGOS.jpg" alt />
                                                <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Algoritmo de murcielago (BA)</h2>
                                            </div>
                                        </Link>
                                        <Link to={"/ACO"}>
                                            <div>
                                                <img className="h-96 w-full rounded-lg object-cover" src="https://www.nationalgeographic.com.es/medio/2020/11/13/hormiguero_9e8f8bb4.jpg" />
                                                <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Optimización de colonia de hormigas (ACO)</h2>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Inicio