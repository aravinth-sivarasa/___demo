node{
  agent{
    docker{
        image "maven:3.6.3-jdk-8-openj9"
    }
  }
  stage ('Verify') {
    git url: 'https://github.com/cyrille-leclerc/multi-module-maven-project'
    sh "mvn clean verify"
  }
}