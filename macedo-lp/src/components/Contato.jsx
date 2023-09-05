const Contato = () => {
    return (
        <div className={'flex w-10/12 md:px-2 md:h-[450px] lg:h-[500px] lg:w-11/12 xl:w-9/12 mx-auto pb-10'}>
            <div className={'basis-1/2 hidden md:block bg-center bg-auto w-full md:h-[450px] lg:h-[500px] relative'}>
                <img src="/assets/homemtelefone.png" alt="" className={'h-full absolute right-0'}/>
            </div>

            <form className={'md:basis-1/2 px-4 md:mx-auto w-full md:px-10 bg-gray-500 md:h-[450px] lg:h-[500px] lg:w-[500px]'}>

            <div className="items-center text-left px-3">
                <h2 className="pt-2 font-bold text-2xl">Entre em Contato</h2> 
                <h3 className="pt-2 font-bold text-3xl text-yellow-900 ">CONO<span className="text-yellow-900 underline decoration-black">SCOㅤㅤ</span></h3>
            </div>
                <div className="mb-4 mt-7">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome completo"
                        className="w-full rounded-md border border-yellow-900 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className="w-full rounded-md border border-yellow-900 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="mb-5">
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Mensagem"
                        className="caret-yellow-900 w-full resize-none rounded-md border border-yellow-900 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>

                <div className={'flex justify-left pb-12'}>
                    <button
                        className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-12 rounded"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contato;