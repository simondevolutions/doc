---
eleventyComputed:
  title: List of Internet Endpoints Accessed by {{ en.RDM }}
---
This is the list of addresses that are accessed by {{ en.RDM }} during normal operation, as well as the setting(s) to disable/prevent this access.  

{% snippet icon.badgeWarning %}
{{ en.RDM }} is a tool that integrates more than 150 technologies. This list ONLY contains the endpoints that are accessed by the core product itself. We use a "best effort" approach to maintain this list, but it does NOT replace proper IT security practices. If security is paramount, it would be better to first block all internet access, then allowlist desired addresses as needed.
{% endsnippet %}  

{% snippet icon.shieldNotice %}
As part of a standard visit to a website using the HTTPS protocol, the certificate used by the remote site is validated using industry best practices. A certificate contains multiple URLs which will be accessed to perform validation. The URLs vary not only for each **site**, but also in **time** whenever they are renewed. Please refer to [Certificate Validation](/kb/remote-desktop-manager/knowledge-base/certificate-validation) for further information.
{% endsnippet %}

## Endpoints List
<table>
	<tr>
		<td>
Description
		</td>
		<td>
URL
		</td>
		<td>
Related Setting(s) / Action
		</td>
	</tr>
	<tr>
		<td>
RDM update check
		</td>
		<td>
https<area>://devolutions.net
		</td>
		<td>
Options – Enable check for updates
		</td>
	</tr>
	<tr>
		<td>
RDM update - package download
		</td>
		<td>
https<area>://cdn.devolutions.net
		</td>
		<td>
User action in the upgrade available dialog
		</td>
	</tr>
	<tr>
		<td>
Devolutions Cloud - our online services, as well as obtaining product news
		</td>
		<td>
https<area>://cloud.devolutions.net
		</td>
		<td>
File – Cloud account<br>
Enable Internet Access<br>
		</td>
	</tr>
	<tr>
		<td>
RDM Addons
		</td>
		<td>
https<area>://remotedesktopmanager.com
		</td>
		<td>
Tools – Add-on Manager
		</td>
	</tr>
	<tr>
		<td>
Devolutions Cloud Login
		</td>
		<td>
https<area>://login.devolutions.com
		</td>
		<td>
File – Cloud account
		</td>
	</tr>
	<tr>
		<td>
Devolutions Store - Upgrade/Buy RDM
		</td>
		<td>
https<area>://store.devolutions.net
		</td>
		<td>
User action in the License expiry dialog
		</td>
	</tr>
	<tr>
		<td>
Telemetry
		</td>
		<td>
https<area>://telemetry.devolutions.net
		</td>
		<td>
Options – Disable telemetry
		</td>
	</tr>
	<tr>
		<td>
Have I Been Pwned
		</td>
		<td>
https<area>://api.pwnedpasswords.com
		</td>
		<td>
System settings – Pwned check<br>
Options – Disable password pwned Check<br>
		</td>
	</tr>
	<tr>
		<td>
Yubikey
		</td>
		<td>
https<area>://api.yubico.com<br>
https<area>://api2.yubico.com<br>
https<area>://api3.yubico.com<br>
https<area>://api4.yubico.com<br>
https<area>://api5.yubico.com<br>
		</td>
		<td>
Options – Use Yubikey
		</td>
	</tr>
</table>
