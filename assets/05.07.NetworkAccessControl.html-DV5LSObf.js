import{_ as n,c as o,a as e,d as t,b as i,o as a}from"./app-D-_e_vUG.js";const r={};function c(l,s){return a(),o("div",null,s[0]||(s[0]=[e("p",null,"As you study this section, answer the following questions:",-1),e("ul",null,[e("li",null," How do remediation servers and auto-remediation help clients become compliant? "),e("li",null," What are the two stages in the network access control (NAC) process? "),e("li",null," What is an NAC agent? What types of NAC agents are available? "),e("li",null," What are the four steps of the NAC process? ")],-1),e("p",null,"The key terms for this section include:",-1),e("table",{class:"terms"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Term "),e("th",{scope:"col",class:"fw-bold"}," Definition ")])]),e("tbody",null,[e("tr",null,[e("td",null," Network access control "),e("td",null," A policy-driven control process that allows or denies network access to devices connecting to a network. ")]),e("tr",null,[e("td",null,[t(" Bring your own device "),e("br"),t(" (BYOD) ")]),e("td",null," A policy that allows an employee to use a personal device, such as a laptop computer or phone, to connect to the organization's network to accomplish daily work tasks. ")])])],-1),e("p",null,"This section helps you prepare for the following certification exam objectives:",-1),e("table",{class:"objectives"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Exam "),e("th",{scope:"col",class:"fw-bold"}," Objective ")])]),e("tbody",null,[e("tr",null,[e("td",null," CompTIA Security+ SY0-601 "),e("td",null,[t(" 3.3 Given a scenario, implement secure network designs. "),e("ul",null,[e("li",null,[t(" Network access control (NAC) "),e("ul",null,[e("li",null," Agent and agentless ")])])])])])])],-1),i('<h2 id="_5-7-1-network-access-control" tabindex="-1"><a class="header-anchor" href="#_5-7-1-network-access-control"><span>5.7.1 Network Access Control</span></a></h2><h3 id="network-access-control-00-00-00-23" tabindex="-1"><a class="header-anchor" href="#network-access-control-00-00-00-23"><span>Network Access Control 00:00-00:23</span></a></h3><p>Network Access Control, or NAC, is a process control that prevents unauthorized access and preserves the integrity of a production network. Depending on the configuration, an endpoint must meet certain criteria in order to join the internal network. In this lesson, we&#39;ll discuss the components and steps required for an end device to access an internal network.</p><h3 id="admission-criteria-00-23-01-00" tabindex="-1"><a class="header-anchor" href="#admission-criteria-00-23-01-00"><span>Admission Criteria 00:23-01:00</span></a></h3><p>Before an end device can connect, it must go through several validation checks, and it meet specified criteria. For example, a system may need to be running Windows 10 with update 1907. It may also need to have the latest antivirus latest definitions installed, have Windows firewall enabled, have the latest updates installed, and have automatic updates enabled.</p><p>If any of this criteria isn&#39;t met, the system belongs on a restricted network. A restricted network has equipment with the software, drivers, and updates you need to retrieve the required settings. Once the system is remediated and receives all the updates and system changes, it&#39;s safe for it to join the production network.</p><h3 id="nac-goals-01-00-01-36" tabindex="-1"><a class="header-anchor" href="#nac-goals-01-00-01-36"><span>NAC Goals 01:00-01:36</span></a></h3><p>Depending on the company&#39;s business market, a compliance model may dictate the level of protection and integrity a network system requires. Compliance industries include the medical, defense, and financial sectors. Each one has government-regulated compliance rules.</p><p>The basic tenants of NAC include zero-day attack mitigation, role-based controls, traffic encryption, identity management, and policy enforcement. These goals vary widely depending on NAC implementation, configuration, compliance requirements, and industry. To create an effective solution, you have to understand the resources you&#39;re protecting and why you&#39;re protecting them.</p><h3 id="vendor-specific-solution-01-36-02-04" tabindex="-1"><a class="header-anchor" href="#vendor-specific-solution-01-36-02-04"><span>Vendor-Specific Solution 01:36-02:04</span></a></h3><p>Now, network access control is a process, not a product, although several companies implement a product that uses the NAC process. For example, Cisco has a solution called Identity Services Engine, or ISE, while Microsoft has Network Access Protection, or NAP. Each is a framework that provides protection against unauthorized access or rogue system access to a protected network. The distinction between products is vendor-specific, and so is the implementation.</p><h3 id="nac-agent-02-04-02-43" tabindex="-1"><a class="header-anchor" href="#nac-agent-02-04-02-43"><span>NAC Agent 02:04-02:43</span></a></h3><p>Before a device can connect to the production network, it must go through a health check. The health check is configured by system management and may include criteria like antivirus software, firewall configurations, and patches. This health check is performed by software designed solely for this purpose.</p><p>One way to run this software is using an agent. An agent is a preinstalled software program that performs these health checks at predefined times. One example of how this might work happens when the workstation attempts a connection to the production network. At that time, the agent is activated and goes through its checks to ensure that the workstation meets the minimum requirements to access the production network.</p><h3 id="nac-agentless-02-43-03-06" tabindex="-1"><a class="header-anchor" href="#nac-agentless-02-43-03-06"><span>NAC Agentless 02:43-03:06</span></a></h3><p>Depending on the vendor, it&#39;s also possible to perform health checks on demand. This process is agentless, meaning it doesn&#39;t require a permanent agent to be preinstalled. Instead, the required software is downloaded and executed at the workstation when it attempts to connect to the network. Access to the production network is only granted if all the prerequisites are met and the health check passes.</p><h3 id="how-nac-works-03-06-05-32" tabindex="-1"><a class="header-anchor" href="#how-nac-works-03-06-05-32"><span>How NAC Works 03:06-05:32</span></a></h3><p>Network Access Control is a policy-driven construct that maintains network integrity using authentication and authorization policies. NAC can be compartmentalized for different types of devices such as Internet of Things, Bring Your Own Device, or vendors and contractors.</p><p>NAC defines the prerequisites and identity, or authentication. If a devices meets requirements, NAC provides access to the target information. You can think of NAC as a layered approach to providing network admission and access. Let&#39;s see how it works.</p><p>The first layer defines the tasks required for authentication. The authentication layer defines all the prerequisites a device must meet to access the network. This criteria is detailed in policies that define minimum requirements for the device, such as anti-malware software, OS type, patch level, and so on.</p><p>Keep in mind that the policies may be different for dissimilar types of devices. For instance, a tablet may be required to be managed by an MDM package or have backup and remote wipe enabled. Likewise, an Internet of Things device might be required to use a secure VLAN.</p><p>If a device fails authentication, it&#39;s forwarded to a remediation network. This network is protected and doesn&#39;t have access to any production information or outside areas such as the internet. Instead, the remediation network is preconfigured to contain all the necessary software and procedures to bring a device into compliance. It may have software updates, anti-malware definitions, and other control software. Once a device goes through remediation, it goes through the authentication process again. If it passes, it moves on to the authorization process.</p><p>The most secure method for ensuring integrity is a zero-trust access model. This is the concept of least privilege, or implicit deny all. With this model, users or devices are only given the permissions they require to do their jobs– no more, no less.</p><p>The authorization process looks at the authentication information and applies the policies you choose. After the device goes through the authorization process, it&#39;s granted access to the production network. This process isn&#39;t easy to set up, and it&#39;s often set up incorrectly. Several policies must be put into place, and boundary networks must be configured. Everything from connectivity devices to routing and switching must comply with the necessary logic to ensure that this process works. While difficult, it may be absolutely necessary in higher security environments where integrity is required. This is especially true in regulated industries.</p><h3 id="next-steps-05-32-05-54" tabindex="-1"><a class="header-anchor" href="#next-steps-05-32-05-54"><span>Next Steps 05:32-05:54</span></a></h3><p>NAC is a complicated process that requires forethought. The first step is planning. A committee should convene and make decisions that define how NAC will work. Next, roles, identities, and permissions must be defined. Then these polices must be applied. As business needs change, NAC configuration must be reviewed to determine whether it should change, too.</p><h3 id="summary-05-54-06-32" tabindex="-1"><a class="header-anchor" href="#summary-05-54-06-32"><span>Summary 05:54-06:32</span></a></h3><p>That&#39;s it for this lesson. In this video, we discussed how Network Access Control is a concept that helps to ensure the integrity of a network system. It provides a more granular approach to providing network access by enforcing minimum requirements applied to devices.</p><p>You can define items such as anti-malware, OS versions, patch levels, and more. If devices don&#39;t meet these requirements, they&#39;re redirected to a remediation network. Once they&#39;re authenticated, devices are authorized and granted access. This is an ongoing process as business processes change and the organization grows.</p><h2 id="_5-7-2-network-access-control-facts" tabindex="-1"><a class="header-anchor" href="#_5-7-2-network-access-control-facts"><span>5.7.2 Network Access Control Facts</span></a></h2><p>This lesson covers the following topics:</p><ul><li>NAC overview</li><li>NAC agent types</li><li>NAC process</li></ul><h3 id="nac-overview" tabindex="-1"><a class="header-anchor" href="#nac-overview"><span>NAC Overview</span></a></h3><p>Network access control (NAC) is a policy-driven control process that allows or denies network access to devices connecting to a network. For example, you may want to have policies that require connecting devices to meet certain criteria, such as having a particular version of Windows, the latest antivirus definitions, or Windows firewall enabled.</p><p>NAC is often integrated with automatic remediation systems, which helps bring a computer into compliance when NAC discovers missing requirements. When such a system is used, a connecting device only has access to resources that can resolve or remediate the issues. After the issues have been remediated, the device is reevaluated and then allowed to access network resources, like the internet or databases.</p><p>NAC is not a product but a process. However, several companies implement products that utilizes the NAC process. For example, Cisco has a solution called Identity Services Engine (ISE), and Microsoft has Network Access Protection (NAP). Each is a framework that provides protection against unauthorized access or rogue system access to a protected network. The distinction and implementation between products is vendor-specific.</p><p>The NAC process is usually accomplished using a two-stage process of authentication and authorization. If the requirements for either of these stages is not met, the access request is denied. This if often referred to as zero-trust security, meaning nothing is trusted unless it can pass both the authentication and authorization stages.</p><ul><li>Authentication defines all the prerequisites a device must meet in to access the network. This criteria is detailed for such things as anti-malware, OS, patch level, and so on.</li><li>Authorization looks at the authentication information and applies the appropriate policies to provide the device with the access it’s defined to receive.</li></ul><h3 id="nac-agent-types" tabindex="-1"><a class="header-anchor" href="#nac-agent-types"><span>NAC Agent Types</span></a></h3><p>Before a device can connect to the production network, it must go through a health check. This health check is performed by specific software designed solely for this purpose, often known as an agent. A NAC agent can be one of the following types:</p>',40),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Type "),e("th",{scope:"col",class:"fw-bold"}," Description ")])]),e("tbody",null,[e("tr",null,[e("td",null," Permanent "),e("td",null," The agent resides on a device permanently. This is the most convenient agent since it does not have to be renewed and can always run on the device. It is also known as a persistent agent. ")]),e("tr",null,[e("td",null," Dissolvable "),e("td",null," The agent is downloaded, or a temporary connection is established. It is removed once the user is done with it. The user has to download or connect to the agent again if needed. ")]),e("tr",null,[e("td",null," Agentless "),e("td",null," The agent is on the domain controller. When the user logs into the domain, it authenticates with the network. Agentless NAC is often used when there is limited disk space, such as for Internet of Things (IoT) devices. ")])])],-1),e("h3",{id:"nac-process",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nac-process"},[e("span",null,"NAC Process")])],-1),e("p",null,"NAC is a complicated process that requires forethought. Use the following process when implementing NAC:",-1),e("ul",null,[e("li",null,"Plan - A committee should convene and make decisions that define how NAC should work."),e("li",null,"Define - The roles, identities, and permissions (policies) must be defined."),e("li",null,"Apply - Once defined, the polices must be applied."),e("li",null,"Review/Revise - As business needs change, the process must be reviewed to determine whether changes are required.")],-1)]))}const d=n(r,[["render",c],["__file","05.07.NetworkAccessControl.html.vue"]]),p=JSON.parse('{"path":"/05/05.07.NetworkAccessControl.html","title":"Section 5.7 Network Access Control","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 5.7 Network Access Control","description":"some description"},"headers":[{"level":2,"title":"5.7.1 Network Access Control","slug":"_5-7-1-network-access-control","link":"#_5-7-1-network-access-control","children":[{"level":3,"title":"Network Access Control 00:00-00:23","slug":"network-access-control-00-00-00-23","link":"#network-access-control-00-00-00-23","children":[]},{"level":3,"title":"Admission Criteria 00:23-01:00","slug":"admission-criteria-00-23-01-00","link":"#admission-criteria-00-23-01-00","children":[]},{"level":3,"title":"NAC Goals 01:00-01:36","slug":"nac-goals-01-00-01-36","link":"#nac-goals-01-00-01-36","children":[]},{"level":3,"title":"Vendor-Specific Solution 01:36-02:04","slug":"vendor-specific-solution-01-36-02-04","link":"#vendor-specific-solution-01-36-02-04","children":[]},{"level":3,"title":"NAC Agent 02:04-02:43","slug":"nac-agent-02-04-02-43","link":"#nac-agent-02-04-02-43","children":[]},{"level":3,"title":"NAC Agentless 02:43-03:06","slug":"nac-agentless-02-43-03-06","link":"#nac-agentless-02-43-03-06","children":[]},{"level":3,"title":"How NAC Works 03:06-05:32","slug":"how-nac-works-03-06-05-32","link":"#how-nac-works-03-06-05-32","children":[]},{"level":3,"title":"Next Steps 05:32-05:54","slug":"next-steps-05-32-05-54","link":"#next-steps-05-32-05-54","children":[]},{"level":3,"title":"Summary 05:54-06:32","slug":"summary-05-54-06-32","link":"#summary-05-54-06-32","children":[]}]},{"level":2,"title":"5.7.2 Network Access Control Facts","slug":"_5-7-2-network-access-control-facts","link":"#_5-7-2-network-access-control-facts","children":[{"level":3,"title":"NAC Overview","slug":"nac-overview","link":"#nac-overview","children":[]},{"level":3,"title":"NAC Agent Types","slug":"nac-agent-types","link":"#nac-agent-types","children":[]},{"level":3,"title":"NAC Process","slug":"nac-process","link":"#nac-process","children":[]}]}],"git":{"updatedTime":1735526041000},"filePathRelative":"05/05.07.NetworkAccessControl.md"}');export{d as comp,p as data};