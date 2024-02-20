pipeline {
     agent any     

    stages {
        stage('Installing bcrypt...') {
            steps {
                sh 'npm bcrypt '
            }
        }
        stage('Installing mongoose...') {
            steps {
                sh 'npm mongoose '
            }
        }
        stage('Installing jsonwebtoken...') {
            steps {
                sh 'npm jsonwebtoken '
            }
        }
        stage('Installing...') {
            steps {
                sh 'npm install '
            }
        }
         
        stage('Building...') {
            steps {
                sh 'npm start'
            }
        }
    }
}
