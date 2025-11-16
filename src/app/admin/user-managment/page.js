import Link from "next/link";



export default function UserManagment() {

  const userdata = [
    { name: "Arham Shafi", id: 12223423, age: 22 },
    { name: "Ahmad Butt", id: 12656423, age: 17 },
    { name: "Zia Shakir", id: 17682323, age: 22 }
  ]

  return (
    <div className="w-full min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <p className="text-lg">Yahan aap tamam users ko manage kar sakte hain.</p>
      <div className="w-full h-max mt-7 ">
        {userdata.map((ele, idx) => (
          <Link key={idx} href={`/admin/user-managment/${ele.id}`} >
          <div  className="w-[400px] h-13 mt-4 bg-black/5 hover:-translate-y-1 hover:bg-black/10 cursor-pointer rounded-xl transition-all duration-100 ease-in px-4 flex items-center gap-5 ">
            <p className="font-bold" >{ele.name}</p>
            {/* <p>{`Age : ${ele.age}`}</p> */}
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
