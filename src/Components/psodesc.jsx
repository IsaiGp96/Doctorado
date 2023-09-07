import React, { useState } from "react";
import PsoMain from "./psomain";

const Psodesc = () => {
  const [activeTab, setActiveTab] = useState("pso");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto  rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Optimización de Enjambre de partículas</h1>
          <p className="mt-6 text-justify">
            La optimización de enjambre de partículas (PSO) se presenta como un algoritmo de búsqueda global aleatoria, enmarcado dentro del ámbito
            de la inteligencia de enjambre, y fue concebido por Kennedy y Eberhart, quienes se inspiraron en la migración y comportamiento de enjambres
            de animales en busca de alimentos. Este método, introducido por primera vez en 1995, se basa en el principio de emular el comportamiento
            social observado en la naturaleza, particularmente en bandadas de aves y bancos de peces. <a id="enlace" href="https://www.mdpi.com/2073-8994/14/3/455" className="text-cyan-400">Leer más</a>
          </p>
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
                    className={`transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8 ${activeTab === 'da-pso' ? 'font-bold' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('da-pso')}
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
        {activeTab === 'da-pso' && (
          <div>
            {/* Contenido de la pestaña DA - PSO */}
          </div>
        )}
        {activeTab === 'moora-pso' && (
          <div>
            {/* Contenido de la pestaña MOORA - PSO */}
          </div>
        )}
        {activeTab === 'topsis-pso' && (
          <div>
            {/* Contenido de la pestaña TOPSIS - PSO */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Psodesc;
