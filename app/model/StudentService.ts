import { sql } from "@vercel/postgres";

export async function getAllStudent(){
    const { rows:students } = await sql`SELECT * from student;`;
    return students
}
export async function addStudent(name:string, email:string){
    await sql`INSERT INTO student (name, email) VALUES (${name}, ${email})`;
}
export async function deleteStudentById(id: string){
    await sql`DELETE FROM student WHERE id=${id}`;
}
export async function getStudentById(id:string){
   const {rows:students} = await sql`SELECT * FROM student WHERE id=(${id})`
   return students[0]
}
export async function updateStudentById(id:string, name:string, email:string){
    await sql`UPDATE student SET name=${name}, email=${email} WHERE id=${id}`
}


