import { deleteStudentById, getStudentById, updateStudentById } from "@/app/model/StudentService";
import {redirect} from 'next/navigation'

export default async function EditStudent(params:any){
    const id = params.searchParams.id;
    const student = await getStudentById(id)

    async function deleteStudent(){
        'use server';
        await deleteStudentById(id)
        redirect('/admin/student')
    }
    async function updateStudent(formData: FormData){
        'use server'
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        await updateStudentById(id, name, email)
        redirect('/admin/student')
    }
    return(
        <>
        <h1>Editar Estudante</h1>
        <form action="">
                <input type="text" name="name" defaultValue={student.name} placeholder="Digite o nome do Estudate" />
                <input type="text" name="email" defaultValue={student.email}  placeholder="Digite o Email do Estudate" />
                <button formAction={updateStudent} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteStudent} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}