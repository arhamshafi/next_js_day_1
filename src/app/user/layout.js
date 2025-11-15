import Link from "next/link";
import { MdAdminPanelSettings } from "react-icons/md";

export default function userlayout({ children }) {
    return (
        <>
            <nav className="w-full h-[60px] bg-black flex justify-between px-5 items-center select-none" >
                <div className="w-max text-white text-xl">LOGO HERE</div>
                <ul className="w-max flex justify-center items-center gap-5">
                    {
                        ["home", "services", "blog"].map(ele => (
                            <li key={ele} className="text-white text-xl capitalize ">
                                <Link href={`/user/${ele === "home" ? "" : ele}`}>{ele}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex justify-center items-center gap-5">
                    <MdAdminPanelSettings className="text-white text-3xl cursor-pointer " />
                </div>
            </nav>
            <main className="select-none" > {children} </main>
            <footer className="w-full h-[60px] bg-black fixed bottom-0 left-0 text-center text-white py-5 select-none "> Contact Here </footer>
        </>
    )
}