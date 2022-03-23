import Navbar from '../components/navbar.js';

const NotFound = props => {
    return (
        <div className="static flex flex-col place-items-center overflow-y-none overscroll-x-none w-screen h-screen select-none">
            <div className="static w-3/5 h-screen">
                <Navbar home />
                <div className="static w-full h-3/4 flex flex-row pt-16">
                    <div className="static w-2/5 h-3/4 flex flex-col place-items-center place-content-center">
                        <div className="font-inter font-thin text-8xl no-overflow">
                            <span>404</span>
                        </div>
                    </div>
                    <div className="bg-black h-full w-px"></div>
                    <div className="static w-3/5 h-full flex flex-col place-items-center text-center font-inter">
                        <span className="text-7xl font-light">
                            Oops...
                        </span>
                        <br />
                        <span className="text-xl font-light w-3/4 pt-10">
                            You seem to have run into a section of the webpage that I haven't coded (and don't plan on coding)
                        </span>
                        <br />
                        <span className="text-xl font-light w-3/4 pt-10">
                            Just hit the little back button in the top left corner (of the browser), and be on your way 👋
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;