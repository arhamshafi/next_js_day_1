
export default async function userdetial({ params }) {

    const { id } = await params

    const userdata = [
        { name: "Arham Shafi", id: 12223423, age: 22 },
        { name: "Ahmad Butt", id: 12656423, age: 17 },
        { name: "Zia Shakir", id: 17682323, age: 22 }
    ]

    const detail = userdata.find(ele => ele.id == id)

    return (
        <>
            <h1> Name : {detail.name} </h1>
            <h1> Age : {detail.age} </h1>

        </>
    )

}