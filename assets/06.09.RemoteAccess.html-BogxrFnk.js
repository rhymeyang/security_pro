import{_ as s,c as a,a as e,d as o,b as n,o as i}from"./app-B7eXnVer.js";const r={};function c(l,t){return i(),a("div",null,t[0]||(t[0]=[e("p",null,"As you study this section, answer the following questions:",-1),e("ul",null,[e("li",null," How does EAP differ from CHAP? "),e("li",null," What is the difference in authentication and authorization? "),e("li",null," What is the difference between RADIUS and TACACS+? ")],-1),e("p",null,"In this section, you will learn to:",-1),e("ul",null,[e("li",null,"Configure a RADIUS solution.")],-1),e("p",null,"The key terms for this section include:",-1),e("table",{class:"terms"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Term "),e("th",{scope:"col",class:"fw-bold"}," Definition ")])]),e("tbody",null,[e("tr",null,[e("td",null," Remote access policies "),e("td",null," Remote access policies are used to restrict access. The policies identify authorized users, conditions, permissions, and connection parameters such as time of day, authentication protocol, caller id, etc. ")])])],-1),e("p",null,"This section helps you prepare for the following certification exam objectives:",-1),e("table",{class:"objectives"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Exam "),e("th",{scope:"col",class:"fw-bold"}," Objective ")])]),e("tbody",null,[e("tr",null,[e("td",null," TestOut Security Pro "),e("td",null,[o(" 1.0 Identity Management and Authentication "),e("p",null," 1.2 Harden Authentication ")])]),e("tr",null,[e("td",null," CompTIA Security+ SY0-601 "),e("td",null,[o(" 3.1.1. Protocols "),e("ul",null,[e("li",null," Simple Network Management Protocol, version 3 (SNMPv3) "),e("li",null," Hypertext transfer protocol over SSL/TLS (HTTPS) ")]),e("p",null," 3.8.2. Authentication "),e("ul",null,[e("li",null," Challenge Handshake Authentication Protocol (CHAP) "),e("li",null," Password Authentication Protocol (PAP) "),e("li",null," RADIUS "),e("li",null," Terminal Access Controller Access Control System Plus (TACACS+) ")])])])])],-1),n('<h2 id="_6-9-1-remote-access" tabindex="-1"><a class="header-anchor" href="#_6-9-1-remote-access"><span>6.9.1 Remote Access</span></a></h2><h3 id="remote-access-00-00-00-51" tabindex="-1"><a class="header-anchor" href="#remote-access-00-00-00-51"><span>Remote Access 00:00-00:51</span></a></h3><p>In this lesson, we&#39;re going to talk about remote access. Remote access allows a host to connect to a remote server or private network and access remote resources as if they were connected locally. Remote access connections are typically made by employees who need to connect to the office from home or while traveling.</p><p>For example, if a user were on site, they&#39;d connect to the local server using their internal network infrastructure.</p><p>Remote connections need some type of physical connection between the user and the server. In most cases, the internet provides an option for physical connectivity. In this case, the client computer connects through their DSL internet service provider to gain access to the internet, and the business is connected to the internet through their fiber internet service provider.</p><h3 id="authentication-00-51-01-09" tabindex="-1"><a class="header-anchor" href="#authentication-00-51-01-09"><span>Authentication 00:51-01:09</span></a></h3><p>When you make a connection from the remote client to the remote access server, you first establish the physical connection. Then you need to negotiate a Data Link layer connection. To do this, you&#39;ll need to be authenticated. Let&#39;s talk about several authentication protocols used with remote access.</p><h3 id="point-to-point-protocol-01-09-01-46" tabindex="-1"><a class="header-anchor" href="#point-to-point-protocol-01-09-01-46"><span>Point-to-Point Protocol 01:09-01:46</span></a></h3><p>The first is the Point-to-Point Protocol, or PPP. PPP is used to establish the data link connection. PPP&#39;s purpose is to identify the upper-layer protocols that the devices will use to communicate.</p><p>When the connection is first established, the devices negotiate and decide what protocols they&#39;ll use to communicate. They might also decide to use encryption or compression. During this process, the client device is assigned an IP address so that it can communicate across the network. The devices then negotiate which authentication method to use.</p><h3 id="password-authentication-protocol-01-46-02-18" tabindex="-1"><a class="header-anchor" href="#password-authentication-protocol-01-46-02-18"><span>Password Authentication Protocol 01:46-02:18</span></a></h3><p>The next authentication protocol is the Password Authentication Protocol, or PAP. PPP uses PAP to verify users. PAP involves a very simple two-way handshake. The hostname and password are sent to the desired server, and the server either accepts or rejects access. The username and password are transmitted in plain text, so if someone captures the authentication process, they&#39;ll have access to your password and your username. Because of this, PAP isn&#39;t widely used.</p><h3 id="chap-authentication-02-18-02-49" tabindex="-1"><a class="header-anchor" href="#chap-authentication-02-18-02-49"><span>CHAP Authentication 02:18-02:49</span></a></h3><p>Another authentication protocol is the Challenge Handshake Authentication Protocol, or CHAP. CHAP is a more secure method for connecting to a remote system. Unlike PAP, the secret is never sent over the network.</p><p>Instead, CHAP uses a three-way handshake where unique challenge phrases are exchanged for authentication. This three-way handshake ensures that the same system exists throughout a communication session by repeatedly and randomly re-testing the validated system.</p><h3 id="extensible-authentication-protocol-02-49-03-20" tabindex="-1"><a class="header-anchor" href="#extensible-authentication-protocol-02-49-03-20"><span>Extensible Authentication Protocol 02:49-03:20</span></a></h3><p>The Extensible Authentication Protocol, or EAP, is another authentication protocol that uses an ongoing authentication method like CHAP, but it&#39;s even more secure. EAP allows the client and the server to negotiate the characteristics of authentication. When a connection is established, the client and server negotiate the authentication type that will be used based on the allowed authentication types configured on each device. EAP can be configured to support multi-factor authentication.</p><h3 id="authorization-03-20-04-20" tabindex="-1"><a class="header-anchor" href="#authorization-03-20-04-20"><span>Authorization 03:20-04:20</span></a></h3><p>After the physical connection is established, the communication parameters must be agreed upon, and then authentication can occur.</p><p>So the next step is authorization. Authorization identifies what resources the remote clients can access on the remote network. Let&#39;s see how it works.</p><p>In this example, we have a remote client that&#39;s connected to a private network through a remote access server. Authorization identifies what this user or device can access on the private network.</p><p>It may be configured so that remote clients can only access the remote access server itself, and nothing else. In this case, you would place all your shared content for remote users directly on the remote access server. If you decide to permit access to the private network, you could use authorization to restrict remote client access to only certain devices. That way, users attempting to access the network from an unrecognized device are denied access to the private network.</p><h3 id="remote-access-policies-04-20-05-56" tabindex="-1"><a class="header-anchor" href="#remote-access-policies-04-20-05-56"><span>Remote Access Policies 04:20-05:56</span></a></h3><p>Both authentication and authorization are usually controlled by remote access policies. Remote access policies identify users who can connect and then lets them know whether the connection is allowed or denied.</p><p>For example, you might allow only certain users to use remote access. Then you might restrict those users based on the time of the day, such as only allowing them to user remote access during working hours.</p><p>You could also restrict remote access by connection type.</p><p>When the remote user connects, the remote access server checks the policies to find out what type of restrictions to apply. Then it either allows or denies access based on the information in the policies. These policies can be defined on the remote access server itself.</p><p>You would go to the server and define the policies that apply to your remote access users. In some cases, you can configure your remote access server to connect to a separate database that contains your user account information. For example, on a Microsoft network, your remote access server would use Active Directory to identify users who can connect and match users with passwords.</p><p>What happens if your company&#39;s demand for remote access grows so much that a single remote access server can no longer support all the remote clients? One solution is to install a second remote access server on the network. However, because all policies must be defined on each server, you would have to copy the policies from the first server and duplicate them to the second server. As the number of remote access servers grows, the work required to maintain all these policies also grows.</p><h3 id="aaa-server-05-56-06-50" tabindex="-1"><a class="header-anchor" href="#aaa-server-05-56-06-50"><span>AAA Server 05:56-06:50</span></a></h3><p>Another solution is to use an AAA server. AAA stands for three parts of this remote access process; Authentication, Authorization and Accounting. We&#39;ve talked a lot about authentication and authorization, but what about accounting?</p><p>Accounting is the process of keeping track of what took place during a connection. For instance, you might need to track how long clients were connected so you can bill the department they work for based on their connection time. Accounting also includes keeping track of the connection characteristics.</p><p>With an AAA server, policies are defined once on the AAA server instead of on each individual remote access server. When an authentication request is received by any of these servers, the authentication request is forwarded to the AAA server, where the credentials and policies are consulted to determine whether access should be allowed or denied.</p><h3 id="radius-06-50-07-38" tabindex="-1"><a class="header-anchor" href="#radius-06-50-07-38"><span>RADIUS 06:50-07:38</span></a></h3><p>There are two common solutions for providing this type of authentication mechanism. One is called RADIUS. RADIUS stands for Remote Authentication Dial-in User Service. It&#39;s a networking protocol that works on port 1812.</p><p>With a RADIUS server, authentication and authorization are combined into a single device, but accounting can be moved onto a different device. You may also decide to have a single device that provides all three functions. RADIUS uses the User Datagram Protocol, or UDP, during the authorization process.</p><p>RADIUS is used a lot in Microsoft implementations, so a Microsoft remote access solution would likely use a RADIUS server for authentication, authorization, and accounting.</p><h3 id="tacacs-07-38-09-01" tabindex="-1"><a class="header-anchor" href="#tacacs-07-38-09-01"><span>TACACS+ 07:38-09:01</span></a></h3><p>Another solution is called TACACS+. TACACS+ separates all three functions into different services. You can combine all three services on a single physical server that provides authentication, authorization, and accounting. You can also split those services. You may have one server that performs authentication, a different server that&#39;s used for authorization, and a third used for accounting.</p><p>Another key difference between TACACS+ and RADIUS is that TACACS+ uses TCP instead of UDP, so it&#39;s more reliable. In addition, TACACS+ encrypts the entire communication session between the remote access servers and the AAA servers. It also supports protocols beside IP.</p><p>TACACS was originally developed in 1984 by BBN Technologies, but the current version of the protocol standard, TACACS+, was developed by Cisco Systems. It&#39;s supported by many vendors, such as BlueCat Networks, IBM, and Netgear.</p><p>In this configuration, the server that provides the AAA services is called the server. The remote access servers are called clients. These RADIUS clients connect to the remote access server. The remote access server forwards authentication information to the RADIUS server, which then provides the requested authentication.</p><h3 id="summary-09-01-09-24" tabindex="-1"><a class="header-anchor" href="#summary-09-01-09-24"><span>Summary 09:01-09:24</span></a></h3><p>And that&#39;s all for this lesson. In this video, we discussed remote access.</p><p>We talked about several remote authentication protocols, including PPP, PAP, CHAP, and EAP. We also discussed two remote authorization solutions, RADIUS and TACACS+.</p><h2 id="_6-9-2-remote-access-facts" tabindex="-1"><a class="header-anchor" href="#_6-9-2-remote-access-facts"><span>6.9.2 Remote Access Facts</span></a></h2><p>This lesson covers the following topics:</p><ul><li> Remote access </li><li> Remote access protocols </li><li> Remote access policies </li></ul><h3 id="remote-access" tabindex="-1"><a class="header-anchor" href="#remote-access"><span>Remote Access</span></a></h3><p>Remote access allows a host to connect to a server, or even a private network, and access resources on that remote system as if the host was connected locally. Business users typically use remote access connections to connect to the office from home or while traveling.</p><p>Authorization is the process of identifying the resources that you can access via the remote access connection. Remote access protocols determine how devices connect with, verify, and communicate with one another. Remote access policies are commonly used to restrict access. Authorization can restrict access based on:</p><ul><li> Time of day </li><li> Type of connection, for example, PPP/PPPoE, wired, or wireless. </li><li> Location of the resource to restrict access to specific servers. </li></ul><h3 id="remote-access-protocols" tabindex="-1"><a class="header-anchor" href="#remote-access-protocols"><span>Remote Access Protocols</span></a></h3><table><thead><tr><th scope="col" class="fw-bold"> Protocol </th><th scope="col" class="fw-bold"> Description </th></tr></thead><tbody><tr><td> Public Switch Telephone Network (PSTN) </td><td> PSTN uses modems to connect to a remote access server. This, however, is an outdated method because of slow connection speeds. </td></tr><tr><td> Point-to-Point Protocol (PPP)/Point-to-Point Protocol over Ethernet (PPPoE) </td><td> PPP and PPPoE use the data link layer. PPP is less common because it typically uses dial-up connections. PPPoE normally requires a static IP from the ISP and sometimes a username and a password to authenticate with the ISP. </td></tr><tr><td> Challenge Handshake Authentication Protocol (CHAP) </td><td> CHAP uses a challenge/response (three-way handshake) mechanism to protect passwords. CHAP is the only remote access authentication protocol that ensures that the same client or system exists throughout a communication session by repeatedly and randomly re-testing the validated system. </td></tr><tr><td> Microsoft Challenge Handshake Authentication Protocol (MS-CHAP) </td><td> MS-CHAP is Microsoft&#39;s version of CHAP. <ul><li> MS-CHAP encrypts the shared secret on each system so that it is not saved in cleartext. </li><li> MS-CHAP v2 allows for mutual authentication, in which the both the server and the client authenticate. Mutual authentication helps to prevent man-in-the-middle attacks and server impersonation. </li></ul></td></tr><tr><td> Extensible Authentication Protocol (EAP) </td><td> EAP allows the client and server to negotiate the characteristics of authentication. When a connection is established, the client and server negotiate the authentication type that will be used based on the allowed or required authentication types configured on each device. EAP allows authentication using a variety of methods, including passwords, certificates, and smart cards. </td></tr><tr><td> Simple Network Management Protocol Version 3(SNMPv3) </td><td> SNMPv3 is a protocol used to monitor and manage devices on a network. SNMPv3 provides authentication and encryption. </td></tr><tr><td> Hypertext Transport Protocol Secure (HTTPS) </td><td> HTTPS uses HTTP over Secure Socket Layer (SSL). It has replaced S-HTTP as the method of securing HTTP (web) traffic. It is a session-based encryption technology, meaning that the keys used for that session are valid for that session only. HTTPS is used predominantly throughout the internet. HTTPS operates over TCP port 443. </td></tr></tbody></table><h3 id="remote-access-policies" tabindex="-1"><a class="header-anchor" href="#remote-access-policies"><span>Remote Access Policies</span></a></h3><p>Remote access policies identify users who can connect and specifies if the connection is allowed or denied. These policies can be defined on the remote access server itself. When the remote user connects, the remote access server checks the policies to find out the type of restrictions to be apply.</p><p>If the demand for remote access grows beyond the capacity of a single remote access server to support all of the remote clients, an authentication, authorization, and accounting (AAA) server can be used. Accounting is the process of keeping track of what was done during a connection. For instance, you might need to keep track of how long clients were connected so you can bill a department based on connection time. Accounting is also the process of keeping track of the connection characteristics.</p><p>With an AAA server, policies are defined once on the AAA server instead of on each individual remote access server. When an authentication request is sent to a remote access server, the authentication request is forwarded to the AAA server where the credentials and the policies are consulted to identify whether the access should be allowed or denied.</p><p>There are two common solutions for providing this type of authentication mechanism:</p><table><thead><tr><th scope="col" class="fw-bold"> Solution </th><th scope="col" class="fw-bold"> Description </th></tr></thead><tbody><tr><td> RADIUS </td><td> A Radius server is an authentication and authorization mechanism that uses the User Datagram Protocol (UDP) for authorization. It is used in Microsoft implementations. It provides a single solution for authentication and authorization. </td></tr><tr><td> Terminal Access Controller Access-Control System Plus (TACACS+) </td><td> TACACS and the updated version, TACACS+: <ul><li> Separate authentication, authorization, and accounting into different services. </li><li> Allow the services to be on the same server or split between different servers. </li><li> Use Transmission Control Protocol (TCP) instead of UDP. </li></ul></td></tr></tbody></table><h2 id="_6-9-3-configuring-a-radius-solution" tabindex="-1"><a class="header-anchor" href="#_6-9-3-configuring-a-radius-solution"><span>6.9.3 Configuring a RADIUS Solution</span></a></h2><h3 id="configuring-a-radius-client-00-00-01-03" tabindex="-1"><a class="header-anchor" href="#configuring-a-radius-client-00-00-01-03"><span>Configuring a RADIUS Client 00:00-01:03</span></a></h3><p>Now let&#39;s take a look at creating RADIUS clients. I&#39;m going to go into my Network Policy Server Manuscript console. You can see, up here, we have a list of RADIUS clients and remote RADIUS servers. Whoever&#39;s talking to RADIUS needs to be configured as a RADIUS client. The only exception is if RADIUS is installed on the same server as Remote Access, which is actually the case in my environment. You can see, over on the left-hand side, I have NPAS and Remote Access. In that case, I don&#39;t need to configure Routing and Remote Access as a RADIUS client because it&#39;s on the same server.</p><p>When you install the Network Policy and Access server role, it actually changes what you see in Routing and Remote Access. Let&#39;s go into the properties of my server, here, and to Security. Before I installed NPS, I actually had some drop-down combo boxes here that said, &quot;Do you want to use Windows authentication or RADIUS authentication?&quot; Now that I&#39;ve installed NPS, I have to use it to configure authentication and accounting providers.</p><h3 id="changing-authentication-methods-01-03-01-42" tabindex="-1"><a class="header-anchor" href="#changing-authentication-methods-01-03-01-42"><span>Changing Authentication Methods 01:03-01:42</span></a></h3><p>The most I can do here, really, is change my authentication method. Installing NPS changes the interface for Routing and Remote Access.</p><p>Let&#39;s say I had something else that was going to talk to NPS, a wireless router or wireless switch, a wired switch, some other server that&#39;s running Routing and Remote Access, and it wants to talk to this NPS. I would need to define them as a RADIUS client. I can actually define RADIUS client templates, or I can right-click here and do a new RADIUS client. I can base this RADIUS client on an existing template. In that case, it&#39;ll just fill out the information for me, or I can put in information manually.</p><h3 id="shared-secrets-01-42-02-28" tabindex="-1"><a class="header-anchor" href="#shared-secrets-01-42-02-28"><span>Shared Secrets 01:42-02:28</span></a></h3><p>Then I need to provide a shared secret. This is something that&#39;s going to be put in at both the RADIUS client and here, at NPS, where I define the RADIUS client. It&#39;s just a phrase used to encrypt the connection. I can base it off of templates, or I can manually type in the shared secret. No matter what, I have to define the RADIUS client in order for it to talk to NPS.</p><p>After this, you need to go to the RADIUS client itself--the switch, the other router, the other server, whatever&#39;s the RADIUS client--and tell it to talk to NPS on this server. How you do that depends on what&#39;s using this NPS for authentication, authorization, and accounting. It&#39;s always two steps: defining the RADIUS client on NPS and then, at the RADIUS client, defining RADIUS and pointing it to the NPS server.</p><h3 id="certificates-02-28-02-39" tabindex="-1"><a class="header-anchor" href="#certificates-02-28-02-39"><span>Certificates 02:28-02:39</span></a></h3><p>There are several authentication methods using certificates for NPS that will need to be set up in order to have a secure authentication method, such as MS-CHAP V2, MS-CHAP or CHAP.</p><h3 id="summary-02-39-02-52" tabindex="-1"><a class="header-anchor" href="#summary-02-39-02-52"><span>Summary 02:39-02:52</span></a></h3><p>And that&#39;s it for this demo. We went over the basics of configuring a RADIUS client, and we looked at how RADIUS affects routing and remote access.</p><h2 id="_6-9-4-radius-and-tacacs-facts" tabindex="-1"><a class="header-anchor" href="#_6-9-4-radius-and-tacacs-facts"><span>6.9.4 RADIUS and TACACS+ Facts</span></a></h2><p>This lesson covers the following topics:</p><ul><li>Authentication, authorization, and accounting (AAA) server</li><li>Remote Authentication Dial-in User Service (RADIUS)</li><li>Terminal Access Controller Access-Control System Plus (TACACS+)</li></ul><h3 id="aaa-server" tabindex="-1"><a class="header-anchor" href="#aaa-server"><span>AAA Server</span></a></h3><p>An AAA server handles user request for access to computer resources. A remote access server typically controls client access to remote systems. Clients might be restricted to access resources only on the remote access server; or, they might be allowed to access resources on other hosts on the private network. Two common AAA server solutions include RADIUS and TACACS+.</p><p>Remote access policies identify authorized users and other required connection parameters. In a small implementation, you typically define user accounts and remote access policies on the remote access server. With this configuration, you must define user accounts and policies on each remote access server. For larger deployments with multiple remote access servers, you can centralize the administration of remote access policies by using an AAA server.</p><p>Connection requests from remote clients are received by the remote access server and forwarded to the AAA server to be approved or denied. Policies you define on the AAA server apply to all clients connected to all remote access servers.</p><h3 id="radius" tabindex="-1"><a class="header-anchor" href="#radius"><span>RADIUS</span></a></h3><p>Microsoft servers use RADIUS for centralized remote access administration. When using RADIUS, be aware that RADIUS:</p><ul><li> Combines authentication, authorization, and accounting. All three must be implemented through the RADIUS system. </li><li> Allows for the separation of accounting to different servers. However, authentication and authorization remain combined on a single server. </li><li> Supports PPP, CHAP, and PAP. </li><li> Uses a challenge-response method for authentication. </li><li> Does not transmit passwords in cleartext between the RADIUS client and the RADIUS server. <ul><li> A shared secret is used between the RADIUS server and the RADIUS client. </li><li> The password is hashed and the hash is added to the password before it is transmitted. </li><li> RADIUS encrypts only the password using MD5. </li></ul></li><li> Uses UDP ports 1812 and 1813 and can be vulnerable to buffer overflow attacks. </li><li> Often uses vendor-specific extensions. RADIUS solutions from different vendors might not be compatible. </li></ul><p>When configuring a RADIUS solution, configure a server as a RADIUS server to provide AAA services. Then, configure all remote access servers as RADIUS clients.</p><h3 id="tacacs" tabindex="-1"><a class="header-anchor" href="#tacacs"><span>TACACS+</span></a></h3><p>TACACS+ was originally developed by Cisco for centralized remote access administration. TACACS+:</p><ul><li> Provides three protocols, one each for authentication, authorization, and accounting. This allows each service to be provided by a different server. </li><li> Uses TCP port 49. </li><li> Encrypts the entire packet contents, not just authentication packets. The client-server dialogs are also encrypted. </li><li> Supports more protocol suites than RADIUS. </li><li> Requires remote access servers to become TACACS+ clients to the backend TACACS+ server, similar to a RADIUS solution. </li></ul><p>TACACS was originally developed in 1984 by BBN Technologies. The current version of the protocol standard, TACACS+, was developed by Cisco Systems but is supported by many vendors, such as BlueCat Networks, IBM, Netgear, and more.</p><p>TACACS and Extended Terminal Access Controller Access-Control System (XTACACS) are older protocols developed before TACACS+. While they sound similar, they are different and less-secure protocols.</p>',90)]))}const d=s(r,[["render",c],["__file","06.09.RemoteAccess.html.vue"]]),u=JSON.parse('{"path":"/06/06.09.RemoteAccess.html","title":"Section 6.9 Remote Access","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 6.9 Remote Access","description":"some description"},"headers":[{"level":2,"title":"6.9.1 Remote Access","slug":"_6-9-1-remote-access","link":"#_6-9-1-remote-access","children":[{"level":3,"title":"Remote Access 00:00-00:51","slug":"remote-access-00-00-00-51","link":"#remote-access-00-00-00-51","children":[]},{"level":3,"title":"Authentication 00:51-01:09","slug":"authentication-00-51-01-09","link":"#authentication-00-51-01-09","children":[]},{"level":3,"title":"Point-to-Point Protocol 01:09-01:46","slug":"point-to-point-protocol-01-09-01-46","link":"#point-to-point-protocol-01-09-01-46","children":[]},{"level":3,"title":"Password Authentication Protocol 01:46-02:18","slug":"password-authentication-protocol-01-46-02-18","link":"#password-authentication-protocol-01-46-02-18","children":[]},{"level":3,"title":"CHAP Authentication 02:18-02:49","slug":"chap-authentication-02-18-02-49","link":"#chap-authentication-02-18-02-49","children":[]},{"level":3,"title":"Extensible Authentication Protocol 02:49-03:20","slug":"extensible-authentication-protocol-02-49-03-20","link":"#extensible-authentication-protocol-02-49-03-20","children":[]},{"level":3,"title":"Authorization 03:20-04:20","slug":"authorization-03-20-04-20","link":"#authorization-03-20-04-20","children":[]},{"level":3,"title":"Remote Access Policies 04:20-05:56","slug":"remote-access-policies-04-20-05-56","link":"#remote-access-policies-04-20-05-56","children":[]},{"level":3,"title":"AAA Server 05:56-06:50","slug":"aaa-server-05-56-06-50","link":"#aaa-server-05-56-06-50","children":[]},{"level":3,"title":"RADIUS 06:50-07:38","slug":"radius-06-50-07-38","link":"#radius-06-50-07-38","children":[]},{"level":3,"title":"TACACS+ 07:38-09:01","slug":"tacacs-07-38-09-01","link":"#tacacs-07-38-09-01","children":[]},{"level":3,"title":"Summary 09:01-09:24","slug":"summary-09-01-09-24","link":"#summary-09-01-09-24","children":[]}]},{"level":2,"title":"6.9.2 Remote Access Facts","slug":"_6-9-2-remote-access-facts","link":"#_6-9-2-remote-access-facts","children":[{"level":3,"title":"Remote Access","slug":"remote-access","link":"#remote-access","children":[]},{"level":3,"title":"Remote Access Protocols","slug":"remote-access-protocols","link":"#remote-access-protocols","children":[]},{"level":3,"title":"Remote Access Policies","slug":"remote-access-policies","link":"#remote-access-policies","children":[]}]},{"level":2,"title":"6.9.3 Configuring a RADIUS Solution","slug":"_6-9-3-configuring-a-radius-solution","link":"#_6-9-3-configuring-a-radius-solution","children":[{"level":3,"title":"Configuring a RADIUS Client 00:00-01:03","slug":"configuring-a-radius-client-00-00-01-03","link":"#configuring-a-radius-client-00-00-01-03","children":[]},{"level":3,"title":"Changing Authentication Methods 01:03-01:42","slug":"changing-authentication-methods-01-03-01-42","link":"#changing-authentication-methods-01-03-01-42","children":[]},{"level":3,"title":"Shared Secrets 01:42-02:28","slug":"shared-secrets-01-42-02-28","link":"#shared-secrets-01-42-02-28","children":[]},{"level":3,"title":"Certificates 02:28-02:39","slug":"certificates-02-28-02-39","link":"#certificates-02-28-02-39","children":[]},{"level":3,"title":"Summary 02:39-02:52","slug":"summary-02-39-02-52","link":"#summary-02-39-02-52","children":[]}]},{"level":2,"title":"6.9.4 RADIUS and TACACS+ Facts","slug":"_6-9-4-radius-and-tacacs-facts","link":"#_6-9-4-radius-and-tacacs-facts","children":[{"level":3,"title":"AAA Server","slug":"aaa-server","link":"#aaa-server","children":[]},{"level":3,"title":"RADIUS","slug":"radius","link":"#radius","children":[]},{"level":3,"title":"TACACS+","slug":"tacacs","link":"#tacacs","children":[]}]}],"git":{"updatedTime":1735698907000},"filePathRelative":"06/06.09.RemoteAccess.md"}');export{d as comp,u as data};
