pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'yarn add'
      }
    }

    stage('start') {
      steps {
        sh 'yarn start'
      }
    }

  }
}
