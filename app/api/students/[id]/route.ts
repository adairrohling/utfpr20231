import { NextResponse } from "next/server"
import { deleteStudentById, getStudentById, updateStudentById } from "@/app/model/StudentService"


export async function DELETE(request: Request, { params }: any) {
    deleteStudentById(params.id)
    return NextResponse.json({ sucess: "ok" })

}
export async function GET(request: Request, { params }: any) {
    const student = await getStudentById(params.id)
    return NextResponse.json(student);
}
export async function PUT(request: Request, { params }: any) {
    try {
        const student = await request.json()
        await updateStudentById(params.id, student.name, student.email)
        return NextResponse.json(await getStudentById(params.id));
    } catch (error) {
        console.log("PUT" + error)
    }
    //return await GET(request, params.id as any) 
}