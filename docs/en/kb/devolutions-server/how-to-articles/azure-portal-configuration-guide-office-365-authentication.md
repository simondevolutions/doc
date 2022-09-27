---
title: Azure Portal Configuration Guide Office365 Authentication
---

## Description

> Office365 Authentication will be deprecated by Microsoft this coming December 2022. It is being replaced with the Microsoft Authentication. For configuration information, please refer to the topic Azure Portal Configuration Guide Microsoft Authentication

> This topic is for Devolutions Server version 2022.1 and older, for newer version please refer to Azure Portal Configuration Guide Microsoft Authentication.

> Microsoft Azure AD subscription is required to configure Office365 authentication in Devolutions Server.

The following topic contains the procedure to configure Azure and Devolutions Server properly to use Office365 authentication.

## Requirements

- Devolutions Server Scheduler installed and running.
- Microsoft Azure AD subscription.
- An Azure Public client (mobile & desktop) Application for the Remote Desktop Manager Native application.
- 2 Azure AD Web Application. One for the Devolutions Server Web application and the other one for the **Users** and **User groups** Cache application.

## Creation of Azure AD Applications and Devolutions Server Office365 Configuration.

1. Log in to your Microsoft Azure Portal using administrator credentials at [https://portal.azure.com](https://portal.azure.com).

2. To simplify the configuration steps and to easily copy and paste all the required parameters, please have side by side the Azure Portal and the Devolutions Server web UI opened in Administration - System Settings - Authentication - Office365.

3. Once logged in, go to **Azure Active Directory - Properties**.

    1. Click on the **Copy to clipboard** button beside the **Tenant ID** property.
        ![](https://kb.devolutions.net/images/kb4401.png)

    2. Paste this value in the **Tenant ID** field of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4402.png)

4. Click **App registrations** in the **Manage** menu section.
    ![](https://kb.devolutions.net/images/kb4403.png)

5. **DEVOLUTIONS SERVER NATIVE APPLICATION (RDM)**

    1. Create the application using **New registration** button.
        ![](https://kb.devolutions.net/images/kb4404.png)

    2. Choose a significant name for the application. This name will not be used outside of Azure Portal.

    3. Set which **Supported account types** that will be allowed to connect. Usually selecting **Accounts in this organizational directory only** is more than enough for your Azure AD authentication.

    4. Set the **Redirect URI** to **Public client (mobile & desktop)** and set a valid URI. This value must respect the Azure URI format and must be the same in the Devolutions Server Office365 configuration page.
        ![](https://kb.devolutions.net/images/kb4405.png)

    5. Copy this URI and click on the **Register** button to complete the application registration.

    6. Paste the URI in the **Redirect URI** field of the **Native application (RDM)** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4406.png)

    7. Click on the **Copy to clipboard** button beside the **Application (client) ID** of the Azure client (RDM) application.
        ![](https://kb.devolutions.net/images/kb4407.png)

    8. Paste the **Application (client) ID** in the **Client ID** field of the **Native application (RDM)** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4408.png)

    9. Select the **API Permissions** tab of the Azure client (RDM) application and click on the **Add a permission** button.
        ![](https://kb.devolutions.net/images/kb4409.png)

        > As the Azure Active Directory Graph button is no longer available on the Azure Portal, please contact us at [service@devolutions.net](mailto:service@devolutions.net) and we will send you the instructions to complete steps 5.10 to 5.16.

    10. At the bottom of the permissions list, click on the **Azure Active Directory Graph** button.
        ![](https://kb.devolutions.net/images/kb4410.png)

    11. Click on the **Delegated permissions** button.
        ![](https://kb.devolutions.net/images/kb4411.png)

    12. Select **User.Read** under **User** section and click on the **Add permissions** button.
        ![](https://kb.devolutions.net/images/kb4412.png)

    13. The following screen shows the actual permissions set for the Azure client (RDM) application.
        ![](https://kb.devolutions.net/images/kb4413.png)

    14. Select the User.Read permission under Microsoft Graph and remove it as this permission isn't required for the application.
        ![](https://kb.devolutions.net/images/kb8008.png)

    15. Select the **Manifest** tab and copy the resource application ID of the Azure client (RDM) application which contains the **00000002-0000-0000-c000-000000000000** value.
        ![](https://kb.devolutions.net/images/kb4414.png)

    16. Paste the resource application ID in the **Resource ID** field of the **Native application (RDM)** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4415.png)

6. **DEVOLUTIONS SERVER WEB APPLICATION**

    1. Create the application using the **New registration** button in Azure portal.
        ![](https://kb.devolutions.net/images/kb4404.png)

    2. Choose a significant name for the application. This name will not be used outside of Azure Portal.

    3. Set which **Supported account types** that will be allowed to connect. Usually selecting **Accounts in this organizational directory only** is more than enough for your Azure AD authentication.

    4. Set the **Redirect URI** to Web and set a valid URL. This property must be set with the URL to reach your Devolutions Server instance with **/login** at the end.
        ![](https://kb.devolutions.net/images/kb4416.png)

    5. Then, click on the **Register** button to create the application.

    6. Click on the **Copy to clipboard** button of the **Application (client) ID**.
        ![](https://kb.devolutions.net/images/kb4407.png)

    7. Paste the **Application (client) ID** in the **Client ID** field of the **Web application** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4417.png)

    8. Select the **Authentication** tab of the Azure Web application and enable the **ID tokens** under **Advanced settings** section.
        ![](https://kb.devolutions.net/images/kb4418.png)

7. **DEVOLUTIONS SERVER USERS AND USER GROUPS CACHE APPLICATION**

    1. Create the application using **New application registration** button.
        ![](https://kb.devolutions.net/images/kb4404.png)

    2. Choose a significant name for the application This name will not be used outside of Azure Portal.

    3. Set which **Supported account types** that will be allowed to connect. Usually selecting **Accounts in this organizational directory only** is more than enough for your Azure AD authentication.

    4. Set the **Redirect URI** to Web and set a valid URL.
        ![](https://kb.devolutions.net/images/kb4419.png)

    5. Copy this URI and click on the **Register** button to create the application.

    6. Paste the URI in the **Redirect URI** field of the Users and **User groups Cache** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4420.png)

    7. Click on the **Copy to clipboard** button of the **Application (client) ID**.
        ![](https://kb.devolutions.net/images/kb4421.png)

    8. Paste the **Application (client) ID** in the **Client ID** field of the **Users and User groups Cache** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4422.png)

    9. In the Azure Sync application, select **Certificates & Secrets** to create a new client secret.

    10. Click on the **New client secret** button, set a description and when this client secret key will expire. Then click on the **Add** button.
        ![](https://kb.devolutions.net/images/kb4423.png)

    11. Click on the **Copy to clipboard** button of the **Client secret**. Be sure to save the **Client secret** in a safe place as once you will switch to another page of the Azure portal, the copy button will no longer be available.
        ![](https://kb.devolutions.net/images/kb4424.png)

    12. Paste the **Client secret** in the **Secret key** field of the **Users and User Groups Cache** section of the Devolutions Server **Office365** configuration page.
        ![](https://kb.devolutions.net/images/kb4425.png)

    13. The Azure Sync application, select **API permissions** or click on the **View API Permissions** button to set the proper permissions on the Sync application.
        ![](https://kb.devolutions.net/images/kb4426.png)

    14. Click on the **Add a permissions** button.
        ![](https://kb.devolutions.net/images/kb4427.png)

    15. Select **Microsoft Graph**.
        ![](https://kb.devolutions.net/images/kb4428.png)

    16. Select **Application permissions**.
        ![](https://kb.devolutions.net/images/kb4429.png)

    17. Select **Group.Read.All** permission under section Group and **User.Read.All** permission under User section. Then click on the **Add permissions** button.
        ![](https://kb.devolutions.net/images/kb4430.png)
        ![](https://kb.devolutions.net/images/kb4431.png)

    18. Select the **User.Read Delegated** permission and click on the *Remove permission* button as this permission isn't required for the Sync application.
        ![](https://kb.devolutions.net/images/kb4432.png)

    19. Administration consent for the Microsoft Graph **User.Read.All** and **Group.Read.All** permissions.
        > It may be possible that the newly added permission require an Azure administrator to consent. If the account used to create the application is already an administrator in Azure, please click on the Grant admin consent for &lt;your organization&gt; button.

        ![](https://kb.devolutions.net/images/kb8010.png)

8. This is how the Devolutions Server Office365 configuration page should look like. Click **Save**.
    ![](https://kb.devolutions.net/images/kb4433.png)

9. Finally, enable the **Use Office365** authentication option in **File - Data Sources** in Remote Desktop Manager or use the **Office 365 Log In** button on the web interface.
    ![](https://kb.devolutions.net/images/kb4434.png)
    ![](https://kb.devolutions.net/images/kb4435.png)