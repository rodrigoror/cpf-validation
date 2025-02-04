# Serverless Microservice to Validate Brazilian CPF

This tutorial walks you through creating a serverless microservice using **Azure Functions** to validate a Brazilian CPF (Cadastro de Pessoas Físicas). The microservice is written in **JavaScript/Node.js** and hosted on **Azure**. The code is also saved in a **GitHub** repository.

---

## **Prerequisites**

Before starting, ensure you have the following:

1. **Azure Account**: An active Azure subscription.
2. **Azure CLI**: Installed and configured. [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).
3. **Node.js**: Installed. [Download Node.js](https://nodejs.org/).
4. **Visual Studio Code**: Installed with the **Azure Functions extension**. [Download VS Code](https://code.visualstudio.com/).
5. **GitHub Account**: To host the code.

---

## **Step 1: Create the Azure Function Project**

1. Open **Visual Studio Code**.
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) to open the command palette.
3. Search for `Azure Functions: Create New Project` and select it.
4. Choose a folder for your project.
5. Select `JavaScript` as the language.
6. Choose `HTTP trigger` as the template.
7. Name the function `ValidateCpf`.
8. Set the authorization level to `Anonymous`.

---

## **Step 2: Implement the CPF Validation Logic**

1. Open the `ValidateCpf` folder in your project.
2. look into the `validateCpf.js` file 

## **Step 3: Test the Function Locally**

1. Press F5 in Visual Studio Code to run the function locally.
2. Use Postman or cURL to send a POST request:
    a. URL: http://localhost:7071/api/ValidateCpf
    b. Method: POST
    c. Headers: `Content-Type: application/json`
    d. Body: ```json {"cpf": "123.456.789-09"}```
3. You should receive a response like this:
`{
    "cpf": "12345678909",
    "isValid": true
}`

## **Step 4: Deploy the Function to Azure**

1. In Visual Studio Code, press `Ctrl + Shift + P` and search for Azure Functions: `Deploy to Function App.`
2. Sign in to your Azure account if prompted.
3. Create a new Function App in Azure (or select an existing one).
4. Wait for the deployment to complete.

## **Step 6: Test the Deployed Function**

1. After deployment, go to the Azure portal and find your Function App.
2. Copy the URL of your function (e.g., `https://<your-function-app>.azurewebsites.net/api/ValidateCpf`).
3. Test the function using the URL:
    a. Example: `https://<your-function-app>.azurewebsites.net/api/ValidateCpf?cpf=12345678909`

## **Conclusion**

You now have a serverless microservice deployed on Azure that validates Brazilian CPF numbers. The code is hosted on GitHub, and you can automate deployments using GitHub Actions. This project demonstrates how to use Azure Functions for lightweight, serverless APIs.

## Author
This tutorial was created by me. Feel free to reach out for questions or feedback!