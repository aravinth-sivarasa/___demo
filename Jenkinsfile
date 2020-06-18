node{
  stage ('Verify') {
    git url: 'https://github.com/cyrille-leclerc/multi-module-maven-project'
    withMaven(jdk: 'Local Java', maven: 'Maven 3.6.3') {
          sh "mvn clean verify"
    }
  }
}