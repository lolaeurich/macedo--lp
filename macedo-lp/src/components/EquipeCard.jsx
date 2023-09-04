
const EquipeCard = () => {
    return (
        <>
            <div className="mx-auto md:mx-8 h-96 w-60 md:w-68 flex flex-col pt-2 gap-2 items-center justify-between
    bg-gradient-to-b from-black to-gray-600 border border-white text-white rounded-lg font-Playfair lg:h-[400px]"
            >
                <div className="basis-1/3 w-32 h-32 rounded-full bg-cover bg-center"
                     style={{
                         backgroundImage: 'url(assets/stressed-businessman-working-with-contract-documents.png)'
                     }}>
                </div>

                <div className="basis-2/4 py-4 flex flex-col items-center px-4">
                    <h3 className="text-yellow-900 font-bold">Joao da <span className="border-b-2 border-yellow-900">Silva</span></h3>
                    <p className="text-sm pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A aliquam asperiores cum deleniti eaque, error facilis
                        ipsa ipsam iure nobis possimus quas, quia recusandae sed sequi soluta tempora,
                        ut voluptatum?
                    </p>

                    <p className="pt-4">joao@email.com</p>
                </div>

            </div>
        </>
    );
};

export default EquipeCard;