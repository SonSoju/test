pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'docker build -t deploy-docker:ban-thuoc .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d --net tulip-net  -p 3006:3008 deploy-docker:ban-thuoc'
      }
    }

  }
}