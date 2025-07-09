# Directory Overview: documentation/Azure config

---
## Update Rules:
- This file is a living document and MUST be updated whenever its directory's contents or the details of its direct files change.
- When files/subdirectories are added/removed (excluding ignored ones), update the 'Directory Structure' and 'File Details' sections.
- When a file's purpose, role, usage, interconnections, or in-file structure changes, update its specific entry in 'File Details'.
- The 'In-File Structure' for each file should be comprehensive, covering all important variables, functions, classes, and their brief purposes.
- Do not overwrite entire sections; update specific entries.
---

## 1. Directory Purpose & Role
This directory contains JSON configuration files related to Azure deployments and services for the AI Tutor project, including details for frontend, key vault, database, and AI brains.

## 2. Directory Structure
```
.
├── aitutor-frontend-123.json
├── aitutor-keyvault-123.json
├── aitutordb.json
└── Brains.json
```

## 3. File Details

### 3.1 File: aitutor-frontend-123.json
* **Purpose:** Azure configuration for the AI Tutor frontend application.
* **Role:** Azure deployment configuration.
* **Usage:** Used for deploying and managing the frontend resources on Azure.
* **Interconnections:** Relates to the frontend application and Azure deployment pipelines.
* **In-File Structure:** JSON structure defining Azure resources and settings for the frontend.

### 3.2 File: aitutor-keyvault-123.json
* **Purpose:** Azure configuration for the AI Tutor Key Vault, used for securely storing secrets and keys.
* **Role:** Azure security configuration.
* **Usage:** Defines settings for the Azure Key Vault service.
* **Interconnections:** Used by other Azure services and the application to retrieve secrets.
* **In-File Structure:** JSON structure defining Azure Key Vault resources and settings.

### 3.3 File: aitutordb.json
* **Purpose:** Azure configuration for the AI Tutor database.
* **Role:** Azure database configuration.
* **Usage:** Defines settings for the Azure database service.
* **Interconnections:** Relates to the backend services that interact with the database.
* **In-File Structure:** JSON structure defining Azure database resources and settings.

### 3.4 File: Brains.json
* **Purpose:** Azure configuration related to the deployment and management of AI brain services.
* **Role:** Azure AI services configuration.
* **Usage:** Defines settings for AI-related services on Azure.
* **Interconnections:** Relates to the AI services and models used in the application.
* **In-File Structure:** JSON structure defining Azure AI service resources and settings.
