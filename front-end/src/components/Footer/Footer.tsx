import logo from '../../view/images/logo.png'

export const Footer = () => {
    return (
        <>
            <div className="bg-cyan-400 w-full h-[50px] flex justify-center items-center select-none">
                <small className="font-poppins text-white text-[11px] mt-1.5"> Copyright @ THINUX - 2024</small>

                    <img className="pl-3 w-auto h-6 cursor-pointer" src={logo} alt="Logo"/>
            </div>
        </>
    );
};