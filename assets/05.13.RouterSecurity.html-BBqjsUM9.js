import{_ as s,c as r,b as o,a as e,d as t,o as n}from"./app-DCBtO5g7.js";const i={};function l(c,a){return n(),r("div",null,a[0]||(a[0]=[o("<p>As you study this section, answer the following questions:</p><ul><li> Why should you change the default settings on new routers? </li><li> Which secure protocols should you use to remotely manage a router? </li><li> What actions can you take to ensure the physical security of network devices? </li><li> Why should you update router firmware? </li><li> How do ACLs work on a router? </li></ul><p>In this section, you will learn to:</p><ul><li>Restrict Telnet and SSH access.</li><li>Permit traffic.</li><li>Block source hosts.</li></ul><p>The key terms for this section include:</p>",5),e("table",{class:"terms"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Term "),e("th",{scope:"col",class:"fw-bold"}," Definition ")])]),e("tbody",null,[e("tr",null,[e("td",null," Router "),e("td",null," A network device that transmits data from one network to another. ")]),e("tr",null,[e("td",null," Access control list (ACL) "),e("td",null," A router filter that controls which network packets are permitted (forwarded) or denied (dropped) in or out of a network. ")])])],-1),e("p",null,"This section helps you prepare for the following certification exam objectives:",-1),e("table",{class:"objectives"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Exam "),e("th",{scope:"col",class:"fw-bold"}," Objective ")])]),e("tbody",null,[e("tr",null,[e("td",null," TestOut Security Pro "),e("td",null,[t(" 2.2 Harden Network Devices "),e("blockquote",null," 2.2.5 Configure Router Security ")])]),e("tr",null,[e("td",null," CompTIA Security+ SY0-601 "),e("td",null,[t(" 1.6 Explain the security concerns associated with various types of vulnerabilities. "),e("ul",null,[e("li",null,[t(" Weak configurations "),e("ul",null,[e("li",null," Unsecured root accounts ")])])]),e("p",null," 3.3 Given a scenario, implement secure network "),e("ul",null,[e("li",null," Access control list (ACL) "),e("li",null," Route security ")])])])])],-1),o('<h2 id="_5-13-1-router-security" tabindex="-1"><a class="header-anchor" href="#_5-13-1-router-security"><span>5.13.1 Router Security</span></a></h2><h3 id="router-security-00-00-00-26" tabindex="-1"><a class="header-anchor" href="#router-security-00-00-00-26"><span>Router Security 00:00-00:26</span></a></h3><p>We&#39;re going to talk about using a secure router configuration. If you&#39;re responsible for managing routers, it is critical that you use a secure router configuration. The way you do this depends on router manufacturer, model, configuration interface, and other factors.</p><p>In this lesson, we&#39;re going to look at some general router security principles that apply to a wide variety of router makes and models.</p><h3 id="change-default-settings-00-26-02-06" tabindex="-1"><a class="header-anchor" href="#change-default-settings-00-26-02-06"><span>Change Default Settings 00:26-02:06</span></a></h3><p>The most important aspect of securing any router, regardless of manufacturer, is changing default configuration settings.</p><p>By default, routers are configured to use a predetermined username and password. Typically, this is something like admin and admin, or admin and password, or something very similar. There&#39;s actually even lists out on the internet that have the default username and password for practically every router model.</p><p>Because of this, it&#39;s extremely important you immediately change the default username and password on a router. In fact, I would recommend you changing this configuration before you even connect the router to the rest of the network or internet. This will ensure that there is zero chance someone will compromise the router before you have a chance to change this configuration.</p><p>When you&#39;re changing the default username, make sure to name it something other than admin or administrator or root or something easily guess. Also make sure you use a very complex password that includes numbers, symbols, upper- and lower-case letters, and is at minimum 12 characters long.</p><p>Another default setting you might consider changing is the default network address. Depending on how your organization is configured, you might have the ability to select a different IP address range than the default 192.168.1 network address that most routers use. This approach is known as security through obscurity, which by itself isn&#39;t actually secure, but if layered with other security techniques, it can add just one more obstacle an attacker has to get through, albeit a small one.</p><p>Depending on the device or organization you work for, you might be using a SOHO all-in-one router that includes switching and Wi-Fi capabilities. If this is the case, make sure to change the default SSID name and wireless encryption settings.</p><p>Another thing you should do when you first set up a router is make sure the firmware is up-to-date.</p><h3 id="update-firmware-02-06-02-27" tabindex="-1"><a class="header-anchor" href="#update-firmware-02-06-02-27"><span>Update Firmware 02:06-02:27</span></a></h3><p>Oftentimes routers are shipped with older firmware versions. Firmware updates contain much needed security fixes and vulnerability fixes, so it&#39;s important you are using the latest firmware version available. And always make sure you keep the router updated with the latest firmware.</p><p>The next configuration changes you want to make is that of the protocol used to connect to the router.</p><h3 id="use-secure-protocols-02-27-03-43" tabindex="-1"><a class="header-anchor" href="#use-secure-protocols-02-27-03-43"><span>Use Secure Protocols 02:27-03:43</span></a></h3><p>Some routers use connection protocols that send authentication credentials in cleartext. This makes it very easy for someone to capture packets and identify the login information for the device. While most modern routers will use some type of secure protocol, such as SSL, it&#39;s possible you might work with an older router that uses an older, unencrypted protocol by default. If this is the case, be aware that you should use a secure protocol.</p><p>For example, some routers might have FTP functionality that allows you to upload configuration files or firmware updates to the router. Because FTP is an unencrypted transmission protocol, the configuration file could be easily captured. Instead, you might be able to use SFTP, which is the secure, encrypted form of FTP.</p><p>Now, this does all depend on how you are connecting to the router to configure it. Some routers have a dedicated serial port that is used to configure the router. This is done instead of a remote configuration portal using a web browser or SSH. If this is the case, you might not need to worry about encrypted transmissions. However, if you are working with the router remotely, be sure you know which transmission protocol is being used and whether or not it is secure.</p><h3 id="disable-upnp-03-43-04-29" tabindex="-1"><a class="header-anchor" href="#disable-upnp-03-43-04-29"><span>Disable UPnP 03:43-04:29</span></a></h3><p>Speaking of using secure protocols, there&#39;s one protocol that I want to quickly talk about that some routers use, especially SOHO routers. That protocol is universal plug and play (UPnP).</p><p>UPnP was designed to make setting up media and IoT devices, such as smart TVs and gaming consoles, a breeze. It works by opening up ports for devices inside the network on the fly, eliminating the need to manually open up ports for these devices. In theory, it&#39;s a nice idea. However, in practice? Not so much.</p><p>UPnP has been plagued with exploit after exploit since it was implemented. These exploits range from annoying to downright scary. Because of this, I highly recommend simply disabling UPnP on any router that has it. At this time, the convenience isn&#39;t worth the risk.</p><h3 id="remote-access-04-29-05-22" tabindex="-1"><a class="header-anchor" href="#remote-access-04-29-05-22"><span>Remote Access 04:29-05:22</span></a></h3><p>Another area you need to look at with routers is that of remote access.</p><p>Most routers will allow you to configure remote access options—both remote access from within the network and remote access from outside the network via the internet.</p><p>It might not be possible to disable remote access from inside the network. For example, the router might be locked inside of a networking closet or server rack case and accessing the router would require you to be inside the frigid server room. If this is the case, make sure the login credentials for remote access are configured properly and the protocol used is secure.</p><p>Remote access from outside, on the other hand, should 99% of the time be disabled. There are really only a handful of times remote access from outside the network would be necessary. And for these occasions, I recommend only enabling for as long as you need it, and not a moment longer. Allowing remote access from outside the network opens up entire attack surface that you shouldn&#39;t have to worry about.</p><h3 id="install-in-a-secure-location-05-22-05-58" tabindex="-1"><a class="header-anchor" href="#install-in-a-secure-location-05-22-05-58"><span>Install in a Secure Location 05:22-05:58</span></a></h3><p>Like I said earlier, you might not be able to have physical access to the router all the time, and this is actually a good thing.</p><p>As you already know, it&#39;s always a good idea to keep networking devices and critical infrastructure components under lock and key, and routers are no different. With physical access, it&#39;s possible for an attacker to access a router even if they don&#39;t have the proper login credentials. Because of this, make sure routers are stored in a secure location. At the very least, keep the router in a locked cabinet. But keeping it with other networking equipment in a locked cage or lock server room that has the appropriate physical security controls is best.</p><h3 id="configuration-file-05-58-06-43" tabindex="-1"><a class="header-anchor" href="#configuration-file-05-58-06-43"><span>Configuration File 05:58-06:43</span></a></h3><p>Another important aspect of proper router security is that of the configuration file.</p><p>The configuration file stores all the configure settings for the router, including open ports, usernames, firewall settings, et cetera. And often times these files can be backed up remotely on a USB drive or workstation. If you do backup these files, be sure to properly encrypt them so they can&#39;t easily read.</p><p>In addition, a lot of routers offer the option to encrypt the configuration file on the device itself. If your router happens to have this option, enable it. This provides an additional layer of security should someone gain access to this file.</p><p>And speaking of backing up the configuration file, do so on a regular basis. And as I said earlier, secure you backups by encrypting them.</p><h3 id="summary-06-43-07-04" tabindex="-1"><a class="header-anchor" href="#summary-06-43-07-04"><span>Summary 06:43-07:04</span></a></h3><p>Your network is only as strong as its weakest link. And if that weak link is the primary entry point into your network, as the router is, you might have a lot of problems on your hands. Keep this in mind when securing your network and take the extra time and steps we discussed in this lesson to properly secure your router.</p><h2 id="_5-13-2-router-acls" tabindex="-1"><a class="header-anchor" href="#_5-13-2-router-acls"><span>5.13.2 Router ACLs</span></a></h2><h3 id="router-acls-00-00-00-26" tabindex="-1"><a class="header-anchor" href="#router-acls-00-00-00-26"><span>Router ACLs 00:00-00:26</span></a></h3><p>Like a firewall, a router can use access control lists (ACLs) to protect a network from attacks and control what type of communications are allowed on the network.</p><p>Don&#39;t confuse the ACL on a router with its routing table. The routing table is used to determine where network packets are forwarded to. The ACL, on the other hand, is used to determine whether or not a packet is allowed to be forwarded.</p><h3 id="router-acl-basics-00-26-01-09" tabindex="-1"><a class="header-anchor" href="#router-acl-basics-00-26-01-09"><span>Router ACL Basics 00:26-01:09</span></a></h3><p>For example, an ACL on a router could ban all incoming traffic destined to a specific IP address inside the network. Any packet destined for that IP address is dropped. However, outgoing packets from that IP address are still permitted.</p><p>When you create an ACL on a router, it almost always includes a hidden deny any statement at the end of the list. This means all traffic is automatically blocked. To allow traffic, you need at least one permit statement that either permits a specific traffic type or permits all traffic not specifically restricted.</p><p>The type of traffic you are able to control with an ACL depends on the type of ACL you create. Routers primarily use two ACL types: standard ACLs and extended ACLs.</p><h3 id="standard-acls-01-09-01-55" tabindex="-1"><a class="header-anchor" href="#standard-acls-01-09-01-55"><span>Standard ACLs 01:09-01:55</span></a></h3><p>A standard ACL is only able to filter traffic based on the source host name or host IP address--that is, it can&#39;t filter traffic based on port number, destination host name, or host IP address.</p><p>For example, you could configure a standard ACL to only allow traffic coming from internal IP addresses. All traffic coming from external IP address would be dropped. You could also configure a standard ACL to block all traffic from a specific IP address, but allow all other traffic. Know that because of how they function, standard ACLs should be placed as close to the destination as possible.</p><p>So, what if you wanted to block traffic based on other parameters, such as port number? To do this, you use the second type of ACL—&quot;an extended ACL.</p><h3 id="extended-acls-01-55-02-31" tabindex="-1"><a class="header-anchor" href="#extended-acls-01-55-02-31"><span>Extended ACLs 01:55-02:31</span></a></h3><p>Extended ACLs are used to filter traffic based on a lot more parameters than standard ACLs. In addition to filtering based on source host name or host IP address, an extended ACL can filter based on source IP protocol, source or destination socket number, and destination host name or host IP address.</p><p>For example, you could block all outgoing traffic except for traffic on ports 80 and 443, or you could block all traffic from inside the network that&#39;s destined for a specific IP address.</p><p>Unlike standard ACLs, extended ACLs should be placed as close to the source as possible.</p><h3 id="summary-02-31-02-50" tabindex="-1"><a class="header-anchor" href="#summary-02-31-02-50"><span>Summary 02:31-02:50</span></a></h3><p>That&#39;s it for this lesson. In this lesson, we looked at router ACLs. We looked at how ACLs on a router work and what parameters are defined when they are created. We then looked at the two types of ACLs routers use, standard ACLs and extended ACLs.</p><h2 id="_5-13-3-router-security-facts" tabindex="-1"><a class="header-anchor" href="#_5-13-3-router-security-facts"><span>5.13.3 Router Security Facts</span></a></h2><p>This lesson covers secure routers.</p><h3 id="secure-routers" tabindex="-1"><a class="header-anchor" href="#secure-routers"><span>Secure Routers</span></a></h3><p>Take the following general actions to secure routers:</p>',60),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Security Measure "),e("th",{scope:"col",class:"fw-bold"}," Description ")])]),e("tbody",null,[e("tr",null,[e("td",null," Change factory defaults "),e("td",null,[t(" Change default settings on the router to increase security. "),e("ul",null,[e("li",null," Change the default manufacturer's username and password and encrypt the new password. Use a complex password instead of passwords that are easy to guess or crack. Complex passwords are typically over eight characters; contain a mix of character types (numbers and symbols); and are not words, variations of words, or derivatives of the username. "),e("li",null," Change the default network address. Some routers default to 192.168.1.1 or 10.0.0.1. ")])])]),e("tr",null,[e("td",null," Use secure protocols "),e("td",null,[t(" Use encrypted protocols when managing the device. The protocols function as follows: "),e("ul",null,[e("li",null,[t(" Secure Shell (SSH) allows for secure interactive control of remote systems. "),e("ul",null,[e("li",null," SSH uses RSA public key cryptography for both connection and authentication. "),e("li",null," SSH is a protocol that can also be used to provide security services for other protocols. ")])]),e("li",null," Secure Copy Protocol (SCP) is a secure file copy protocol that uses SSH for security. "),e("li",null," HTTP (HyperText Transfer Protocol) over SSL (Secure Sockets Layer), known as (HTTPS), is a secure form of HTTP that uses SSL to encrypt data before it is transmitted. ")]),e("div",{class:"info","data-block":`
       Do not use HTTP, Telnet, File Transfer Protocol (FTP), or Trivial FTP (TFTP). These protocols
          send data in cleartext. The most secure way to manage a router's configuration is to connect the management station
          to the router's console port. This creates a dedication transmission path that can't be sniffed by hosts on the
          network. Also, avoid using UPnP (Universal Plug and Play), unless your routers have the latest firmware updates and your
          connected devices are free of malware.
      `},[e("div",{class:"to-info-box"},[e("div",{class:"to-info-box-body"},[e("span",{class:"to-icon large","aria-hidden":"true"},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"circle-info",class:"svg-inline--fa fa-circle-info",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"})])]),e("div",{class:"to-info-box-body-content"},[e("span",null," Do not use HTTP, Telnet, File Transfer Protocol (FTP), or Trivial FTP (TFTP). These protocols send data in cleartext. The most secure way to manage a router's configuration is to connect the management station to the router's console port. This creates a dedication transmission path that can't be sniffed by hosts on the network. Also, avoid using UPnP (Universal Plug and Play), unless your routers have the latest firmware updates and your connected devices are free of malware. ")])])])])])]),e("tr",null,[e("td",null," Implement physical security "),e("td",null,[t(" Ensure physical security by keeping network devices in a locked room. If someone can gain access to the physical device they can easily bypass any configured passwords. Passwords are useless if physical access is not controlled. Implement the following physical security measures: "),e("ul",null,[e("li",null," Perimeter barriers "),e("li",null," Closed-circuit television (CCTV) "),e("li",null," Doors "),e("li",null," Door locks "),e("li",null," Physical access logs "),e("li",null," Physical access controls ")])])]),e("tr",null,[e("td",null," Secure configuration file "),e("td",null," If possible, store the router configuration file in an encrypted form and back up the file to a secure location. ")]),e("tr",null,[e("td",null," Update firmware "),e("td",null," One of the first things you should do when setting up a new router is update the firmware. The updates to the firmware fix any vulnerabilities that have been resolved by the manufacturer in the past. ")]),e("tr",null,[e("td",null," Use anti-spoofing rules "),e("td",null,[t(" Anti-spoofing rules counter spoofing attacks where IP packets have a source address that does not belong to the sender. Anti-spoofing rules analyze the IP packet and match the router interface and direction from which the packet is received. An inbound packet that comes to the external interface must not have a source address that match the internal network or the router itself. "),e("p",null," A typical anti-spoofing rule will be configured as follows: "),e("ul",null,[e("li",null," Source: An IP address belonging to the internal network or the IP address of the router itself "),e("li",null," Destination: Any "),e("li",null," Service: Any "),e("li",null," Interface: Any external interface "),e("li",null," Direction: Inbound "),e("li",null," Action: Deny "),e("li",null," Time: Any ")])])]),e("tr",null,[e("td",null,[t(" Access control lists "),e("br"),t(" (ACLs) ")]),e("td",null," Router access control lists (ACLs) can be configured to increase security and limit traffic much like a firewall, but on the router level. ACLs filter the traffic and determine if the data should be blocked or forwarded. ")])])],-1),o('<h2 id="_5-13-4-configuring-acls" tabindex="-1"><a class="header-anchor" href="#_5-13-4-configuring-acls"><span>5.13.4 Configuring ACLs</span></a></h2><h3 id="access-control-lists-00-01-00-28" tabindex="-1"><a class="header-anchor" href="#access-control-lists-00-01-00-28"><span>Access Control Lists 00:01-00:28</span></a></h3><p>In this demonstration, we&#39;ll show you how to configure access control lists on a Cisco router using the command line interface. Access control lists can give us granular control over how data flows across our networks, and which computers can communicate with specific protocols.</p><p>An access control list is simply a sequential list of statements of what can and cannot be done on the network. Those that can be done use the permit keyword. Those that can&#39;t be done use the deny keyword.</p><h3 id="defining-lists-00-28-01-04" tabindex="-1"><a class="header-anchor" href="#defining-lists-00-28-01-04"><span>Defining Lists 00:28-01:04</span></a></h3><p>The ordering of the lines is important. These lists should go from the most specific conditions to the most general.</p><p>For instance, if we wanted to disallow FTP on our network, we could create a statement added to our access list that denied FTP. We would do that first, and then later we might allow all other application protocols that sit on top of the IP protocol.</p><p>And so, we might have two rules there. It&#39;s also important to recognize that there&#39;s an implicit deny anything else or any other traffic. This is located at the end of every access control list. In other words, anything that isn&#39;t explicitly permitted is implicitly denied.</p><h3 id="configuring-acl-s-01-04-02-12" tabindex="-1"><a class="header-anchor" href="#configuring-acl-s-01-04-02-12"><span>Configuring ACL&#39;s 01:04-02:12</span></a></h3><p>For our demonstration, we&#39;re going to use this Windows 10 virtual machine that you can see over here. You can see that it currently has access to the Internet. We could look up access control lists and find out some information.</p><p>We can also see that we can currently ping, say, Google&#39;s DNS servers. We have access to the Internet. Let&#39;s go ahead and prohibit, or deny access for this computer to the Internet.</p><p>I&#39;m going to attach to my Cisco router using Tera Term here. I have a cable going to the console port on the router. You can see that my router is currently, already configured to allow NAT, and it also has some specific configuration settings allowing different networks to connect with each other.</p><p>If we wanted to deny access to the Internet for this device, we need to know what its IP address is. We can get that by typing IPconfig here. You can see this is 10.0.0.2.</p><p>You can see that it must be connected to this 10.0.0.1 network that&#39;s associated with interface FA0/1. To deny a specific host, it&#39;s fairly straightforward. We need to get into configuration mode.</p><h3 id="types-of-acl-s-02-12-03-33" tabindex="-1"><a class="header-anchor" href="#types-of-acl-s-02-12-03-33"><span>Types of ACL&#39;s 02:12-03:33</span></a></h3><p>Now, you might have read, or you might know that there are two different types of access control lists, with Cisco. There are standard lists, and there are extended ACL. Standard lists only act on the source IP address for filtering.</p><p>You can only deny or permit specific hosts based on IP address, not protocols. Whereas, extended access control lists allow you to get pretty granular with which ports are allowed and denied, which protocols are allowed or denied also.</p><p>In our case, standard control list will work fine for this action. Now that we&#39;re in configuration mode, we&#39;re going to create an access list, and we&#39;ll just call it access list 10. Standard lists range typically from 1 to 99, or from 1300 to 1999. We&#39;ll just choose 10 because that says this is a standard access list.</p><p>And then, we will state that we want to deny 10.0.0.2, and specifically just that host. This second parameter is a wild card mask. Essentially, anything that&#39;s a zero there, says it has to match, or the IP address has to match that.</p><p>In this case, we&#39;re only applying this rule to 10.0.0.2. Everything has to match that.</p><p>We&#39;ll do that. Now, we still have access to the Internet. We can go ahead and refresh. You can see that we still get results. We can&#39;t just create the access list. We now need to apply that access list.</p><h3 id="apply-acl-s-03-33-04-51" tabindex="-1"><a class="header-anchor" href="#apply-acl-s-03-33-04-51"><span>Apply ACL&#39;s 03:33-04:51</span></a></h3><p>And so, in order to apply it, we basically tell it which interface this applies to. We&#39;re already in configuration mode, so we&#39;ll go to FA0/1, and we&#39;ll apply this access list to that.</p><p>We&#39;re going to apply access list 10 to this interface, and we&#39;re going to examine packets as they arrive at this interface on the router. We&#39;ll go ahead and say, &quot;Enter there.&quot;</p><p>And now, if we come over here, we should see that we no longer have access to the Internet. It just kind of spins there. If we come up, and we try to ping, it&#39;s unreachable.</p><p>Now, one problem with this list is we explicitly denied this host. We&#39;ve achieved what we wanted to. However, because there&#39;s that implicit deny at the end, we&#39;ve denied access to everything else as well, everything that&#39;s coming through FA0/1.</p><p>If we wanted to keep that there, we&#39;d want to, maybe create a rule that said access list 10 permit, and then the range of IP addresses that would be permitted.</p><p>In this case, let&#39;s just go ahead and just disable that access control list. We&#39;re still on that, so I&#39;m going to simply type, no IP access group 10 in, which basically reverses the command that I had just done.</p><p>We should see that now we have access back out to the Internet. We can refresh this one, as well.</p><h3 id="deny-ping-with-acl-s-04-51-06-25" tabindex="-1"><a class="header-anchor" href="#deny-ping-with-acl-s-04-51-06-25"><span>Deny Ping with ACL&#39;s 04:51-06:25</span></a></h3><p>What if we wanted to deny ping, which uses ICMP, while still allowing Internet access? How can we get a little bit more granular? Well, we&#39;re going to need extended control lists in order to do that.</p><p>Let&#39;s go ahead and create an extended access control list. We&#39;ll get out of this interface. Let&#39;s go ahead and create access list 100. For this one, let&#39;s first deny ICMP, and we can specify a single host by just saying, &quot;Host.&quot;</p><p>We&#39;ll say, &quot;Deny this specific host for ICMP.&quot; And, to what network? We&#39;ll say, &quot;To anything that comes through.&quot; The 0.0.0 says, &quot;Anything.&quot; Coupled with this wildcard mask then that denies all ICMP.</p><p>Now, we haven&#39;t applied this list yet, so it still will allow us out to the Internet. We also want to permit access to other types of protocols, or any other protocol besides ICMP. Our second rule on our list will allow us to do that.</p><p>We&#39;re going to permit IP for that host. We can shorten it and just say, &quot;To any,&quot; if we wanted to. Or, maybe we could be a little broader and say, &quot;We&#39;re actually going to allow anyone on the 10 dot network to have access to any network.&quot;</p><p>Let&#39;s go ahead and try to apply that to FA0/1. Let&#39;s go ahead and try it. So, we are not able to ping, but we are able to get out to the Internet. Let&#39;s go ahead and show you that, and that it&#39;s not just cached. You can do different queries.</p><h3 id="defining-acl-s-06-25-06-52" tabindex="-1"><a class="header-anchor" href="#defining-acl-s-06-25-06-52"><span>Defining ACL&#39;s 06:25-06:52</span></a></h3><p>Access control lists are very powerful but can become complicated. It&#39;s important that you understand the basics that essentially these are just a sequential list of permit-and-deny statements, with an implicit deny at the end.</p><p>Standard access control lists allow you to filter based on a source IP address. Extended access control lists allow you to filter more granularly on specific protocols, or even specific ports for individual hosts, or for whole ranges of addresses.</p><h3 id="summary-06-52-07-12" tabindex="-1"><a class="header-anchor" href="#summary-06-52-07-12"><span>Summary 06:52-07:12</span></a></h3><p>Okay. That&#39;s it for this demonstration. In this demonstration, we showed you how to configure access control lists on a Cisco router using the command line interface.</p><p>Access control lists are foundational to allow us to screen the data that comes through our networks that we either allow out or into our corporate networks.</p>',42)]))}const h=s(i,[["render",l],["__file","05.13.RouterSecurity.html.vue"]]),d=JSON.parse(`{"path":"/05/05.13.RouterSecurity.html","title":"Section 5.13 Router Security","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 5.13 Router Security","description":"some description"},"headers":[{"level":2,"title":"5.13.1 Router Security","slug":"_5-13-1-router-security","link":"#_5-13-1-router-security","children":[{"level":3,"title":"Router Security 00:00-00:26","slug":"router-security-00-00-00-26","link":"#router-security-00-00-00-26","children":[]},{"level":3,"title":"Change Default Settings 00:26-02:06","slug":"change-default-settings-00-26-02-06","link":"#change-default-settings-00-26-02-06","children":[]},{"level":3,"title":"Update Firmware 02:06-02:27","slug":"update-firmware-02-06-02-27","link":"#update-firmware-02-06-02-27","children":[]},{"level":3,"title":"Use Secure Protocols 02:27-03:43","slug":"use-secure-protocols-02-27-03-43","link":"#use-secure-protocols-02-27-03-43","children":[]},{"level":3,"title":"Disable UPnP 03:43-04:29","slug":"disable-upnp-03-43-04-29","link":"#disable-upnp-03-43-04-29","children":[]},{"level":3,"title":"Remote Access 04:29-05:22","slug":"remote-access-04-29-05-22","link":"#remote-access-04-29-05-22","children":[]},{"level":3,"title":"Install in a Secure Location 05:22-05:58","slug":"install-in-a-secure-location-05-22-05-58","link":"#install-in-a-secure-location-05-22-05-58","children":[]},{"level":3,"title":"Configuration File 05:58-06:43","slug":"configuration-file-05-58-06-43","link":"#configuration-file-05-58-06-43","children":[]},{"level":3,"title":"Summary 06:43-07:04","slug":"summary-06-43-07-04","link":"#summary-06-43-07-04","children":[]}]},{"level":2,"title":"5.13.2 Router ACLs","slug":"_5-13-2-router-acls","link":"#_5-13-2-router-acls","children":[{"level":3,"title":"Router ACLs 00:00-00:26","slug":"router-acls-00-00-00-26","link":"#router-acls-00-00-00-26","children":[]},{"level":3,"title":"Router ACL Basics 00:26-01:09","slug":"router-acl-basics-00-26-01-09","link":"#router-acl-basics-00-26-01-09","children":[]},{"level":3,"title":"Standard ACLs 01:09-01:55","slug":"standard-acls-01-09-01-55","link":"#standard-acls-01-09-01-55","children":[]},{"level":3,"title":"Extended ACLs 01:55-02:31","slug":"extended-acls-01-55-02-31","link":"#extended-acls-01-55-02-31","children":[]},{"level":3,"title":"Summary 02:31-02:50","slug":"summary-02-31-02-50","link":"#summary-02-31-02-50","children":[]}]},{"level":2,"title":"5.13.3 Router Security Facts","slug":"_5-13-3-router-security-facts","link":"#_5-13-3-router-security-facts","children":[{"level":3,"title":"Secure Routers","slug":"secure-routers","link":"#secure-routers","children":[]}]},{"level":2,"title":"5.13.4 Configuring ACLs","slug":"_5-13-4-configuring-acls","link":"#_5-13-4-configuring-acls","children":[{"level":3,"title":"Access Control Lists 00:01-00:28","slug":"access-control-lists-00-01-00-28","link":"#access-control-lists-00-01-00-28","children":[]},{"level":3,"title":"Defining Lists 00:28-01:04","slug":"defining-lists-00-28-01-04","link":"#defining-lists-00-28-01-04","children":[]},{"level":3,"title":"Configuring ACL's 01:04-02:12","slug":"configuring-acl-s-01-04-02-12","link":"#configuring-acl-s-01-04-02-12","children":[]},{"level":3,"title":"Types of ACL's 02:12-03:33","slug":"types-of-acl-s-02-12-03-33","link":"#types-of-acl-s-02-12-03-33","children":[]},{"level":3,"title":"Apply ACL's 03:33-04:51","slug":"apply-acl-s-03-33-04-51","link":"#apply-acl-s-03-33-04-51","children":[]},{"level":3,"title":"Deny Ping with ACL's 04:51-06:25","slug":"deny-ping-with-acl-s-04-51-06-25","link":"#deny-ping-with-acl-s-04-51-06-25","children":[]},{"level":3,"title":"Defining ACL's 06:25-06:52","slug":"defining-acl-s-06-25-06-52","link":"#defining-acl-s-06-25-06-52","children":[]},{"level":3,"title":"Summary 06:52-07:12","slug":"summary-06-52-07-12","link":"#summary-06-52-07-12","children":[]}]}],"git":{"updatedTime":1735529086000},"filePathRelative":"05/05.13.RouterSecurity.md"}`);export{h as comp,d as data};
