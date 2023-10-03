import React, { useState } from "react";

const ACO = () => {
    const [activeTab, setActiveTab] = useState("pso");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto  rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
                    <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Algoritmo de optimización de Colonia de Hormigas (ACO)</h1>
                    <p className="mt-6 text-justify">
                        El Algoritmo de Optimización de Colonias de Hormigas (ACO) es una potente técnica de optimización inspirada en el comportamiento de las colonias de hormigas reales.
                        Fue concebido por Marco Dorigo en 1995 y se ha consolidado como una herramienta altamente efectiva para resolver problemas de optimización combinatoria. Estos desafíos
                        involucran la búsqueda de la mejor solución entre múltiples opciones disponibles, y el ACO ha demostrado su utilidad en diversas áreas, desde la logística hasta la
                        planificación de rutas, la asignación de recursos y la programación.
                        <br />
                        La clave del éxito del ACO radica en la habilidad de las feromonas para transmitir información colectiva sobre las soluciones más prometedoras. Conforme las hormigas
                        encuentran soluciones de alta calidad, las feromonas se acumulan en los caminos correspondientes, atrayendo a más hormigas hacia estas soluciones. Este mecanismo
                        facilita que el algoritmo converja hacia soluciones óptimas o cercanas a óptimas en problemas combinatorios complejos.

                        <a id="enlace" href="https://www.mdpi.com/2073-8994/14/3/455" className="text-cyan-400">Leer más</a>
                    </p>
                </div>
            </div>
            <div className="mt-16 bt text-center mx-auto max-w-5xl overflow-hidden rounded-xl bg-white ">
                <div className="flex justify-center">
                    <section className="dark:bg-gray-900 mt-20 ">
                        <div className="mx-auto max-w-lg">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl"></h1>
                        </div>
                        <div className="container mx-auto rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 ">
                            <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">El funcionamiento del algoritmo de Colonias de Hormigas se puede resumir en los siguientes pasos:</h1>
                            <p className="text-justify text-gray-500 dark:text-gray-300">
                                <div className="mt-10">
                                    <li>
                                        <strong>Inicialización de feromonas: </strong>
                                    </li>
                                    <h2>
                                        En el inicio del algoritmo, se asigna una cantidad de "feromona" a todas las posibles soluciones o
                                        caminos en el espacio de búsqueda. Las feromonas son sustancias químicas que las hormigas reales
                                        utilizan para comunicarse entre sí y marcar caminos. En el contexto del ACO, las feromonas representan
                                        información compartida entre las soluciones candidatas.
                                    </h2>
                                    <li>
                                        <strong>Construcción de soluciones:</strong>
                                    </li>
                                    <h2>
                                        Se generan soluciones candidatas de manera probabilística. Cada hormiga (representando una solución)
                                        construye su propia solución visitando las opciones disponibles en función de las feromonas y una
                                        heurística que evalúa la calidad de las soluciones parciales. Las hormigas siguen caminos que tienen
                                        feromonas más fuertes y que parecen prometedores según la heurística.
                                    </h2>
                                    <li>
                                        <strong>Evaluación y actualización de feromonas:</strong>
                                    </li>
                                    <h2>
                                        Una vez que una hormiga ha construido una solución completa, se evalúa su calidad utilizando una función
                                        objetivo. Las soluciones de alta calidad dejan una cantidad mayor de feromona en los caminos que han seguido.
                                        Además, con el tiempo, las feromonas se evaporan gradualmente, lo que simula el proceso de olvido en las hormigas reales.
                                    </h2>
                                    <li>
                                        <strong>Mejora de las soluciones:</strong>
                                    </li>
                                    <h2>
                                        A lo largo de múltiples iteraciones, las hormigas continúan construyendo soluciones, evaluando su calidad y actualizando
                                        las feromonas. Con el tiempo, la concentración de feromonas tiende a acumularse en los caminos que conducen a soluciones
                                        de alta calidad.
                                    </h2>
                                    <li>
                                        <strong>Exploración y explotación:</strong>
                                    </li>
                                    <h2>
                                        El ACO equilibra la exploración (buscar nuevas soluciones) y la explotación (refinar las soluciones existentes). Las
                                        feromonas guían a las hormigas hacia soluciones prometedoras, pero también permiten cierta exploración de otras posibilidades.
                                    </h2>
                                    <li>
                                        <strong>Criterio de parada:</strong>
                                    </li>
                                    <h2>
                                        El algoritmo de Colonias de Hormigas se ejecuta durante un número fijo de iteraciones o hasta que se cumpla un criterio de parada
                                        predefinido, como alcanzar un valor objetivo o una tolerancia específica.
                                    </h2>
                                </div>

                            </p>
                            <div className="container mx-auto px-6 py-10 ">
                                <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">
                                    La clave del éxito del ACO radica en la capacidad de las feromonas para transmitir información colectiva sobre las soluciones prometedoras.
                                    A medida que las hormigas encuentran soluciones de alta calidad, las feromonas se acumulan en los caminos correspondientes, atrayendo a más
                                    hormigas hacia esas soluciones. Esto permite al algoritmo converger hacia soluciones óptimas o cercanas a óptimas en problemas combinatorios
                                    complejos.
                                    <br />
                                    En esta página, te ofrecemos acceso al algoritmo ACO, junto con tres híbridos que combinan PSO con MCDM (Múltiples Criterios de Toma de Decisiones).
                                    En esta sección, tienes la flexibilidad de utilizar los algoritmos de forma independiente. Para hacerlo, simplemente proporciona la matriz de decisión
                                    y ajusta los parámetros de entrada según tus necesidades. Los resultados que visualizarás en pantalla corresponden a la última iteración, pero si
                                    deseas un análisis más detallado, tienes la opción de descargar un archivo en formato Excel para profundizar en la información proporcionada.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-white text-black mt-14">
                <main>
                    <section className="dark:bg-gray-900">
                        <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between" style={{ placeContent: 'center' }}>
                            <div className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
                                <div className="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 ">
                                    <a
                                        className={`transform text-gray-700 transition-colors duration-300 hover:text-slate-300 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'DaPso' ? 'font-bold' : ''}`}
                                        href="#"
                                        onClick={() => handleTabClick('DaPso')}
                                    >
                                        DA - ACO
                                    </a>
                                    <a
                                        className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'moora-pso' ? 'font-bold' : ''}`}
                                        href="#"
                                        onClick={() => handleTabClick('moora-pso')}
                                    >
                                        MOORA - ACO
                                    </a>
                                    <a
                                        className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'topsis-pso' ? 'font-bold' : ''}`}
                                        href="#"
                                        onClick={() => handleTabClick('topsis-pso')}
                                    >
                                        TOPSIS - ACO
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </section>
                </main>
            </div>

            {/* Renderizar el contenido según la pestaña activa */}
            <div className="container mx-auto">
                {activeTab === 'pso' && (
                    <div>
                        {/* <PsoMain /> */}
                    </div>
                )}
                {activeTab === 'DaPso' && (
                    <div>
                        {/* <DaPso /> */}
                    </div>
                )}
                {activeTab === 'moora-pso' && (
                    <div>
                        {/* <MooraPso /> */}
                    </div>
                )}
                {activeTab === 'topsis-pso' && (
                    <div>
                        {/* <TopsisPso /> */}
                    </div>
                )}
            </div>
        </div>
    );
}
export default ACO;