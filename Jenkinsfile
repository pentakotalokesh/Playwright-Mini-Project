pipeline {
  agent any
  tools {
    nodejs 'NodeJS 23'
  }

  environment {
    RESULTS_DIR = "allure-results-${env.BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/pentakotalokesh/Playwright-Mini-Project.git', branch: 'master'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh '''
          npm ci
          npx playwright install
          npm install -D allure-playwright
        '''
      }
    }

    stage('Clean Results Folder') {
      steps {
        sh 'rm -rf allure-results*'
      }
    }

    stage('Run Tests') {
      steps {
        sh """
          mkdir -p ${RESULTS_DIR}
          npx playwright test --reporter=allure-playwright
          mv allure-results/* ${RESULTS_DIR}/ || true
        """
      }
    }

    stage('Generate Allure Report') {
      steps {
        allure includeProperties: false, jdk: '', results: [[path: "${RESULTS_DIR}"]]
      }
    }
  }

  post {
    success {
      slackSend(
        channel: '#all-the-automation-playbill',
        message: """
        🎉 *Build #${env.BUILD_NUMBER} — Success!*  
        ✅ All tests completed with zero regrets.  
        📎 *Allure Report:* <${env.BUILD_URL}allure/|Click to view detailed results>  
        🔗 *Build URL:* <${env.BUILD_URL}|Open in Jenkins>  
        👀 Time to celebrate (or start the next one)!
        """
      )
    }

    failure {
      slackSend(
        channel: '#all-the-automation-playbill',
        message: """
        💥 *Build #${env.BUILD_NUMBER} — Failed!*  
        ⚠️ Something went sideways.  
        🪵 *Logs:* <${env.BUILD_URL}console|Check the console output>  
        📎 *Allure (if available):* <${env.BUILD_URL}allure/|Attempt to view results>  
        🧪 Grab a coffee. It’s debugging time.
        """
      )
    }

    always {
      archiveArtifacts artifacts: "${RESULTS_DIR}/**", allowEmptyArchive: true
    }
  }
}
