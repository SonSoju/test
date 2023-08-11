pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh '''sudo npm install

sudo npm install -g pm2'''
      }
    }

    stage('start') {
      steps {
        sh 'pm2 start index.js'
      }
    }

  }
}