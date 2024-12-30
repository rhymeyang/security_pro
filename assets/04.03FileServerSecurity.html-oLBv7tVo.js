import{_ as o,c as a,b as t,a as e,d as s,o as r}from"./app-CLft73zz.js";const n={};function l(c,i){return r(),a("div",null,i[0]||(i[0]=[t("<p>As you study this section, answer the following questions:</p><ul><li>How can you identify inherited permissions?</li><li>How do Share and NTFS permissions differ?</li><li>On which elements can NTFS permissions be set?</li><li>How can you view the users who have permissions for a particular drive?</li></ul><p>In this section, you will learn to:</p><ul><li>Configure NTFS permissions.</li><li>Disable inheritance.</li></ul><p>Key terms for this section include the following:</p>",5),e("table",{class:"terms"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Term "),e("th",{scope:"col",class:"fw-bold"}," Definition ")])]),e("tbody",null,[e("tr",null,[e("td",null," Shared folder "),e("td",null," A folder whose contents are available over the network. ")]),e("tr",null,[e("td",null,[s(" Network-attached "),e("br"),s(" storage (NAS) ")]),e("td",null," A standalone storage device or appliance that acts as a file server. ")]),e("tr",null,[e("td",null," Storage area network (SAN) "),e("td",null," A special network composed of high-speed storage that is shared by multiple servers. ")])])],-1),e("p",null,"This section helps you prepare for the following certification exam objectives:",-1),e("table",{class:"objectives"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Exam "),e("th",{scope:"col",class:"fw-bold"}," Objective ")])]),e("tbody",null,[e("tr",null,[e("td",null," TestOut Security Pro "),e("td",null,[s(" 3.1 Harden Computer Systems "),e("blockquote",null,[s(" 3.1.1 Configure File system Inheritance "),e("br"),s(" 3.1.3 Configure NTFS Permissions ")])])]),e("tr",null,[e("td",null," CompTIA Security+ SY0-601 "),e("td",null,[s(" 1.6 Explain the security concerns associated with various types of vulnerabilities. "),e("ul",null,[e("li",null,[s(" Weak configurations "),e("ul",null,[e("li",null," Open permissions ")])])]),s(" 3.6 Given a scenario, apply cybersecurity solutions to the cloud. "),e("ul",null,[e("li",null,[s(" Cloud security controls, Storage "),e("ul",null,[e("li",null," Permissions ")])])]),s(" 3.8 Given a scenario, implement authentication and authorization solutions. "),e("ul",null,[e("li",null,[s(" Access control schemes "),e("ul",null,[e("li",null," Filesystem permissions ")])])])])])])],-1),t('<h2 id="_4-3-1-file-server-security" tabindex="-1"><a class="header-anchor" href="#_4-3-1-file-server-security"><span>4.3.1 File Server Security</span></a></h2><h3 id="file-server-security-00-00-00-37" tabindex="-1"><a class="header-anchor" href="#file-server-security-00-00-00-37"><span>File Server Security 00:00-00:37</span></a></h3><p>File servers are an attractive target because they almost always store some type of valuable data, such as client contacts, credit card information, employee files, company performance records--the list goes on and on. In this lesson, we&#39;ll look at some steps you should take to properly secure your organization&#39;s file servers.</p><p>Let&#39;s start by looking at some of the best practices you should follow when it comes to file server security. Keep in mind that these are generic best practices that can be applied to any type of file server, whether it&#39;s a dedicated NAS, a SAN, a Microsoft server, or a Linux server.</p><h3 id="best-practices-00-37-03-31" tabindex="-1"><a class="header-anchor" href="#best-practices-00-37-03-31"><span>Best Practices 00:37-03:31</span></a></h3><p>The first best practice is to keep all file servers physically secure. Remember, it&#39;s very easy for someone to gain access to data if they have physical access to a system, so employ the appropriate physical controls with your file servers as you would with any other networking hardware device.</p><p>Next, is the principle of least privilege. This is the concept that users should only have access to the information and resources that are necessary for them to perform their job, and that&#39;s it. They shouldn&#39;t have any more privileges than they need. This helps prevent privilege creep, where a user slowly accumulates more and more privilege than they need to perform their job.</p><p>Another best practice is to use full-disk encryption on all storage mediums. This may or may not be possible for your organization depending on its policies. Encrypting an entire drive and keeping it encrypted as people work requires a significant amount of resources. Due to this resource overhead, it might not be feasible to use full-disk encryption. Instead, you might want to consider only encrypting backups.</p><p>Another option is to fully decrypt drives when they&#39;re powered on and encrypt them when the system shuts down. This may not prevent someone from transferring files to a USB drive, but does prevent someone physically stealing the entire drive or server.</p><p>Another security best practice that applies to almost every system, not just files servers, is to remove unnecessary software and disable unused services. You can think of this as a principle of least privilege with applications.</p><p>In other words, you should only have the applications and services that are necessary for the file server to function, and nothing more. Having unused applications or services increases the attack surface area of a system and makes securing it that much harder. In addition, the system is more susceptible to zero-day attacks.</p><p>The next practice you should employ is auditing. Make sure that your file server has proper auditing enabled that can track user behavior, such as when files are accessed, modified, deleted, and moved. This helps you identify abnormal behavior on the system and can even help you detect that your system has been compromised.</p><p>The last security best practice is to use implicit deny access control lists, or ACLs. ACLs control the system&#39;s permission. A good security practice is to prevent access to everything that isn&#39;t explicitly</p><p>granted. In other words, deny access to everyone except people with explicitly granted permissions. This control is a part of the concept of least privilege mentioned earlier.</p><p>The opposite of implicit deny is explicit deny, meaning that you&#39;re only looking for people you want to deny access to. The problem with this approach is that you have to do a bit of guesswork and research to deny access to files. And if you happen to forget about a particular group or file tree, you could inadvertently give everyone access to sensitive files. As a result, your system will be more secure if you use implicit deny.</p><h3 id="secure-protocols-vs-unsecure-protocols-03-31-06-17" tabindex="-1"><a class="header-anchor" href="#secure-protocols-vs-unsecure-protocols-03-31-06-17"><span>Secure Protocols vs. Unsecure Protocols 03:31-06:17</span></a></h3><p>At some point, we all need to download or transmit files using the internet, which is inherently unsecure. Let&#39;s talk about different ways files can be transmitted across a network. Some of these protocols are secure, and some aren&#39;t. As a security administrator, you need to know the difference and decide which of these protocols to use on your systems.</p><p>File Transfer Protocol, or FTP, is an older TCP/IP protocol that&#39;s used for transferring files across systems. It was adopted as a TCP/IP standard through RFC 959 in 1985. FTP is inherently unsecure since it doesn&#39;t encrypt data, including usernames and passwords. As such, FTP shouldn&#39;t be used for transferring sensitive data over an unsecure network such as the internet. Another problem with FTP is that it allows anonymous user access. This option can be disabled, but it&#39;s still a security risk. If you must use FTP, there are ways to use it more securely by pairing it with an encryption protocol. There are a couple of ways to do this.</p><p>The first way is to use a VPN connection that wraps all communications, FTP packets included, in an encrypted data packet. This would encrypt all traffic between the host and the FTP file server. IPsec or SSH can be used to create secure tunneling with FTP to secure the transmission. When use with an SSH tunnel, FTP is called FTP over SSH, or Secure FTP.</p><p>Another way is to use FTPS. FTPS uses SSL and TLS encryption to secure data transmissions. FTPS is similar to HTTPS in that it uses the SSL and TLS cryptographic protocols to secure communications and also requires the use of SSL certificates to encrypt traffic.</p><p>Another protocol that you can use is the Secure Copy Protocol, or SCP. SCP is similar to the Linux copy command cp. SCP uses the Secure Shell Protocol, or SSH, which is a secure tunnel. SCP is an older protocol that&#39;s entirely text-based—that is, you need to type the command, including the directories to transmit, into a command line interface. While it&#39;s secure, it doesn&#39;t offer any type of directory traversing.</p><p>As a replacement for SCP, you can use SFTP. SFTP stands for Secure Shell File Transfer Protocol. Files are transferred through an SSH tunnel. SFTP isn&#39;t related to FTP at all. They&#39;re two completely different, incompatible protocols. SFTP typically uses SSH v2, the more secure version of Secure Shell Protocol. It uses a graphical interface, and it&#39;s more user-friendly.</p><h3 id="summary-06-17-06-39" tabindex="-1"><a class="header-anchor" href="#summary-06-17-06-39"><span>Summary 06:17-06:39</span></a></h3><p>That&#39;s it for this lesson. In this video, we discussed several best practices that can be used to secure your file servers and your organization&#39;s resources. We also discussed how to use an encrypted protocol to reduce the opportunity for an attacker to see sensitive information as you copy files across a network.</p><h2 id="_4-3-2-file-system-security-facts" tabindex="-1"><a class="header-anchor" href="#_4-3-2-file-system-security-facts"><span>4.3.2 File System Security Facts</span></a></h2><p>Managing the file system is a primary concern of IT professionals. The file system is responsible for storing and securing data. An organization depends on data and requires that it be secure and easily accessible.</p><p>This lesson covers the following topics.</p><ul><li>File system security</li><li>Big data storage</li><li>Data transfer security protocols</li></ul><h3 id="file-system-security" tabindex="-1"><a class="header-anchor" href="#file-system-security"><span>File System Security</span></a></h3><p>Tasks to secure file servers include:</p><ul><li>Prevent physical access</li><li>Implement the principle of least privilege</li><li>Use full-disk encryption on backups</li><li>Implement strong authentication</li><li>Remove unnecessary software and disable unused services</li><li>Use implicit deny access control lists (ACLs)</li><li>Use hidden folders and files</li><li>Audit the file system</li></ul><p>When managing the security of the file system, be aware of the following:</p><ul><li> The transfer of files between a client and a server is often unsecured. Use IPSec or a VPN between the server and the client to secure data as it travels through the network. </li><li> File and print resources are primarily vulnerable to denial-of-service (DoS) and access attacks. </li><li> Attacks on file servers are often directed against the NetBIOS protocol. To protect the server, verify that NetBIOS is not required on the server, disable the NetBIOS protocol on the server, and use a host-based firewall to close NetBIOS ports 135 and 137 - 139. </li><li> A <i class="fs-italicize"> shared folder </i> is a folder whose contents are available over the network. <ul><li> An <i class="fs-italicize"> administrative </i> share is a shared folder that is available only to an administrative user. </li><li> Administrative shares are hidden. This means that the share will not display when a user browses a network computer. </li><li> By default, the root of every drive is an administrative share. </li><li> In Windows, you can create hidden shares by appending a $ sign; to the end of the share name (for example, DataFiles$). </li><li> Users must know the name of the share to access it, as well as, have the appropriate access permissions. </li><li> Do not share the root directory with regular users. </li></ul></li><li> With Windows Server 2008 and later, you can use File Server Resource Manager (FSRM) to control files saved on a file server. <ul><li> Quotas limit the amount of data that can be saved within a folder. A hard limit prevents exceeding the quota limit, while a soft limit sends a message when the limit is exceeded. </li><li> File screens restrict the type of files that can be saved in a folder. For example, you can prevent media files (audio and video) or files with specific file extensions from being saved. An <i class="fs-italicize"> active </i> file screen prevents saving the specified file types, while a <i class="fs-italicize"> passive </i> screen monitors when the specified file types are added to the folder. </li></ul></li></ul><h3 id="big-data-storage" tabindex="-1"><a class="header-anchor" href="#big-data-storage"><span>Big Data Storage</span></a></h3><p>In modern network environments, many organizations must store extremely large amounts of data, referred to as big data . Be aware of the following regarding big data:</p><ul><li> The size of the dataset can be measured in exabytes. </li><li> Big data can be analyzed to provide a wealth of information. Businesses use big data to identify business trends, create computer models, and isolate network attacks. </li><li> The data set is so large that it is usually stored on NAS or SAN devices. </li><li> The key problem associated with big data is that the data set can become so large that it can no longer be managed. </li></ul><p>The following table describes solutions for storing large amounts of data.</p>',37),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Solution "),e("th",{scope:"col",class:"fw-bold"}," Description ")])]),e("tbody",null,[e("tr",null,[e("td",null," Network attached storage (NAS) "),e("td",null,[s(" NAS is a standalone storage device or appliance that acts as a file server. Be aware of the following: "),e("ul",null,[e("li",null," The NAS device is connected to the same network as all other network devices. Therefore, it is exposed to attacks from all network hosts. "),e("li",null," NAS devices typically use standard protocols for file sharing. Because standard protocols are well-known, they are subject to attacks. "),e("li",null," The NAS device often has a limited operating system capable of sharing files and controlling access to those files using access control lists (ACLs). "),e("li",null," NAS administration should be secured with a strong password and strong authentication. ")])])]),e("tr",null,[e("td",null," Storage area network (SAN) "),e("td",null,[s(" A SAN is a special network composed of high-speed storage that is shared by multiple servers. A SAN is typically a separate network that only file servers attach to. Security for a SAN is provided by the following: "),e("ul",null,[e("li",null,[e("i",{class:"fs-italicize"}," Logical Unit Number (LUN) masking "),s(" identifies devices that are allowed to attach to a logical unit. ")]),e("li",null,[e("i",{class:"fs-italicize"}," SAN zoning "),s(" groups SAN devices and servers into security zones. Only devices within the security zone can access data on the storage unit. ")]),e("li",null,[s(" The Fibre Channel Authentication Protocol (FCAP) provides a method for mutual authentication of devices within the SAN. "),e("div",{class:"info","data-block":`
         SANs are typically more secure than NAS solutions.
        `},[e("div",{class:"to-info-box"},[e("div",{class:"to-info-box-body"},[e("span",{class:"to-icon large","aria-hidden":"true"},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null," SANs are typically more secure than NAS solutions. ")])])])])])])])])])],-1),e("h3",{id:"data-transfer-security-protocols",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-transfer-security-protocols"},[e("span",null,"Data Transfer Security Protocols")])],-1),e("p",null,"The following table describes considerations for securing file transfer using TCP/IP protocols:",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Protocol "),e("th",{scope:"col",class:"fw-bold"}," Description ")])]),e("tbody",null,[e("tr",null,[e("td",null,[s(" File Transfer Protocol "),e("br"),s(" (FTP) ")]),e("td",null,[s(" Be aware of the following when using FTP: "),e("ul",null,[e("li",null,[e("i",{class:"fs-italicize"}," Anonymous login "),s(" (also known as "),e("i",{class:"fs-italicize"}," blind "),s(" or "),e("i",{class:"fs-italicize"}," anonymous FTP "),s(" ) allows unrestricted access to the FTP server. Disable anonymous login to control access based on username. ")]),e("li",null," The username and password are transferred in cleartext and can be captured in transit by a sniffer. To protect logon credentials, implement a secure protocol, such as Secure Socket Layer (SSL). "),e("li",null," Use IPSec or a VPN tunnel to protect data transfers. "),e("li",null," The write permission allows users to upload files to the FTP server. Carefully restrict which users have the write permission. "),e("li",null," FTP uses port 21 for control information (such as logon) and port 20 for data transfer. ")])])]),e("tr",null,[e("td",null,[s(" Trivial File Transfer Protocol "),e("br"),s(" (TFTP) ")]),e("td",null,[e("p",null," TFTP provides no authentication, encryption, or error detection. In addition, TFTP uses UDP instead of TCP. TFTP might be faster than FTP, but it does not perform error detection, so it could result in file errors. ")])]),e("tr",null,[e("td",null,[s(" Secure Copy Protocol "),e("br"),s(" (SCP) ")]),e("td",null," SCP uses Secure Shell version 1 (SSH1) to secure file transfers and login credentials. ")]),e("tr",null,[e("td",null,[s(" Secure Shell File Transfer Protocol "),e("br"),s(" (SFTP) ")]),e("td",null," SFTP is a file transfer protocol that uses Secure Shell version 2 (SSH2) to secure data transfers. SFTP is not FTP that uses SSH, but rather a secure transfer protocol that is different from FTP. ")]),e("tr",null,[e("td",null," Secure FTP "),e("td",null," Secure FTP (also known as FTP over SSH) tunnels FTP traffic through an SSH tunnel. ")]),e("tr",null,[e("td",null,[s(" FTP Secure "),e("br"),s(" (FTPS) ")]),e("td",null," FTPS adds SSL or Transport Layer Security (TLS) to FTP in order to secure logon credentials and encrypt data transfers. FTPS requires a server certificate. ")])])],-1),e("h2",{id:"_4-3-3-file-permission-facts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-3-3-file-permission-facts"},[e("span",null,"4.3.3 File Permission Facts")])],-1),e("p",null,"This lesson covers managing file system permissions.",-1),e("h3",{id:"managing-file-system-permissions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#managing-file-system-permissions"},[e("span",null,"Managing File System Permissions")])],-1),e("p",null,"On a Windows system, access to files is controlled through two sets of permissions, share and New Technology File System (NTFS). The following table describes permissions specific to each type.",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Permission Type "),e("th",{scope:"col",class:"fw-bold"}," Description ")])]),e("tbody",null,[e("tr",null,[e("td",null," Share "),e("td",null,[s(" Share permissions control access through a network connection with the file server. "),e("ul",null,[e("li",null," If files are accessed locally, share permissions do not control access. "),e("li",null,[s(" Share permissions have three levels of permissions: "),e("ul",null,[e("li",null," Reader (read only) "),e("li",null," Contributor (read and write) "),e("li",null," Owner or Co-owner (full control, or all permissions) ")])]),e("li",null," Share permissions can be set only on a folder. ")])])]),e("tr",null,[e("td",null," NTFS "),e("td",null,[s(" NTFS permissions: "),e("ul",null,[e("li",null," Can be set on drives, folders, and files. "),e("li",null," Control both local and network access. "),e("li",null," Have dozens of permissions that offer granular control over what actions are allowed. "),e("li",null," Can be set only on volumes formatted with NTFS. ")])])])])],-1),t('<p>Be aware that:</p><ul><li> Both share and NTFS permissions use a discretionary access control list (DACL) for controlling access. The access list identifies the users or groups and their associated permissions to files or folders. </li><li> Both share and NTFS permissions include Allow or Deny permissions. Deny permissions override Allow permissions. </li><li> Both share and NTFS permissions must be configured to allow access through the share. If a user is allowed share access but no NTFS permissions are set for the user or a group to which the user belongs, no access will be allowed. </li><li> Effective permissions to shared folders are the more restrictive of either share or NTFS permissions. </li><li> A user&#39;s effective permissions cannot be greater than the share permissions assigned to the user or a group to which the user belongs. For this reason, a common strategy for combining share and NTFS permissions is to: <ul><li> Assign Co-owner share permissions to Everyone. </li><li> Use NTFS permissions to control access. Use the principle of least privilege by assigning NTFS permissions only to necessary groups and by assigning only the necessary permissions to those groups. Even though Everyone has share permissions, only the users or groups with NTFS permissions will have access. </li></ul></li><li> Permissions for folders and files can be inherited. On Windows systems, the Advanced Security settings identify when permission inheritance is in effect. </li><li> Whenever possible, assign permissions to groups, rather than users. Users receive the permissions assigned to their groups. </li></ul><h2 id="_4-3-4-configuring-ntfs-permissions" tabindex="-1"><a class="header-anchor" href="#_4-3-4-configuring-ntfs-permissions"><span>4.3.4 Configuring NTFS Permissions</span></a></h2><h3 id="configuring-ntfs-permissions-00-00-00-28" tabindex="-1"><a class="header-anchor" href="#configuring-ntfs-permissions-00-00-00-28"><span>Configuring NTFS Permissions 00:00-00:28</span></a></h3><p>In this demonstration, we&#39;re going to practice configuring NTFS permissions. NTFS permissions let you control access to the Windows file system. Let&#39;s open our file browser on this Windows server system and go to our computer (or, as they call it in 2019 and Windows 10, This PC). Let&#39;s go to the Data volume. It has two subfolders here, one called Documents, and one called Reports.</p><h3 id="ntfs-permissions-at-the-volume-level-00-28-01-56" tabindex="-1"><a class="header-anchor" href="#ntfs-permissions-at-the-volume-level-00-28-01-56"><span>NTFS Permissions at the Volume Level 00:28-01:56</span></a></h3><p>First, let&#39;s set NTFS permissions at the volume level. To do this, we right-click on the Data volume and select Properties. Then we need to select the Security tab, and we see a list of users and groups that have been given some level of access to the Data volume.</p><p>So, if we select a particular user or group, such as the Everyone group, we see the permissions that are assigned to this group below. The permissions that we see in this example are default permissions. They were automatically assigned to this volume when it was created.</p><p>The security principles that you see and the permissions that have been assigned to each one of these principles were assigned by default, so the Windows system assigned them when the data volume was originally created. For example, when the Users group was created, it was granted Read &amp; Execute, List Folder Contents, and Read. But you can see it wasn&#39;t granted Full Control.</p><p>The Administrators group was granted Full Control and all the other rights. Members of the Administrators group were assigned Full Control to this volume. So members of the Administrators group can do whatever they want to the files and folders on the Data volume.</p><p>If a user doesn&#39;t have Full Control, Modify, or Read &amp; Execute, then they&#39;re only allowed to read and see what&#39;s inside the folder and open files, but not necessarily create or delete them. Basically, they&#39;re not allowed to make any changes to a file because they don&#39;t have the rights and privileges to modify.</p><h3 id="use-groups-instead-of-individual-users-01-56-02-34" tabindex="-1"><a class="header-anchor" href="#use-groups-instead-of-individual-users-01-56-02-34"><span>Use Groups Instead of Individual Users 01:56-02:34</span></a></h3><p>Using groups to assign NTFS permissions is a good practice. Using groups instead of individual users makes administration of the NTFS file system a lot easier. If changes happen in the organization, then all you have to do is modify group membership. So, instead of making specific permission assignments for individual users, like this user here, you can just remove them from that specific group, and they lose membership immediately.</p><p>Or, if you have a new employee or a new person in the organization that you need to give access to, you can just add them to that group, and it&#39;ll add the rights that group has access to.</p><h3 id="add-a-new-group-02-34-06-18" tabindex="-1"><a class="header-anchor" href="#add-a-new-group-02-34-06-18"><span>Add a New Group 02:34-06:18</span></a></h3><p>So, let&#39;s add a new group to the list of security principles here. We&#39;re going to click Edit and Add. If you don&#39;t know the name, you can click Advanced and Find now. This will show you every user and group listed in Active Directory.</p><p>Let&#39;s type —˜data&#39;. It&#39;s beneficial to name your groups in a convention that suits you for easy tracking. As you can see, this organization used Data as the data drive, Documents for the documents folder, and Write to allow write access to that folder. Let&#39;s select data.all group, since that group describes access to the whole data volume.</p><p>Now we can assign users to the data.all group to allow them write and modify privileges. So, by default, this group receives the Read &amp; Execute permissions, which allow them to execute executable files. They can also list folder contents and read those files. They can open them up and view the contents. But they&#39;re not allowed to modify or make any changes to those files because they don&#39;t have the Modify or Write permissions.</p><p>We need to get the users in the data.all group more access to this volume. Let&#39;s grant them the Modify permission. That causes them to have the Write permission automatically. We&#39;re not going to give them Full Control, so let&#39;s click OK and OK.</p><p>We assigned those permissions at the volume level. Let&#39;s go into the Data volume and view how the permissions that we assigned affect the subfolders of the data volume. We&#39;re going to double-click Data volume. Let&#39;s right-click on Documents and go to Properties. We&#39;re going to the Security tab again. The Data.all group, here, is now a security principal of this group as well. So, basically, any users who are members of the Data.all group will receive Modify, Read &amp; Execute, List Folder Contents, Read, and Write permissions to the Documents folder.</p><p>But there&#39;s something different about these check marks. Previously, the check marks were black for the permissions assigned to the data.all group. In the Documents folder, they&#39;re greyed out. Whenever you see grey check marks on the Security tab in the permissions, that indicates that the permissions aren&#39;t explicitly assigned to this group on the folder level; they&#39;re being inherited from the Data volume or from the folder above them.</p><p>So, we assigned the permissions to the volume itself. Because Documents is in a subfolder of Data, it automatically inherited the same permission assignments that were assigned to the volume. Inheritance makes permissions easier for system administrators to manage. And using inheritance, we assign the most common set of permissions that we want most of our users to have at the volume level. In this way, most of our user accounts have the permissions they need. Then we can set up exceptions for individual users or groups who need either more or less access than the average user.</p><p>However, we can change these permissions if necessary. You override an inherited permission assignment by making an explicit permission assignment somewhere lower in the file system. For example, suppose we need to change the level of access that the Data.all group has to the Documents folder. To do this, we make an explicit permission assignment for the Data.all group to Documents. The assignment we make will override any permissions that are being inherited from the Data volume itself. First, let&#39;s click on Advanced. Here, you can see that Data.all is receiving its permission assignment by inheritance from drive E:, so E: is the root of the data volume. To change this, we click Disable inheritance. This will warn us that the inheritance permissions will no longer propagate down to the Documents folder.</p><h3 id="convert-inherited-permissions-06-18-08-43" tabindex="-1"><a class="header-anchor" href="#convert-inherited-permissions-06-18-08-43"><span>Convert Inherited Permissions 06:18-08:43</span></a></h3><p>We have to decide how we want to handle the situation. We have two options to choose from. One is to convert inherited permissions into explicit permissions on this object, and the other is to remove all inherited permissions from the object. So, if we click this option, the gray check marks will change to black, allowing us to edit them. If we click the other option to remove all inherited permissions from this object, we basically remove all permissions and start from scratch.</p><p>We&#39;re going to use the first option. We&#39;re going to convert inherited permissions into explicit permissions on this object. Inheritance is now turned off. For now, we&#39;re going to click OK. The check marks have gone from gray to black, and now we can edit them. The change that we made applied to all of our security principals, not just the Data.all group. Let&#39;s click another one—&quot;see, they&#39;re all black.</p><p>On other operating systems, inheritance can be managed on a per-user or per-group basis. That&#39;s not the case with NTFS. We either allow inheritance for all security principals, or we turn inheritance off for all security principals, which is what we just did here. This is why selecting the Convert option is usually best. If we had selected the Remove all option, then all of the permissions to this folder would have been removed. That means we would have to go back and individually reassign what rights we wanted them to have. There may be situations where that is the best option, but in this case, it&#39;s not.</p><p>Let&#39;s suppose you want to remove the Modify permission for the members of the Data.all group to the Documents folder. We don&#39;t care if the users in the Data.all group have Modify permissions to every other folder on the Data volume, such as Reports, but we don&#39;t want that permission to be applied to the Documents folder specifically. We can turn that off by clicking Edit, selecting the Data.all group, unchecking Modify, and then clicking OK and OK. The Data.all group still has a Modify permission to the Data volume itself because we haven&#39;t change permissions to the Report folder. They could also go in and modify Reports. Here, we can see that the Data.all group still has the inherited permissions to Reports. However, because we used an explicit assignment to the Documents folder, the Data.all group no longer has the ability to modify permissions to documents.</p><h3 id="manage-permissions-08-43-11-02" tabindex="-1"><a class="header-anchor" href="#manage-permissions-08-43-11-02"><span>Manage Permissions 08:43-11:02</span></a></h3><p>So, let&#39;s take a look at how to manage permissions properly. It&#39;s best practice to use groups to allow or deny access, as I mentioned before. In this case, we&#39;d like to block Samantha Carter from viewing the Reports folder. We haven&#39;t done this before, so we&#39;ll have to create a new security group for this purpose.</p><p>In order to do that, we&#39;ll go to Server Manager &gt; Tools, and click on Active Directory Users and Computers. We&#39;ve made a folder called Sec for all our security groups. Let&#39;s create a new security group by right-clicking and selecting New &gt; Group. We want our group name to be —˜Data.reports.deny&#39;. Let&#39;s select Domain Local and click OK. Our organization likes to have a description in the security group, so let&#39;s put a description in there. Right-click on data.reports.deny and select Properties. In the description field, type —˜Deny Data Drive Report Access&#39;.</p><p>Next, we&#39;re going to click on the Members tab and click Add. In the Enter field, type —˜Sam&#39; and hit Check names. Now the full name of Samantha Carter is populated. Click OK and OK.</p><p>Now that the security group is set up, we need to add this group to the Reports folder. Open the File Explorer, Click the Data drive, and right-click the Reports folder and select Properties. Under the Security tab, we want to edit permissions. Let&#39;s click the Add button and type —˜data.reports.deny&#39; in the Enter field. Click Check names to make sure your typing is correct and then click OK.</p><p>Instead of the regular Read permissions listed, we&#39;re going to deny all Read permissions and then click OK. Notice that there&#39;s a window that pops up saying, —œYou&#39;re setting a Deny permissions entry. Deny entries take precedence over Allow entries. This means that if a user is a member of two groups, one that&#39;s allowed a permission and another that&#39;s denied the same permission, the user is denied that permission. Do you want to continue?— Click Yes on the prompt. As you can see, the data.reports.deny group is set to Deny for all three permissions. For example, if Samantha was in both data.reports.write and data.reports.deny, she&#39;ll be denied access to read.</p><h3 id="summary-11-02-11-14" tabindex="-1"><a class="header-anchor" href="#summary-11-02-11-14"><span>Summary 11:02-11:14</span></a></h3><p>And that&#39;s it for this demonstration. In this demo, we configured NTFS permissions in the Windows file system using groups.</p>',36)]))}const d=o(n,[["render",l],["__file","04.03FileServerSecurity.html.vue"]]),u=JSON.parse('{"path":"/04/04.03FileServerSecurity.html","title":"Section 4.3 File Server Security","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 4.3 File Server Security","description":"some description"},"headers":[{"level":2,"title":"4.3.1 File Server Security","slug":"_4-3-1-file-server-security","link":"#_4-3-1-file-server-security","children":[{"level":3,"title":"File Server Security 00:00-00:37","slug":"file-server-security-00-00-00-37","link":"#file-server-security-00-00-00-37","children":[]},{"level":3,"title":"Best Practices 00:37-03:31","slug":"best-practices-00-37-03-31","link":"#best-practices-00-37-03-31","children":[]},{"level":3,"title":"Secure Protocols vs. Unsecure Protocols 03:31-06:17","slug":"secure-protocols-vs-unsecure-protocols-03-31-06-17","link":"#secure-protocols-vs-unsecure-protocols-03-31-06-17","children":[]},{"level":3,"title":"Summary 06:17-06:39","slug":"summary-06-17-06-39","link":"#summary-06-17-06-39","children":[]}]},{"level":2,"title":"4.3.2 File System Security Facts","slug":"_4-3-2-file-system-security-facts","link":"#_4-3-2-file-system-security-facts","children":[{"level":3,"title":"File System Security","slug":"file-system-security","link":"#file-system-security","children":[]},{"level":3,"title":"Big Data Storage","slug":"big-data-storage","link":"#big-data-storage","children":[]},{"level":3,"title":"Data Transfer Security Protocols","slug":"data-transfer-security-protocols","link":"#data-transfer-security-protocols","children":[]}]},{"level":2,"title":"4.3.3 File Permission Facts","slug":"_4-3-3-file-permission-facts","link":"#_4-3-3-file-permission-facts","children":[{"level":3,"title":"Managing File System Permissions","slug":"managing-file-system-permissions","link":"#managing-file-system-permissions","children":[]}]},{"level":2,"title":"4.3.4 Configuring NTFS Permissions","slug":"_4-3-4-configuring-ntfs-permissions","link":"#_4-3-4-configuring-ntfs-permissions","children":[{"level":3,"title":"Configuring NTFS Permissions 00:00-00:28","slug":"configuring-ntfs-permissions-00-00-00-28","link":"#configuring-ntfs-permissions-00-00-00-28","children":[]},{"level":3,"title":"NTFS Permissions at the Volume Level 00:28-01:56","slug":"ntfs-permissions-at-the-volume-level-00-28-01-56","link":"#ntfs-permissions-at-the-volume-level-00-28-01-56","children":[]},{"level":3,"title":"Use Groups Instead of Individual Users 01:56-02:34","slug":"use-groups-instead-of-individual-users-01-56-02-34","link":"#use-groups-instead-of-individual-users-01-56-02-34","children":[]},{"level":3,"title":"Add a New Group 02:34-06:18","slug":"add-a-new-group-02-34-06-18","link":"#add-a-new-group-02-34-06-18","children":[]},{"level":3,"title":"Convert Inherited Permissions 06:18-08:43","slug":"convert-inherited-permissions-06-18-08-43","link":"#convert-inherited-permissions-06-18-08-43","children":[]},{"level":3,"title":"Manage Permissions 08:43-11:02","slug":"manage-permissions-08-43-11-02","link":"#manage-permissions-08-43-11-02","children":[]},{"level":3,"title":"Summary 11:02-11:14","slug":"summary-11-02-11-14","link":"#summary-11-02-11-14","children":[]}]}],"git":{"updatedTime":1735519188000},"filePathRelative":"04/04.03FileServerSecurity.md"}');export{d as comp,u as data};
