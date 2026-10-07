from fastapi import APIRouter
from models import staff
from database import staff_collection
def staff_details(staff):
    return{
        "name":staff["name"],
        "email":staff["email"],
        "designation":staff["designation"]
    }   
staff_router = APIRouter(prefix="/staff", tags=["staff"])

@staff_router.get("/getstaffs")
def getstaffs():
    return "get staff method called"

@staff_router.post("/addstaffs")
def addstaffs(): 
    return "add staff method called"                                              