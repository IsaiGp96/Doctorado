import React, { useState } from "react";

const BA = () => {
    const [activeTab, setActiveTab] = useState("pso");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto  rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
                    <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Algoritmo de Murciélago (BA)</h1>
                    <p className="mt-6 text-justify">
                        El algoritmo de Murciélago (BA, por sus siglas en inglés, Bat Algorithm) es una técnica de optimización que se inspira en la observación del
                        comportamiento de los murciélagos en la naturaleza, propuesto por Xin-She Yang en 2010. Este algoritmo simula cómo los murciélagos buscan
                        alimento y se comunican entre sí para encontrar soluciones óptimas a problemas de optimización en diversos dominios, como la ingeniería, la
                        economía y la ciencia de datos.
                        <br />
                        Basándose en la simulación del comportamiento de los murciélagos en su búsqueda de alimento en la naturaleza, el algoritmo de Murciélago
                        destaca por su capacidad para equilibrar la exploración y la explotación en la búsqueda de soluciones. Esto lo convierte en una herramienta
                        versátil para abordar una amplia variedad de problemas de optimización, especialmente en espacios de búsqueda continuos. Su eficacia se ha
                        demostrado en la búsqueda de soluciones aproximadas en situaciones en las que encontrar la solución óptima podría ser computacionalmente
                        costoso o poco realista.

                        <a id="enlace" href="https://link.springer.com/chapter/10.1007/978-3-642-12538-6_6" className="text-cyan-400"> Leer más</a>
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
                            <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
                                A continuación, se describen los aspectos fundamentales de este algoritmo:
                            </h1>
                            <p className="text-justify text-gray-500 dark:text-gray-300">
                                <div className="mt-10">
                                    <li>
                                        <strong>Representación de soluciones:</strong>
                                    </li>
                                    <h2>
                                    En el algoritmo de Murciélago, las soluciones se representan como puntos en un espacio de búsqueda 
                                    multidimensional. Cada punto en este espacio representa una posible solución al problema que se está optimizando.
                                    </h2>
                                    <li>
                                        <strong>Población de murciélagos:</strong>
                                    </li>
                                    <h2>
                                        Se generan soluciones candidatas de manera probabilística. Cada hormiga (representando una solución)
                                        construye su propia solución visitando las opciones disponibles en función de las feromonas y una
                                        heurística que evalúa la calidad de las soluciones parciales. Las hormigas siguen caminos que tienen
                                        feromonas más fuertes y que parecen prometedores según la heurística.
                                    </h2>
                                    <li>
                                        <strong>Comportamiento de los murciélagos:</strong>
                                    </li>
                                    <h2>
                                    Los murciélagos en el algoritmo de Murciélago siguen un comportamiento que incluye la búsqueda de alimento
                                     y la comunicación entre sí. Cada murciélago tiene una posición actual en el espacio de búsqueda y una 
                                     frecuencia de emisión de pulsos ultrasónicos.
                                    </h2>
                                    <li>
                                        <strong>Búsqueda de alimento:</strong>
                                    </li>
                                    <h2>
                                    Los murciélagos buscan alimento emitiendo pulsos ultrasónicos en una dirección determinada. Cuando un 
                                    murciélago encuentra una solución prometedora, se mueve hacia esa solución en la siguiente iteración. 
                                    La velocidad de movimiento está influenciada por la calidad de la solución encontrada.
                                    </h2>
                                    <li>
                                        <strong>Comunicación:</strong>
                                    </li>
                                    <h2>
                                    Los murciélagos también pueden comunicarse entre sí emitiendo llamadas de frecuencia ultrasónica. 
                                    Esta comunicación permite a los murciélagos compartir información sobre soluciones prometedoras y, 
                                    en consecuencia, converger más rápidamente hacia soluciones óptimas.
                                    </h2>
                                    <li>
                                        <strong>Exploración y explotación:</strong>
                                    </li>
                                    <h2>
                                    El algoritmo de Murciélago equilibra la exploración (buscar nuevas áreas del espacio de búsqueda) 
                                    y la explotación (refinar las áreas prometedoras). Los murciélagos pueden ajustar su comportamiento 
                                    para enfocarse en áreas de alta calidad o explorar áreas desconocidas según sea necesario.
                                    </h2>
                                    <li>
                                        <strong>Criterio de parada:</strong>
                                    </li>
                                    <h2>
                                    El algoritmo de Murciélago se ejecuta durante un número fijo de iteraciones o hasta que se cumpla un 
                                    criterio de parada predefinido, como alcanzar un valor objetivo o una tolerancia específica.
                                    </h2>
                                </div>

                            </p>
                            <div className="container mx-auto px-6 py-10 ">
                                <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">
                                En esta página, te ofrecemos acceso al algoritmo BA, junto con tres híbridos que combinan PSO con MCDM 
                                (Múltiples Criterios de Toma de Decisiones). En esta sección, tienes la flexibilidad de utilizar los 
                                algoritmos de forma independiente. Para hacerlo, simplemente proporciona la matriz de decisión y ajusta
                                 los parámetros de entrada según tus necesidades. Los resultados que visualizarás en pantalla corresponden
                                  a la última iteración, pero si deseas un análisis más detallado, tienes la opción de descargar un archivo
                                     en formato Excel para profundizar en la información proporcionada.
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
                                        DA - BA
                                    </a>
                                    <a
                                        className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'moora-pso' ? 'font-bold' : ''}`}
                                        href="#"
                                        onClick={() => handleTabClick('moora-pso')}
                                    >
                                        MOORA - BA
                                    </a>
                                    <a
                                        className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'topsis-pso' ? 'font-bold' : ''}`}
                                        href="#"
                                        onClick={() => handleTabClick('topsis-pso')}
                                    >
                                        TOPSIS - BA
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
export default BA;