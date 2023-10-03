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
                            <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">Este sitio web ha sido diseñado con el propósito de asistir tanto a individuos como a organizaciones en la toma de decisiones más
                                informadas y eficaces, particularmente en escenarios de alta complejidad donde múltiples factores o criterios deben ser tenidos en cuenta.
                                <br />
                                Es decir, esta herramienta ofrece apoyo integral en el proceso de toma de decisiones. En contraposición a la toma de decisiones basadas en intuición o experiencia exclusivamente,
                                esta herramienta adopta un enfoque más estructurado y avanzado. Para ello, hace uso de algoritmos basados en la inteligencia de enjambre, lo que le permite encontrar soluciones
                                óptimas o cercanas a la perfección en situaciones complejas donde múltiples criterios o factores desempeñan un papel fundamental, y donde estos criterios pueden variar en su importancia relativa.
                                <br />
                                Estas herramientas adquieren un valor significativo en la toma de decisiones estratégicas en diversos ámbitos, tales como la gestión empresarial, la inversión financiera, la planificación de proyectos,
                                la selección de productos o servicios, así como en la formulación de políticas gubernamentales. Su utilidad se evidencia especialmente en contextos donde la cantidad de información disponible y las
                                interrelaciones entre los factores involucrados pueden llegar a ser abrumadoras.
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 bt text-center mx-auto max-w-5xl overflow-hidden rounded-xl bg-white ">
                        <div className="mt-10 flex justify-center">
                            <section className="dark:bg-gray-900 mt-20 ">
                                <div className="mx-auto max-w-lg">
                                    <h1 className="mt-16 text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">INTELIGENCIA DE ENJAMBRE</h1>
                                </div>
                                <div className="container mx-auto rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 ">
                                    <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"></h1>
                                    <p className="mt-4 text-justify text-gray-500 dark:text-gray-300">
                                        La inteligencia de enjambre es un concepto inspirado en la observación del comportamiento de los enjambres de animales
                                        en la naturaleza, como las colonias de hormigas, las bandadas de aves y los cardúmenes de peces. Se refiere a la capacidad
                                        de un grupo de agentes individuales, que pueden ser considerados como "partículas" o "agentes" virtuales, para colaborar y
                                        coordinarse de manera efectiva en la búsqueda de soluciones a problemas complejos. Los agentes en un sistema de inteligencia
                                        de enjambre interactúan entre sí y ajustan sus comportamientos en función de las señales que reciben del entorno y de sus compañeros.
                                        <br />
                                        Un componente fundamental de la inteligencia de enjambre son los algoritmos metaheurísticos, que son algoritmos de búsqueda y
                                        optimización que se basan en principios inspirados en el comportamiento colectivo de los enjambres. Los metaheurísticos son
                                        técnicas de resolución de problemas que no garantizan encontrar la solución óptima, pero son muy eficientes para explorar
                                        soluciones en espacios de búsqueda complejos. Algunos ejemplos de metaheurísticas que se utilizan en la inteligencia de enjambre
                                        incluyen:
                                        <div className="mt-10">
                                            <li>
                                                <strong>Optimización de Enjambre de Partículas (PSO):</strong>
                                            </li>
                                            <h2>
                                                El algoritmo de Optimización por Enjambre de Partículas
                                                (PSO, por sus siglas en inglés, Particle Swarm Optimization) es una técnica de optimización inspirada en el comportamiento
                                                de los enjambres y bandadas de aves en la naturaleza. Fue desarrollado por James Kennedy y Russell Eberhart en la década de
                                                1990 y se utiliza para encontrar soluciones aproximadas a problemas de optimización en espacios multidimensionales, donde se
                                                busca encontrar el valor mínimo o máximo de una función.
                                                <a id="enlace" href="https://ieeexplore.ieee.org/document/494215">Leer más</a>
                                            </h2>
                                            <li>
                                                <strong>Algoritmo de Murciélago (BA):</strong>
                                            </li>
                                            <h2>
                                                El algoritmo de Murciélago (BA, por sus siglas en inglés, Bat Algorithm) es una técnica de optimización inspirada en el comportamiento
                                                de los murciélagos en la naturaleza. Fue propuesto por Xin-She Yang en 2010 y se utiliza para encontrar soluciones aproximadas a problemas
                                                de optimización, especialmente en espacios de búsqueda continuos. Este algoritmo se caracteriza por su capacidad de búsqueda global y su
                                                capacidad para adaptarse a diferentes tipos de problemas de optimización.
                                                <a id="enlace" href="https://link.springer.com/chapter/10.1007/978-3-642-12538-6_6">Leer más</a>
                                            </h2>
                                            <li>
                                                <strong>Algoritmos de Colonias de Hormigas (ACO):</strong>
                                            </li>
                                            <h2>
                                                El algoritmo de Colonias de Hormigas (ACO, por sus siglas en inglés, Ant Colony Optimization) es una técnica de optimización y búsqueda
                                                inspirada en el comportamiento de las colonias de hormigas reales. Fue desarrollado por Marco Dorigo en 1996  y se utiliza para resolver
                                                problemas de optimización combinatoria, donde se busca encontrar la mejor solución entre un conjunto finito de posibles soluciones.
                                                <a id="enlace" href="https://ieeexplore.ieee.org/abstract/document/484436">Leer más</a>
                                            </h2>
                                        </div>

                                    </p>
                                    <div className="container mx-auto px-6 py-10 ">
                                        <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">
                                            En resumen, la inteligencia de enjambre es un enfoque de resolución de problemas que se basa en la colaboración y coordinación de
                                            múltiples agentes o partículas para encontrar soluciones a problemas complejos. Los metaheurísticos, como el PSO, BA y el ACO, son
                                            técnicas clave dentro de la inteligencia de enjambre que se inspiran en el comportamiento colectivo de los enjambres naturales para
                                            resolver problemas en una amplia gama de campos, incluyendo la optimización, la planificación y la toma de decisiones.
                                        </p>
                                    </div>
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