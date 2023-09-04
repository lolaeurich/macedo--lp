
const Hero = () => {
    return (
        <div className={''}>
        {/*<div>*/}
            <div className="md:bg-center bg-cover flex items-center justify-center md:justify-start text-center min-h-screen min-w-sm"
                 style={{
                     backgroundImage: 'url(assets/macedo-hero-image.png)'
                 }}
            >
                <div className="text-neutral-content max-w-md h-full text-center md:text-left">
                    <div className="md:pl-10 text-black w-80 md:w-fit">
                        <h1 className="mb-5 text-4xl md:text-5xl  lg:text-7xl font-bold uppercase w-full ">
                            Respeito. <br/>
                            Reputação. <br/>
                            <span className="underline">Resul</span>tados.
                        </h1>
                        <p className="mb-5 pt-3 w-full lg:text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, aliquid assumenda
                            atque
                        </p>
                        <button className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-6 rounded">Fale conosco</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;