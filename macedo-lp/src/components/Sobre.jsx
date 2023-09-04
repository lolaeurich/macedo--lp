const Sobre = () => {
    return (
        <div className={'bg-black flex flex-col items-center'} id="sobre">
            <div className="bg-black w-10/12 mx-auto h-full">
                <div className="flex h-full flex-col items-center md:flex-row text-white">
                    <div className="h-full md:w-1/2 lg:w-1/3 flex flex-col md:gap-16 justify-around md:items-center md:justify-between">
                        <h2 className="uppercase py-6 text-xl w-full md:text-center">
                            <span className="text-yellow-900 ">28 anos</span> de experiência <br/>
                            <span className="underline decoration-yellow-900">ㅤem justica</span> do trabalho
                        </h2>

                        <div className="relative w-full h-56 mb-8 md:w-64">
                            <img src="/assets/escrit1.png" alt=""
                                 className="absolute top-0 right-0 w-52 h-46 rounded-box"
                            />
                            <img src="/assets/recepcao-1.png" alt=""
                                 className="absolute bottom-0 left-0 w-44 h-36 rounded-box"
                            />
                        </div>
                    </div>

                    <div className="px-6 md:w-1/2 lg:w-2/3 md:py-10 text-left fontFamily:Playfair md:text-lg">

                        <p className="my-5">
                            O Escritório Macedo, Braz & Advogados Associados é, atualmente, um dos mais renomados
                            escritórios de Advocacia de Curitiba e Região Mteropolitana.
                        </p>
                        <p className="my-5">
                            Fundado em 1995 pelos sócios Tobias de Macedo e Diogo Fadel Braz, formados pela Universidade
                            Federal do Paraná.
                        </p>
                        <p className="my-5">
                            Hoje o escritório conta com uma equipe de aproximadamente 35 membros, divididos entre
                            advogados e operativos, além da presença fundamental e atuante dos sócios fundadores.
                        </p>
                        <p className="my-5">
                            Após aproximadamente trinta anos de história e atuação na Justiça Especializada do Trabalho,
                            desenvolvemos a capacitação necessária para fornecer suporte e atendimento rápido e eficaz
                            às necessidades
                            de nossos clientes, imprescindível ao bom desempenho do mandato.
                        </p>

                    </div>


                </div>

                <div className={'w-full flex justify-center'}>
                    <div
                        style={{
                            backgroundImage: 'url(/assets/bg-colunas.png)'
                        }}
                        className="w-full mx-auto flex gap-3 bg-center bg-cover rounded-box"
                    >
                        <div className="md:basis-1/2 lg:basis-1/2 flex lg:items-center lg:text-lg">
                            <ul className="flex flex-col gap-6 md:gap-12 p-6 w-full xl:gap-20 xl:h-full xl:justify-evenly">
                                <li className="flex flex-col items-center text-center md:text-start md:flex-row gap-4">
                                    <div className="bg-yellow-900 rounded-full w-24 p-4">
                                        <img src="/assets/Planner.svg" alt=""
                                             className="w-full"
                                        />
                                    </div>
                                    <div className="text-yellow-900 w-full">
                                        <h3>Planejamento detalhado</h3>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet nisi. Sed
                                            facilisis pulvinar risus a vehicula.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-col items-center text-center md:text-start md:flex-row gap-4">
                                    <div className="bg-yellow-900 rounded-full w-24 p-4">
                                        <img src="/assets/Planner.svg" alt=""
                                             className="w-full"
                                        />
                                    </div>
                                    <div className="text-yellow-900 w-full">
                                        <h3>Planejamento detalhado</h3>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet nisi. Sed
                                            facilisis pulvinar risus a vehicula.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-col items-center text-center md:text-start md:flex-row gap-4">
                                    <div className="bg-yellow-900 rounded-full w-24 p-4">
                                        <img src="/assets/Planner.svg" alt=""
                                             className="w-full"
                                        />
                                    </div>
                                    <div className="text-yellow-900 w-full">
                                        <h3>Planejamento detalhado</h3>
                                        <p className="text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet nisi. Sed
                                            facilisis pulvinar risus a vehicula.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="basis-1/3 md:basis-1/2 grow mt-[-4rem] mr-[-2rem] hidden md:block">
                            <img src="/assets/estatua.png" alt="" className="h-full w-full"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;