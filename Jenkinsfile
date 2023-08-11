pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh '''npm install
'''
      }
    }

    stage('start') {
      steps {
        sh 'npm install -g pm2'
      }
    }

    stage('check') {
      steps {
        sh 'pm2 start index.js'
      }
    }

  }
}