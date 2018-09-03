FROM python:3
ENV qstringEnv 1
RUN mkdir /qstring
WORKDIR /qstring
ADD requirements.txt /qstring/
RUN pip install -r requirements.txt
ADD . /qstring/
