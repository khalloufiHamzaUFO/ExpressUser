pipeline {
     agent any  
     tools {
        nodejs 'NODE_HOME'
    }

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
         
        stage('NPM V...') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Node V...') {
            steps {
                sh 'node --version'
            }
        }
         stage('NVM...') {
            steps {
                sh 'nvm --version'
            }
        }
    }
}
