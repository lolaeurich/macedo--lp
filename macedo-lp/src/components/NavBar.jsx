const NavBar = () => {
    return (
        <div className={'bg-black min-h-[6rem] text-white flex flex-col items-center justify-evenly lg:flex-row w-full'} id="NavBar">
            <div className={'hidden md:flex basis-1/2 items-center pl-10'}>
                <img src="/assets/logo.png" alt="" className={'h-8 lg:h-16'}/>
            </div>
            <div className={'basis-1/2 md:basis-1 mx-auto'}>
                <nav className={'h-full flex'}>
                    <ul className={'h-full flex gap-6 justify-center items-center uppercase text-sm text-start font-semibold md:text-lg'}>
                        <li className={'hover:text-yellow-900 '}>
                            Inicio
                        </li>
                        <li className={'hover:text-yellow-900'}>
                            Sobre
                        </li>
                        <li className={'hover:text-yellow-900'}>
                            Atuação
                        </li>
                        <li className={'hover:text-yellow-900'}>
                            Equipe
                        </li>
                        <li className={'hover:text-yellow-900'}>
                            Contato
                        </li>
                    </ul>
                </nav>
                {/*<div className={'h-full w-20 basis-1/5'}>*/}
                {/*    <img src="/assets/darkmode.svg" alt=""/>*/}
                {/*</div>*/}
            </div>


        </div>
    );
};

export default NavBar;