from django.db import models

class Marklist(models.Model):
    Roll_Number = models.CharField(max_length=15)
    Student_Name = models.CharField(max_length=100)
    Maths_mark = models.IntegerField()
    Physics_Mark = models.IntegerField()
    Chemistry_Mark = models.IntegerField()
    Total_mark = models.IntegerField()
    Percentage = models.FloatField()

    def __str__(self):
        return self.Student_Name
    

