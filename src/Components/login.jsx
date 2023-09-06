import React from "react";


const Login = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="relative h-[600px] w-[400px] overflow-hidden rounded-3xl">
                <div className="h-full w-full bg-[100%] blur-md bg-gray-dark" />
                <div className="absolute bottom-10 flex w-full flex-col rounded-t-3xl text-black">
                    <form className="space-y-8 px-10 py-10 text-center">
                        <div className="group relative">
                            <input type="text" id="username" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none " />
                            <label htmlFor="username" className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white ">Usuario</label>
                        </div>
                        <div className="group relative">
                            <input type="text" id="password" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label htmlFor="password" className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">Contraseña</label>
                        </div>
                        <div className="border-white group m-auto my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none">
                            <button className="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300">Ingresar</button>
                        </div>
                        <div id="texto">
                            <a href="#" className="inline-flex !w-auto justify-center font-medium">¿Olvidaste tu contraseña?</a>
                        </div>
                    </form>
                    <div id="texto">
                        <p className="gap-2 text-center">
                            ¿Aún no tienes centa?
                            <a href="#" className="font-semibold text-white hover:underline ">¡Registrate!</a>
                        </p>
                    </div>
                    <a className="border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none">
                        <span>
                            <svg className="text-white" width={20} height={20} fill="currentColor">
                                <path d="" />
                            </svg>
                        </span>
                        <span className="text-sm font-medium text-white">LinkedIn</span>
                    </a>
                    <a className="border-white-500 group m-auto my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none">
                        <span>
                            <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                                <path fillRule="text-white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </span>
                        <span className="text-sm font-medium text-white">Github</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Login;