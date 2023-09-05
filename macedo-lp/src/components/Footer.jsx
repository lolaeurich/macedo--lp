const Footer = () => {
    return (
        <>
          <div className={'flex flex-col md:flex-row py-8 items-center'}>
            <div className={'basis-1/3 p-4 flex flex-col items-center text-left'}>
              <div className={'h-12 w-full flex justify-center lg:w-8/12 lg:justify-start mb-6'}>
                <img src="/assets/logopreta.png" alt="" className={'h-full'}/>
              </div>

              <ul className={'w-full px-0 text-center md:text-left'}>
                <li className={'lg:w-8/12 mx-auto'}>
                R. Comendador Araújo, 510,
                Sala 302 e Andar P - Centro
                Curitiba/PR
                </li>
                <li className={'lg:w-8/12 mx-auto underline'}>contact@example.com</li>
                <li className={'lg:w-8/12 mx-auto'}>41 3333-3333</li>
              </ul>
            </div>

            <div className={'basis-1/3 p-4 flex flex-col items-center text-yellow-900 text-xl gap-6'}>
              <h4 className="font-bold">Áreas de Atuação</h4>
              <ul className={'list-disc text-black font-light text-lg'}>
                <li>
                  <a href="#atuação" className="hover:text-yellow-900">Direito do Trabalho</a>
                </li>
                <li>
                  <a href="#atuação" className="hover:text-yellow-900">Direito Sindical</a>
                </li>
                <li>
                  <a href="#atuação" className="hover:text-yellow-900">Ações Coletivas</a>
                </li>
                <li>
                  <a href="#atuação" className="hover:text-yellow-900">Direito Bancário</a>
                </li>
              </ul>
            </div>

            <div className={'basis-1/3 p-4 text-center md:text-left flex flex-col items-center gap-6'}>
              <h4 className="text-yellow-900 font-bold ">
              NEWSLETTER
              </h4>
              <p className="pl-8 text-center lg:text-center pr-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aspernatur consectetur
              </p>
              <div className={'flex gap-2'}>
                <input type="text" placeholder={'ㅤInsira seu e-mail'} className="w-48 h-8 bg-slate-300 transition duration-200 border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"/>
                <button
                    type="submit"
                    className="basis-1/3 inline-flex items-center justify-center h-8 px-0.5 font-medium tracking-wide bg-yellow-900 hover:bg-white text-white hover:text-black py-1 rounded"
                  >
                    Enviar
                  </button>
              </div>
            </div>
          </div>

          <div className={'bg-black h-[4rem] flex flex-col md:flex-row'}>
            <div className={'basis-1/2 h-full flex items-center'}>
              <p className={'text-white text-sm text-center w-full'}>© Copyright 2023 - Macedo, Braz e Advogados Associados</p>
            </div>

            <div className={'basis-1/2 bg-black h-full flex'}>
              <div className={'basis-1/2 flex gap-6 items-center justify-evenly pl-10'}>
              <a
                href="https://www.facebook.com/escritoriomacedobraz/?locale=pt_BR"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              </div>

              <div className={'basis-1/2 flex justify-center items-center'}>
              <a
              href="#NavBar"
            >
              <button
                className="bottom-[30px] right-[40px] p-3 bg-yellow-900 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-4 h-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                  ></path>
                </svg>
              </button>
            </a>
              </div>

            </div>

          </div>
        </>
    );
};

export default Footer;