---
title: Azure Portal Configuration Guide Microsoft Authentication
---

## Description

The following topic contains the procedure to configure Azure and Devolutions Server properly to use Microsoft authentication.

## Requirements

- Devolutions Server Scheduler installed and running.
- Microsoft Azure AD subscription.
- 1 Azure AD Web Application for the Devolutions Server Web application and the cache.

## Creation of Azure AD Applications and Devolutions Server Microsoft Configuration.

1. Log in to your Microsoft Azure Portal using administrator credentials at [https://portal.azure.com](https://portal.azure.com).
2. To simplify the configuration steps and to easily copy and paste all the required parameters, please have side by side the Azure Portal and the Devolutions Server web UI opened in **Administration - Server Settings - Authentication - Microsoft Authentication**.
3. Once logged in, go to **Azure Active Directory - Properties**.
    1. Click on the **Copy to clipboard** button beside the **Tenant ID** property.
        ![](https://kb.devolutions.net/images/kb4401.png)

    2. Paste this value in the **Tenant ID** field of the Devolutions Server **Microsoft Authentication** configuration page.
        > The **Use specific client ID for users and user groups cache** option should only be check to support configurations when migrating from an older Devolutions Server version.
        ![](https://kb.devolutions.net/images/kb4982.png)


4. Click **App registrations** in the **Manage** menu section.
    ![](https://kb.devolutions.net/images/kb4403.png)

5. **DEVOLUTIONS SERVER APPLICATION**
    1. Create the application using the **New registration** button in Azure portal.
        ![](https://kb.devolutions.net/images/kb4404.png)

    2. Choose a significant name for the application. This name will not be used outside of Azure Portal.

    3. Set which **Supported account types** that will be allowed to connect. Usually selecting **Accounts in this organizational directory only** is more than enough for your Azure AD authentication.

    4. Set the **Redirect URI** to **Web** and set a valid URL. This property must be set with the URL to reach your Devolutions Server instance with **/api/external-provider-response** at the end.
        ![](https://kb.devolutions.net/images/kb5010.png)

    5. Then, click on the **Register** button.

    6. Click on the **Copy to clipboard** button next to the **Application (client) ID**.
        ![](https://kb.devolutions.net/images/kb4407.png)

    7. Paste the **Application (client) ID** in the **Client ID** field of the Web application section of the Devolutions Server **Microsoft Authentication** configuration page.
        ![](https://kb.devolutions.net/images/kb4984.png)

    8. Select the **Authentication** tab of the Azure Web application and enable the **ID tokens** under the **Implicit grant and hybrid flows** section.
        ![](https://kb.devolutions.net/images/kb4418.png)

    9. Click **Save**.

    10. Select the **Certificates & secrets** tab and click **New client secret**.
        ![](https://kb.devolutions.net/images/kb5011.png)

    11. Set a description and when this client secret key will expire. Then click on the **Add** button.
        ![](https://kb.devolutions.net/images/kb4423.png)

    12. Click on the **Copy to clipboard** button of the **Value**. Be sure to save the **Value** in a safe place as once you will switch to another page of the Azure portal, the copy button will no longer be available.
        ![](https://kb.devolutions.net/images/kb4424.png)

    13. Paste the **Value** in the **Secret key** field of the Web application section of the Devolutions Server **Microsoft Authentication** configuration page.

    14. Select the **API permissions** tab of the Azure Web application and click on the **Add a permissions** button.
        ![](https://kb.devolutions.net/images/kb4427.png)

    15. Select **Microsoft Graph**.
        ![](https://kb.devolutions.net/images/kb4428.png)

    16. Select **Application permissions**.
        ![](https://kb.devolutions.net/images/kb4429.png)

    17. Select **Group.Read.All** under the section **Group** and **User.Read.All** under the **User** section. Then click on the **Add permissions** button.
        ![](https://kb.devolutions.net/images/kb4986.png)
        ![](https://kb.devolutions.net/images/kb4987.png)

    18. Click the **User.Read** permission and click on the **Remove permission** button.
        ![](https://kb.devolutions.net/images/kb4432.png)

    19. Confirm the removal by clicking **Yes, remove** since this permission isn't required for the Sync application.

    20. If the **Status** of the **User.Read.All** and **Group.Read.All** permissions are at **Not granted**, an administrator must grant consent.
        > It may be possible that the newly added permissions require an Azure administrator to consent. If the account used to create the application is already an administrator in Azure, click on the **Grant admin consent for &lt;your organization&gt;** button.

        ![](https://kb.devolutions.net/images/kb8010.png)

6. This is how the Devolutions Server **Microsoft Authentication** configuration page should look like. Click **Save**.
![](https://kb.devolutions.net/images/kb4981.png)

7. You will then be able to use the **Microsoft** button on the web interface.
    > After activating the Microsoft Authentication, it may take a while for the cache to load before being able to import users and user groups. If the issue persists, please consult this topic for troubleshooting: Unable to Import Azure AD Users or Groups.

    ![](https://kb.devolutions.net/images/kb4980.png)

8. Following the login process, you may get this prompt to authorize the application to read the user accounts and groups. You need to check the **Consent on behalf of your organization** option and then click **Accept**.
![](https://kb.devolutions.net/images/kb8108.png)