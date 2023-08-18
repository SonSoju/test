pipeline{
    agent any

    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/SonSoju/test.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                bat 'sudo npm install'
            }
        }
         stage('Install pm2'){
            steps {
                bat 'sudo npm install pm2 -g'
            }
        }
        
        stage('Deploy'){
            steps {
                bat 'sudo pm2 startOrRestart pm2.config.json'
            }
        }
    }
}