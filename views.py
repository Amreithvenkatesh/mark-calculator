from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import Marklist
from .serializers import MarklistSerializer

class Mrklist(APIView):
    def get(self,request):
        Marklist1=Marklist.objects.order_by("-Percentage")
        serializer=MarklistSerializer(Marklist1, many=True)
        return Response(serializer.data)

    def post(self,request):
        mark_data = request.data
        mm=mark_data["mathsmark"]
        pm=mark_data["physicsmark"]
        cm=mark_data["chemistrymark"]
        new_mark = Marklist.objects.create(Roll_Number=mark_data["roll_no"],
        Student_Name=mark_data["name"],
        Maths_mark=mark_data["mathsmark"],
        Physics_Mark=mark_data["physicsmark"],
        Chemistry_Mark=mark_data["chemistrymark"],
        Total_mark=int (mm) +int (pm)+int (cm),
        Percentage=float((int (mm) +int (pm)+int (cm))/3)
        )

        new_mark.save()
        serializer = MarklistSerializer(new_mark)
        return Response(serializer.data)
