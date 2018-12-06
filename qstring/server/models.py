from django.contrib.postgres.fields import JSONField
from django.db import models

class Qstring(models.Model):
    title = models.CharField(max_length=100, unique=True)
    desc = models.CharField(max_length=100)
    mappingset = models.CharField(max_length=50)
    revision = models.CharField(max_length=100)
    submission_url = models.CharField(max_length=100)
    is_active = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(blank=True, null=True)

    def __str__(self):
      return self.title

class Submission(models.Model):
    sender = models.CharField(max_length=50)
    qstring = models.ForeignKey(Qstring, related_name='submissions', on_delete=models.CASCADE)
    payload = JSONField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(blank=True, null=True)

    class Meta:
      unique_together = ('sender', 'qstring', )

    def __str__(self):
        return self.sender