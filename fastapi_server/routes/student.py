from fastapi import APIRouter
from models import Student
from database import students_collection
from bson import ObjectId
#convert mongodb doc into json format
def student_details(student):
    return{
        "id":str(student["_id"]),
        "name":student["name"],
        "email":student["email"],
        "age":student["age"],
        "mark":student["mark"]
    }
student_router = APIRouter(prefix="/student", tags=["student"])

@student_router.get("/getstudents")
def getstudents():
    students=students_collection.find()
    return [student_details(student) for student in students]

@student_router.post("/registerstudents")
def registerstudents(stu:Student):
    result=students_collection.insert_one(stu.model_dump())
    return {"Message":"Inserted successfully"}

@student_router.get("/getparticularstudents/{stu_id}")
def getparticularstudents(stu_id:str):
    student=students_collection.find_one({"_id":objectId(stu_id)})
    return student_details(student) 

@student_router.delete("/deletestudents/{stu_id}")
def deletestudents(stu_id:str):
    result=students_collection.delete_one({"_id":ObjectId(stu_id)})
    return "student deleted successfully   "