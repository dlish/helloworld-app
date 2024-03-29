#!groovy

version = "0.0.${env.BUILD_NUMBER}"
repo    = "dlish27"
app     = "$repo/helloworld-app"

node {
    stage('checkout') {
        checkout scm
    }

    def tag = "git-${gitCommit()}"

    // Feature branch build steps
    stage('docker build/test Helloworld App') {
        sh "docker build -t $app:$tag ."
    }

    stage('integration tests') {
        echo "implement integration tests"
    }

    stage('static code analysis') {
        echo "implement static code analysis"
    }

    // PR steps
    if (isPR()) {
        stage('e2e') {
            echo "Implement e2e"
        }
    }

    // Master steps
    if (isMaster()) {
        withCredentials([
            usernamePassword(credentialsId: 'docker-hub-id', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')
        ]) {
            stage('docker publish') {
                sh "docker tag $app:$tag $app:$version"
                sh "docker login -u $USERNAME -p $PASSWORD"
                sh "docker push $app:$version"
            }
        }

        git branch: 'qa', credentialsId: 'bb7477ad-50e9-4a82-8f97-c49d2fa012e5', poll: false, url: 'https://github.com/dlish/helloworld-infrastructure.git'

        setVersion()
        sh "git add docker-compose.yml"
        sh "git commit -m 'jenkins-bot: Update the Helloworld App -> $version'"

        withCredentials([
            usernamePassword(credentialsId: 'bb7477ad-50e9-4a82-8f97-c49d2fa012e5', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
            sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/dlish/helloworld-infrastructure.git qa"
        }
    }
}

def gitCommit() {
    def commit = sh (returnStdout: true, script: "git rev-parse --short HEAD")
    return commit.trim()
}

def setVersion() {
    sh "sed -i.bak 's,$app:.*,$app:$version,' docker-compose.yml"
}

def isMaster() {
    return env.BRANCH_NAME == "master"
}

def isPR() {
    return env.BRANCH_NAME =~ /(?i)^pr-/
}