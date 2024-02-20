pipeline {
     agent any     

    stages {
        stage('Installing bcrypt...') {
            steps {
                sh 'npm install bcrypt '
            }
        }
        stage('Installing mongoose...') {
            steps {
                sh 'npm install mongoose '
            }
        }
        stage('Installing jsonwebtoken...') {
            steps {
                sh 'npm install jsonwebtoken '
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
