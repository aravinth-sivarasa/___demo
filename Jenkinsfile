pipeline {
    agent any
    tools {
        maven 'maven 3.6.3'
        jdk 'jdk8'
    }
    stages {
        stage ('Initialize') {
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                '''
                git 'https://github.com/aravinth-sivarasa/___demo.git'
            }
        }
        stage('Test'){
            steps{
                sh 'mvn clean test'
            }
        }
        stage('Build'){
             steps{
                sh 'mvn clean install -DskipTests'
             }
        }
    }
}