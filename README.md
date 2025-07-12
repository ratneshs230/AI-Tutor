  # AI Tutor Application

  This is an AI-powered learning experience application. More details will be added here as the project progresses.

## Azure Deployment Guide

This guide outlines the steps to deploy the AI Tutor application to Microsoft Azure.

### Prerequisites

Before you begin, ensure you have the following:
*   An active Azure subscription.
*   Azure CLI installed and configured (`az login`).
*   Node.js and npm/yarn installed.
*   A GitHub repository for your project (if using GitHub Actions).

### Azure Resource Setup

Provision the following Azure resources. You can use the Azure portal or Azure CLI commands.

1.  **Azure Static Web App (for Frontend):**
    *   Host your React frontend application.
    *   Ensure it's connected to your GitHub repository for CI/CD.
2.  **Azure Cosmos DB (for Database - MongoDB API):**
    *   Create a Cosmos DB account with MongoDB API enabled.
    *   Note down the connection string (primary connection string) for your database.
3.  **Azure Key Vault:**
    *   Create a Key Vault to securely store sensitive application secrets (e.g., database connection strings, JWT secrets, social login keys).
    *   Grant your Azure Static Web App and Azure Function App (if applicable) access policies to retrieve secrets from this Key Vault.
4.  **Azure Function App (for Backend/AI Brains):**
    *   Host your Node.js Express backend and AI brain placeholder services.
    *   Configure it to use Node.js runtime.

### Environment Variables Configuration

Sensitive information and configuration values should be stored as environment variables in Azure, ideally linked to Azure Key Vault.

#### For Azure Static Web App (Frontend):

Configure application settings in the Azure portal for your Static Web App. These will be exposed as environment variables to your frontend build process.

*   `REACT_APP_API_BASE_URL`: Set this to the URL of your deployed Azure Function App (e.g., `https://your-function-app-name.azurewebsites.net/api`).

#### For Azure Function App (Backend/AI Brains):

Configure application settings in the Azure portal for your Function App. For sensitive secrets, link them to Azure Key Vault secrets.

*   `MONGO_URI`: Link this to a secret in your Azure Key Vault that stores your Cosmos DB MongoDB connection string.
    *   Example Key Vault Secret Reference: `@Microsoft.KeyVault(SecretUri=https://your-keyvault-name.vault.azure.net/secrets/MongoDbConnection/your-secret-version)`
*   `JWT_SECRET`: Link this to a secret in your Azure Key Vault.
*   `SESSION_SECRET`: Link this to a secret in your Azure Key Vault.
*   Other API keys (e.g., for external AI services, if implemented): Store them as secrets in Key Vault and reference them here.

### CI/CD Pipeline Setup (Example using GitHub Actions)

Azure Static Web Apps automatically set up a basic CI/CD pipeline when connected to GitHub. For the Function App, you might need a separate workflow.

#### For Frontend (Azure Static Web App):

When you create the Static Web App and link it to your GitHub repository, Azure automatically generates a GitHub Actions workflow file (e.g., `.github/workflows/azure-static-web-apps-*.yml`). This workflow builds and deploys your frontend whenever changes are pushed to the configured branch.

#### For Backend (Azure Function App):

You can set up a separate GitHub Actions workflow or use Azure DevOps pipelines.

**Example GitHub Actions Workflow (`.github/workflows/deploy-backend.yml`):**

```yaml
name: Deploy Backend to Azure Function App

on:
  push:
    branches:
      - main # or your main development branch
    paths:
      - 'server/**' # Trigger only when changes are in the server directory

env:
  AZURE_FUNCTIONAPP_NAME: your-function-app-name # Replace with your Function App name
  AZURE_FUNCTIONAPP_PACKAGE_PATH: 'server' # Path to your backend code
  NODE_VERSION: '18.x' # Node.js version

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout GitHub Action
        uses: actions/checkout@v4

      - name: Setup Node.js Version
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: 'Resolve Project Dependencies'
        shell: bash
        run: |
          pushd ${{ env.AZURE_FUNCTIONAPP_PACKAGE_PATH }}
          npm install
          popd

      - name: 'Run Build (if applicable)'
        shell: bash
        run: |
          pushd ${{ env.AZURE_FUNCTIONAPP_PACKAGE_PATH }}
          # npm run build # Uncomment if your backend has a build step
          popd

      - name: 'Deploy to Azure Function App'
        uses: Azure/functions-action@v1
        with:
          app-name: ${{ env.AZURE_FUNCTIONAPP_NAME }}
          package: ${{ env.AZURE_FUNCTIONAPP_PACKAGE_PATH }}
          publish-profile: ${{ secrets.AZURE_FUNCTIONAPP_PUBLISH_PROFILE }}
          # For Key Vault references, ensure your Function App has a System Assigned Managed Identity
          # and that identity has 'Get' and 'List' permissions on the Key Vault secrets.
```

**Important Security Note:** The `AZURE_FUNCTIONAPP_PUBLISH_PROFILE` should be stored as a GitHub Secret (or equivalent in your CI/CD system) and **NEVER** hardcoded in your workflow file. You can get the publish profile from the Azure portal for your Function App. 

After setting up these resources and pipelines, pushing changes to your repository will automatically trigger builds and deployments to Azure.