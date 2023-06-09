import { addStudent } from "@/app/model/StudentService"

export default function NewStudent() {
    async function saveStudent(formData: FormData){
        'use server'
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        await addStudent(name, email)
    }
    return (
        <>
            <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600">Cadastro de Estudantes</h1>
            <form action={saveStudent}>
                <input type="text" name="name" placeholder="Digite o nome do Estudate" />
                <input type="text" name="email" placeholder="Digite o Email do Estudate" />
                <button type="submit" className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
            </form>
        </>

    )
}