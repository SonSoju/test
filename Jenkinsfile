pipeline {
  agent any
  stages {
    stage('pull') {
      steps {
        sh 'git pull'
      }
    }

    stage('build') {
      steps {
        sh 'docker build .-t deploy-docker:ban-thuoc'
      }
    }

    stage('deloy') {
      steps {
        sh 'docker run -d --net tulip-net  -p 3006:3001 deploy-docker:ban-thuoc'
      }
    }

  }
}