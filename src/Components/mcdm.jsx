import React, { useState } from "react";
const MCDM = () =>{
    const [activeTab, setActiveTab] = useState("pso");
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div>
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto  rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900">
            <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">LOS MÉTODOS DE MÚLTIPLES CRITERIOS DE TOMA DE DECISIONES</h1>
            <p className="mt-6 text-justify">
            Los Métodos de Múltiples Criterios de Toma de Decisiones (MCDM, por sus siglas en inglés, Multiple Criteria Decision Making) son un conjunto de enfoques y técnicas 
            utilizados para abordar situaciones en las que se deben considerar varios criterios o factores al tomar decisiones. Estos métodos se utilizan en una amplia variedad
             de campos, desde la ingeniería hasta la gestión empresarial y la toma de decisiones gubernamentales. La principal ventaja de usar MCDM radica en su capacidad para 
             ayudar a los tomadores de decisiones a evaluar y seleccionar la mejor opción entre múltiples alternativas, teniendo en cuenta la interacción y el peso de diferentes criterios. 
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
                A continuación, se describen algunos de los MCDM más conocidos:
                </h1>
                <p className="text-justify text-gray-500 dark:text-gray-300">
                  <div className="mt-10">
                    <li>
                      <strong>Análisis Dimensional (AD):</strong>
                    </li>
                    <h2>
                    Este método se basa en la descomposición de los criterios y alternativas en dimensiones más pequeñas y manejables. 
                    Luego, se evalúa cada dimensión por separado y se integran los resultados para tomar una decisión global. 
                    El análisis dimensional es útil para simplificar problemas complejos al descomponerlos en partes más manejables.
                    </h2>
                    <li>
                      <strong>TOPSIS (Técnica para la Evaluación de la Preferencia Ordenada por Similitud a la Solución Ideal): </strong>
                    </li>
                    <h2>
                    TOPSIS es un enfoque que compara cada alternativa con una solución ideal y una solución antiideal para calcular
                     su proximidad relativa a ambas. La alternativa que esté más cerca de la solución ideal y más lejos de la solución 
                     antiideal se considera la mejor elección.
                    </h2>
                    <li>
                      <strong>MOORA (Método de Optimización por Reordenamiento de Múltiples Objetivos):</strong>
                    </li>
                    <h2>
                    MOORA es un método que asigna pesos a los criterios y utiliza una matriz de referencia para evaluar las alternativas. 
                    Las alternativas se reordenan en función de su puntuación ponderada y se selecciona la mejor alternativa en función de
                     la posición en el ranking.
                    </h2>
                    <li>
                      <strong>CODAS (Conjunto de Datos de Ayuda para Estructurar):</strong>
                    </li>
                    <h2>
                    Es un enfoque que se centra en la estructuración de datos y la conversión de información cualitativa en cuantitativa. 
                    Se utiliza para manejar la incertidumbre y evaluar alternativas en función de la calidad de los datos disponibles.
                    </h2>
                  </div>
                </p>
              </div>
              <div className="container mx-auto rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 ">
                <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
                Las ventajas clave de utilizar métodos MCDM incluyen:
                </h1>
                <p className="text-justify text-gray-500 dark:text-gray-300">
                  <div className="mt-10">
                    <li>
                      <strong>Consideración de múltiples factores:</strong>
                    </li>
                    <h2>
                    Los MCDM permiten a los tomadores de decisiones considerar una amplia gama de criterios, 
                    teniendo en cuenta sus interacciones y pesos relativos, lo que mejora la calidad de la toma de decisiones.
                    </h2>
                    <li>
                      <strong>Transparencia:</strong>
                    </li>
                    <h2>
                    Estos métodos proporcionan una estructura sistemática y transparente para el proceso de toma de decisiones, 
                    lo que facilita la comprensión y la comunicación de los resultados.
                    </h2>
                    <li>
                      <strong>Adaptabilidad:</strong>
                    </li>
                    <h2>
                    Los MCDM son altamente adaptables y pueden aplicarse a una variedad de problemas en diferentes dominios, 
                    desde la selección de proyectos hasta la elección de productos y la gestión ambiental.
                    </h2>
                    <li>
                      <strong>Consideración de la incertidumbre:</strong>
                    </li>
                    <h2>
                    Algunos métodos MCDM, como CODAS, pueden manejar la incertidumbre y la falta de datos, lo que los hace adecuados 
                    para situaciones en las que la información es limitada o poco confiable.
                    </h2>
                  </div>
                </p>
                <div className="container mx-auto px-6 py-10 ">
                  <p className="mt-6 text-gray-500 dark:text-gray-300 text-justify">
                  En esta página, encontrarás los enlaces para utilizar los algoritmos híbridos que integran los Métodos de
                   Múltiples Criterios de Toma de Decisiones (MCDM) como parte del pre-tratamiento de datos.
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
export default MCDM;