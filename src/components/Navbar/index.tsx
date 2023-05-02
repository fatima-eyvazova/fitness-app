import { useState, Dispatch, SetStateAction } from "react"
import { Link as RouterLink } from 'react-router-dom'
import Link from "./Link"
import Logo from "@/assets/Logo.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { ROUTES } from "@/router/routeNames"
type Props = {
    isTopOfPage: boolean
    selectedPage: string,
    setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBg = isTopOfPage ? " " : "bg-primary-100 drop-shadow"
    return (
        <nav>
            <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img alt="logo" src={Logo} className='img h-16 w-29' />
                    {isAboveMediumScreens ? (
                        <div className='flex justify-around w-full'>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <RouterLink to={ROUTES.signin}>Sign In</RouterLink>
                                <RouterLink to={ROUTES.signUp} className="rounded-md bg-secondary-500 px-7 py-2 hover:bg-primary-500 hover:text-white">Sign Up</RouterLink>
                            </div>
                        </div>
                    ) : (
                        <button className="rounded-full bg-secondary-500 p-2 mr-8"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <RxHamburgerMenu className="h-4 w-4 text-white" />
                        </button>
                    )}
                </div>
                {/* mobile menu */}
                {!isAboveMediumScreens && isMenuToggled && (
                    <div className="h-full">
                        <div className="fixed top-0 right-0 bottom-o z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                            {/* close */}
                            <div className="flex justify-end p-10">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <IoMdClose className="h-6 w-6 text-gray-400" />
                                </button>
                            </div>
                            {/* menu */}
                            <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                                <Link page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage} />
                            </div>
                        </div>
                    </div>

                )

                }
            </div>
        </nav>
    )
}
export default Navbar


