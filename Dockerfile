FROM node:15.4.0 AS build-stage

WORKDIR /frontend
COPY frontend/. .

# * needed in order to deploy react app in subdir
ENV REACT_APP_BASE_URL=https://colour-ly.herokuapp.com/

# * Build React App
RUN npm install
RUN npm run build

FROM python:3.9

# * Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY backend/.  .
COPY --from=build-stage /frontend/build/* app/static/

# * Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2

# * Run flask environment
CMD gunicorn app:app