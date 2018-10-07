FROM python:3.7
ENV qstring 1
RUN mkdir /qstring
WORKDIR /qstring
ADD requirements.txt /qstring/
RUN pip install -r requirements.txt
ADD . /qstring/
