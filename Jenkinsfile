pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'docker run --rm -v "${WORKSPACE}":/usr/src/app -w /usr/src/app node:18 npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm -v "${WORKSPACE}":/usr/src/app -w /usr/src/app node:18 npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'docker run --rm -v "${WORKSPACE}":/usr/src/app -w /usr/src/app node:18 npm run build'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker run --rm -p 3000:3000 -v "${WORKSPACE}":/usr/src/app -w /usr/src/app node:18 node index.js'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! All tests passed and app runs.'
        }
        failure {
            echo 'Pipeline failed. Check the logs above for which stage failed.'
        }
    }
}