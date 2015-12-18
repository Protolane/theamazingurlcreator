from django.db import models
import json, random

OPTIONS = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '$', '(', ')', '[', ']', '{', '}', '-', '_', ',', '.']

def _try(o):
    try:
        return o.__dict__
    except:
        return str(o)

class URL(models.Model):
    target = models.URLField(null=True)
    createDate = models.DateTimeField(null=True)
    views = models.PositiveIntegerField(default=0)
    
    def to_JSON(self):
        return json.dumps(self, default=lambda o: _try(o), sort_keys=True, indent=0, separators=(',',':')).replace('\n', '')
    

class ShortURL(URL):
    identifier = models.CharField(max_length = 4, unique = True)
    
    def make_id(self):
        """
        creates a random unique 4-alfanumeric characters long identifier
        """
        temp = ""
        for i in range(0, 4):
            temp += random.choice(OPTIONS)
            
        try:
            ShortURL.objects.get(identifier=temp)
            self.make_id()
        except self.DoesNotExist:
            self.identifier = temp


class RegularRandomURL(URL):
    identifier = models.CharField(max_length = 10, unique = True)
    
    def make_id(self):
        """
        creates a random unique 10-alfanumeric characters long identifier
        """
        temp = ""
        for i in range(0, 10):
            temp += random.choice(OPTIONS)
            
        try:
            RegularRandomURL.objects.get(identifier=temp)
            self.make_id()
        except self.DoesNotExist:
            self.identifier = temp

class VeryLongURL(URL):
    identifier = models.CharField(max_length = 80, unique = True)
    
    def make_id(self):
        """
        creates a random unique 80-alfanumeric characters long identifier
        """
        temp = ""
        for i in range(0, 80):
            temp += random.choice(OPTIONS)
            
        try:
            VeryLongURL.objects.get(identifier=temp)
            self.make_id()
        except self.DoesNotExist:
            self.identifier = temp

class OneDigitURL(URL):
    """ this should be some kind of premium feature"""
    
    identifier = models.CharField(max_length = 1, unique = True)
    
    def make_id(self):
        """
        creates a random unique 1-alfanumeric character long identifier
        """
        temp = random.choice(OPTIONS)
            
        try:
            OneDigitURL.objects.get(identifier=temp)
            self.make_id()
        except self.DoesNotExist:
            self.identifier = temp
    

class TwoDigitsURL(URL):
    """ premium too """
    
    identifier = models.CharField(max_length = 2, unique = True)
    
    def make_id(self):
        """
        creates a random unique 2-alfanumeric characters long identifier
        """
        temp = ""
        for i in range(0, 2):
            temp += random.choice(OPTIONS)
            
        try:
            TwoDigitsURL.objects.get(identifier=temp)
            self.make_id()
        except self.DoesNotExist:
            self.identifier = temp
            

"""

class UntrustworthyURL(URL):
    identifier = models.CharField(max_length = 255, unique = True)
    
    def makeId(self):
        """"""
        creates a random unique sentence made up from swear words like: enlarge your dick, whore, magic pills, drugs, get pussy now...
        """"""

"""
    
class SentenceURL(URL):
    identifier = models.CharField(max_length = 255, unique = True)

