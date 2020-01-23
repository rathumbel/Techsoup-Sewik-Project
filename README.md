### Dupa project

## how to run backend & frontend

 - install docker
 - `docker-compose up --build`

Note: for some reason while copying files `static` directory is lost. This is a small issue that shouldn't be too hard to fix, but due to this currently this doesn't serve frontend properly.

#### run only backend

 - `cd backend`
 - `./gradlew bootRun`
 
#### run only frontend

 - `cd frontend`
 - `npm run start`