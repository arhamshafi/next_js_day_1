import Link from "next/link";

export default function adminlayout({ children }) {
    return (
        <>
            <nav className="w-full h-[50px] flex justify-between items-center px-5 py-10  ">
                <div className="font-bold text-2xl cursor-context-menu flex items-center gap-5 "> <Link href={"/user"} className="text-black font-normal text-sm" >Back</Link>  Welcome Arham Shafi 👋</div>
                <ul className="w-max flex justify-center items-center gap-5 text-black text-md">
                    {[
                        { title: "Admin Dashboard", link: "/admin" },
                        { title: "User Managment", link: "/admin/user-managment" },
                        { title: "Product Managment", link: "/admin/product-managment" }
                    ].map(item => (
                        <li key={item.title}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

            </nav>
            <main>{children}</main>

        </>
    )

}