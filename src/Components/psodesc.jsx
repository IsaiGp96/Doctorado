import React, { useState } from "react";
import PsoMain from "./psomain";
import DaPso from "./DaPso";
import TopsisPso from "./TopsisPso";
import MooraPso from "./MooraPso";

const Psodesc = () => {
  const [activeTab, setActiveTab] = useState("pso");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto  rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Optimización de Enjambre de partículas (PSO)</h1>
          <p className="mt-6 text-justify">
            La Optimización por Enjambre de Partículas (PSO, por sus siglas en inglés, Particle Swarm Optimization) es un fascinante algoritmo de
            optimización inspirado en el comportamiento de enjambres y bandadas de aves en la naturaleza. Desarrollado en 1995 por James Kennedy
            y Russell Eberhart, el PSO se ha convertido en una valiosa técnica para encontrar soluciones aproximadas a problemas de optimización
            en espacios multidimensionales, donde se busca el valor mínimo o máximo de una función. <a id="enlace" href="https://ieeexplore.ieee.org/document/494215" className="text-cyan-400">Leer más</a>
          </p>
        </div>
      </div>
      <div className="mt-16 bt text-center mx-auto max-w-5xl overflow-hidden rounded-xl bg-white ">
        <div className="flex justify-center">
          <section className="dark:bg-gray-900 mt-20 ">
            <div className="mx-auto max-w-lg">
              {/* <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl"></h1> */}
            </div>
            <div className="container mx-auto rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 ">
              <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
                ¿Cómo funciona el algoritmo PSO? Aquí te lo explicamos:
              </h1>
              <p className="text-justify text-gray-500 dark:text-gray-300">
                <div className="mt-10">
                  <li>
                    <strong>Partículas:</strong>
                  </li>
                  <h2>
                    En el corazón del PSO se encuentra una población de "partículas" virtuales,
                    cada una representando una solución candidata al problema de optimización.
                    Estas partículas se colocan inicialmente de manera aleatoria en el espacio de búsqueda.
                  </h2>
                  <li>
                    <strong>Velocidades y posiciones:</strong>
                  </li>
                  <h2>
                    Cada partícula tiene dos componentes clave: su posición actual en el espacio de búsqueda y su
                    velocidad. La posición representa una posible solución al problema, mientras que la velocidad
                    determina la dirección y la magnitud del movimiento de la partícula en el espacio.
                  </h2>
                  <li>
                    <strong>Mejor posición personal (pbest):</strong>
                  </li>
                  <h2>
                    Cada partícula lleva un registro de la mejor posición que ha encontrado hasta ese momento,
                    conocida como "pbest" (personal best). Inicialmente, el "pbest" de cada partícula es su posición inicial.
                  </h2>
                  <li>
                    <strong>Mejor posición global (gbest):</strong>
                  </li>
                  <h2>
                    Además de su mejor posición personal, las partículas también están al tanto de la mejor posición encontrada
                    por cualquier partícula en todo el enjambre, denominada "gbest" (global best).
                  </h2>
                  <li>
                    <strong>Movimiento de las partículas:</strong>
                  </li>
                  <h2>
                    En cada iteración, las partículas ajustan su velocidad y posición siguiendo dos influencias clave:
                    su "pbest" y el "gbest". El ajuste se realiza de la siguiente manera:
                    o	La velocidad de cada partícula se actualiza en función de su velocidad anterior, su distancia a su "pbest" y su distancia al "gbest".
                    o	La posición de la partícula se actualiza en función de su posición anterior y su nueva velocidad.
                  </h2>
                  <li>
                    <strong>Equilibrio entre exploración y explotación:</strong>
                  </li>
                  <h2>
                    PSO logra un equilibrio entre la exploración (buscar nuevas áreas del espacio de búsqueda)
                    y la explotación (refinar las áreas prometedoras). Las partículas tienden a moverse hacia las
                    regiones del espacio de búsqueda donde se han encontrado buenas soluciones.
                  </h2>
                  <li>
                    <strong>Criterio de parada:</strong>
                  </li>
                  <h2>
                    El algoritmo PSO se ejecuta durante un número fijo de iteraciones o hasta que se cumple un criterio
                    de parada predefinido, como alcanzar un valor objetivo o una tolerancia específica.
                  </h2>
                </div>
              </p>
              <div className="container mx-auto px-6 py-10 ">
                <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">
                  El PSO es especialmente efectivo en problemas de optimización continua y multidimensional, como la
                  optimización de funciones matemáticas complejas o la sintonización de parámetros en algoritmos de
                  aprendizaje automático. Su capacidad para mantener un equilibrio entre la exploración y la explotación
                  lo hace útil en una amplia gama de aplicaciones, desde la ingeniería hasta la optimización de carteras
                  de inversión y la búsqueda de rutas óptimas. Este enfoque, inspirado en la naturaleza, ha demostrado ser
                  una valiosa herramienta en la resolución de problemas de optimización.
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
                    className={`transform text-gray-700 transition-colors duration-300 hover:bg-slate-300 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'pso' ? 'font-bold' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('pso')}
                  >
                    PSO
                  </a>
                  <a
                    className={`transform text-gray-700 transition-colors duration-300 hover:text-slate-300 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'DaPso' ? 'font-bold' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('DaPso')}
                  >
                    DA - PSO
                  </a>
                  <a
                    className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'moora-pso' ? 'font-bold' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('moora-pso')}
                  >
                    MOORA - PSO
                  </a>
                  <a
                    className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'topsis-pso' ? 'font-bold' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('topsis-pso')}
                  >
                    TOPSIS - PSO
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
            <PsoMain />
          </div>
        )}
        {activeTab === 'DaPso' && (
          <div>
            <DaPso />
          </div>
        )}
        {activeTab === 'moora-pso' && (
          <div>
            <MooraPso />
          </div>
        )}
        {activeTab === 'topsis-pso' && (
          <div>
            <TopsisPso />
          </div>
        )}
      </div>
    </div>
  );
};

export default Psodesc;
