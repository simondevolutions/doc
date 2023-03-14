---
title: Security Checklist
---
To achieve the highest level of security, you should adhere to the following guidelines.  

{% snippet icon.shieldWarning %} 
These recommendations are valid ONLY if the {{ en.RDMS }} instance is hosted on an intranet EXCLUSIVELY. You must involve a person with knowledge of Internet security to safely host any application on the Internet. You need to protect the site from Denial of Service attacks using an appliance or a security module that is external to {{ en.RDMS }} . 
{% endsnippet %}
 
## General 

* Use Windows Authentication exclusively. 
* Ensure all LDAP communication uses [LDAP over SSL](https://rb.gy/enaq3a).
* Run the latest version of DVLS Server.
* Apply security patched to Windows.

## SQL Server 

* Enable only the Windows Authentication Mode . 
* Create a domain account that will be used to create the database ( VaultOwner ), as well as another account that will be used by the web server to connect to the database ( VaultRunner ). The latter must have only the minimal set of permissions to perform its tasks. 
* Communicate ONLY through an encrypted connection, please see [Encrypting Connections to SQL Server](/server/getting-started/security-checklist/encrypting-connections-sql-server/) . 

## Web Server 

* Configure the application pool to use domain credentials. This account will be added to the SQL Server as a login and be granted only the permissions that are needed ( VaultRunner ). 
* Serve content through SSL (https). See [Configure SSL](/kb/devolutions-server/how-to-articles/configure-ssl/) . 



