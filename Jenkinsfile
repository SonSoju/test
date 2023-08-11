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
        sh 'npm start'
      }
    }

  }
}