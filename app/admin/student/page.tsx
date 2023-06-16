import { getAllStudent } from "@/app/model/StudentService";

export default async function StudentPage(){
     const students = await getAllStudent();
    return (
        <>
         <h1> Lista de Estudantes</h1>
         <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (  

                <tr key={student.id}> <td>{student.name}</td> <td>{student.email}</td> <td><a href={`/admin/student/edit?id=${student.id}`}>Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>
       
    )
}