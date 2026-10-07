from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()

client = MongoClient(os.getenv("MONGO_URL"))
#create a database in mongodb
db = client["vignan"]
students_collection = db["students"]
staff_collection = db["staff"]