pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install pm2') {
      steps {
        sh 'sudo npm install pm2 -g'
      }
    }

    stage('Deploy') {
      steps {
        sh 'pm2 startOrRestart pm2.config.json'
      }
    }

  }
}