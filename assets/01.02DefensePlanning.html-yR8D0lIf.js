import{_ as a,c as n,a as e,b as i,o as s}from"./app-BN5sSaRR.js";const o={};function r(l,t){return s(),n("div",null,t[0]||(t[0]=[e("p",null,"As you study this section, answer the following questions:",-1),e("ul",null,[e("li",null,"What is layered security?"),e("li",null,"What are the seven layers in layered security?"),e("li",null,"What is a countermeasure?"),e("li",null,"How can countermeasures reduce the risk of a threat agent being able to exploit a vulnerability?")],-1),e("p",null,"Key terms for this section include the following:",-1),e("table",{class:"terms"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Term "),e("th",{scope:"col",class:"fw-bold"}," Definition ")])]),e("tbody",null,[e("tr",null,[e("td",null," Layered security "),e("td",null," A security approach that combines multiple security controls and defenses to create a cumulative effect. ")]),e("tr",null,[e("td",null," Layered security model "),e("td",null," A security approach that defines seven layers of security. ")])])],-1),i('<h2 id="_1-2-1-the-layered-security-model" tabindex="-1"><a class="header-anchor" href="#_1-2-1-the-layered-security-model"><span>1.2.1 The Layered Security Model</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>The Layered Security Model 00:00-00:28 Defending a network from threats and attacks isn&#39;t easy. As a security professional, you need to be vigilant to every entry point, vulnerability, attack surface, and other potential threats to your organization. And you must neutralize or eliminate every single one.</p><p>Luckily, there&#39;s a way to make defending your network and organization a bit more manageable. In this lesson, we&#39;re going to explore the layered security model strategy.</p><p>What is Layered Security? 00:28-01:39 Layered security, sometimes called defense-in-depth security, is a security approach that combines multiple security controls and defenses to create a cumulative effect.</p><p>For example, you can encrypt data on a hard drive. But that hard drive can also be inside a workstation that contains a host-based firewall and anti-malware software. And that workstation could be physically secured to a desk inside a locked office, which is inside a controlled-access building, which is surrounded by a fence.</p><p>As you can see, each of these security measures provides an added level of security and deterrence. Alone, they may not be enough protection. But together, they create a cumulative security effect that protects sensitive information on the hard drive.</p><p>The layered security model breaks down each security layer into specific categories. In this course, we&#39;ve divided it into seven security layers: Policies, Procedures, and Awareness; Physical; Perimeter; Network; Host; Application; and Data. Each of these layers contains a subset of subjects and practices necessary for an effective defense.</p><p>We&#39;re going to do a basic overview of each layer. As you go through the course, you&#39;ll learn about each one in detail.</p><p>Policies, Procedures, and Awareness 01:39-02:06 The first layer is the Policies, Procedures, and Awareness segment. This layer concerns things like user education, manageable network plans, and how to manage employee onboarding and offboarding. It also covers application development policies, third-party integration policies, and general employment and user management policies, such as if an employee can connect a mobile device to the company network, or how complex a user&#39;s password must be.</p><p>Physical 02:06-02:27 Next is the Physical layer. This layer is concerned with the various types of physical threats and how to defend against them. To physically protect an organization effectively, we must be familiar with fences, door locks, mantraps, turnstiles, device locks, server cages, cameras, motion detectors, and even environmental controls.</p><p>Perimeter 02:27-03:02 The Perimeter layer deals with your network&#39;s perimeter defense. This is the first line of defense against network attacks. For a remote attacker to gain access to your network, they first need to penetrate this layer. Consequently, it&#39;s vital to fully understand the perimeter layer.</p><p>To properly secure this layer, you need to recognize the various types of perimeter attacks such as a DDoS or DNS attack. You also need to understand the various tools to defend against these attacks, such as properly configuring firewalls using ACLs or effectively securing a wireless network.</p><p>Network 03:02-03:30 Inside the perimeter is the fourth security layer—the Network layer.</p><p>To properly secure your network you must be able to identify when an intrusion occurs. You also need to know how to install and configure switches and routers, implement VLANs, perform penetration testing, and utilize virtualization.</p><p>Perimeter and Network layers often merge since they share some interrelated topics and domains, but it&#39;s still beneficial to approach them as two separate layers.</p><p>Host 03:30-03:48 Next, we have the Host layer. This layer covers the security of each individual workstation, laptop, and mobile device. The Host layer includes log management, OS hardening, patch management and implementation, auditing, and even malware and password attacks.</p><p>Application 03:48-04:06 The sixth layer is the Application layer. As its name implies, the Application layer deals with applications. It also deals with how users access applications and resources. As such, it deals with authentication and authorization, user management, group policies, and even web application security.</p><p>Data 04:06-04:30 The last segment in our security model is the Data layer. To effectively secure this layer, you must understand how to store data properly, destroy data, and classify data. You also need to be very familiar with cryptography and securing data transmissions. And like we mentioned with the previous layers, you must be able to recognize how attackers will try to access your data, and how to defend against them.</p><p>Summary 04:30-05:48 Now, it&#39;s important that you don&#39;t misunderstand the definition of layered security.</p><p>A layered security approach doesn&#39;t mean going out and purchasing dozens of security devices and hardware components and connecting them to the network hoping one of them stops an attack or identifies a threat. That approach would create an unmanageable and unsecure network.</p><p>Instead, layered security is a systematic approach to organizational security that identifies the best protection solution for each security layer, so if necessary, each layer can effectively stand on its own.</p><p>For example, at the Data layer, our encryption policies and protocols should suffice that if we experienced a physical security breach where a hard drive was stolen, then that thief wouldn&#39;t be able to access the information stored on it.</p><p>Similarly, at the Policies, Procedures, and Awareness layer, users should be sufficiently knowledgeable and trained so that a malware or spam filtering device in the Perimeter layer would be unnecessary, or malware protection at the Application layer would be superfluous.</p><p>Nevertheless, layering security obstacles in the path of would-be attackers helps ensure an organization&#39;s security. And we do this by following the layered security approach and implementing a layered defense.</p><h2 id="_1-2-2-user-education" tabindex="-1"><a class="header-anchor" href="#_1-2-2-user-education"><span>1.2.2 User Education</span></a></h2><p>Click one of the buttons to take you to that part of the video.</p><p>User Education 00:00-00:25 Employees are the single greatest threat to network security. They can wreak havoc on systems by unknowingly downloading viruses, accidentally divulging sensitive information, or storing authentication credentials in plain sight.</p><p>The most important thing you can do to protect against the inherent risks that employees pose is to properly educate them on the countless threats they face.</p><p>Employees are the Target 00:25-00:47 First, employees must understand that with the majority of attacks, they are the primary target. This is because attackers know that if they can compromise a single workstation, they can leverage that position and gain access to the entire network. The reason for this is it&#39;s much easier to trick an uneducated employee than it is to find a vulnerability in a monitored and protected system.</p><p>Understanding Attack Strategies 00:47-01:29 To effectively protect themselves, employees must be aware of the common tactics used by attackers.</p><p>One of the most common attacks is a phishing attack, where employees are lured into clicking a link or downloading an attachment from a seemingly legitimate email. Most often this email will have a call for urgency or seem to come from a person with authority in the organization.</p><p>Whatever the attack is, be sure to train your employees on how to identify the various attacks they will be the target of. Train them on how to spot suspicious emails, instant messages, downloads, attachments, and websites. In addition, be sure to have an effective password policy and clean desk policy in place and don&#39;t forget to enforce it.</p><p>Internal Threats 01:29-01:48 Employees must also be aware that security threats don&#39;t always originate from outside the company. For example, it&#39;s possible for a disgruntled employee to do quite a bit of damage to a network and organization. Because of this, be sure to train users on how to identify suspicious activity from other employees and how they can report it.</p><p>Inside Security Threats 01:48-02:03 And finally, employees must be aware of the company&#39;s security policies and computer usage policies.</p><p>These policies should be given to the employee during the onboarding process and they should know that it&#39;s their job to understand these policies and adhere to them.</p><p>Summary 02:03-02:34 Ensuring that your company&#39;s security policies and training are effective is your job. One of the best things you can do as a security professional is create a culture of security awareness in your organization. You want to educate employees on the common threats they will face and how they can protect against them.</p><p>And while it&#39;s impossible to make a system 100 percent secure, you can make your job a lot easier by properly educating the employees in your organization.</p><h2 id="_1-2-3-defense-planning-facts" tabindex="-1"><a class="header-anchor" href="#_1-2-3-defense-planning-facts"><span>1.2.3 Defense Planning Facts</span></a></h2><p>Layered security, or defense in depth, combines multiple security controls and defenses to create a cumulative effect.</p><p>This lesson covers the following topics:</p><ul><li>The seven layers of security</li><li>User education</li><li>Countermeasures</li></ul><h3 id="the-seven-layers-of-security" tabindex="-1"><a class="header-anchor" href="#the-seven-layers-of-security"><span>The Seven Layers of Security</span></a></h3><p>Layered security has seven layers. The following table describes each layer.</p>',44),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Security Layer "),e("th",{scope:"col",class:"fw-bold"}," Includes: ")])]),e("tbody",null,[e("tr",null,[e("td",null," Policies, procedures, and awareness "),e("td",null," User education; manageable network plans; and employee onboarding and off-boarding procedures. ")]),e("tr",null,[e("td",null," Physical "),e("td",null," Fences, door locks, mantraps, turnstiles, device locks, server cages, cameras, motion detectors, and environmental controls. ")]),e("tr",null,[e("td",null," Perimeter "),e("td",null," Firewalls using ACLs and securing the wireless network. ")]),e("tr",null,[e("td",null," Network "),e("td",null," The installation and configuration of switches and routers; implementation of VLANs; penetration testing; and virtualization use. ")]),e("tr",null,[e("td",null," Host "),e("td",null," Log management, OS hardening, patch implementation, patch management, auditing, anti-malware, and password attack prevention on each workstation, laptop, and mobile device. ")]),e("tr",null,[e("td",null," Application "),e("td",null," Authentication and authorization, user management, group policies, and web application security. ")]),e("tr",null,[e("td",null," Data "),e("td",null," Storing data properly, destroying data, classifying data, cryptography, and data transmission security. ")])])],-1),i('<p>It is important to know that each layer does not require its own security appliance or software. Layered security is not about specific mechanisms, but the method of protecting a network by employing various techniques at one time.</p><h3 id="user-education" tabindex="-1"><a class="header-anchor" href="#user-education"><span>User Education</span></a></h3><p>Employees are the single greatest threat to network security. Therefore, user education is very important. Look for ways to take the following actions:</p><ul><li>Make employees aware that they are the primary targets in most attacks.</li><li>Ensure employees understand that phishing attacks are one of the most common attacks directed at employees.</li><li>Train employees to identify email, instant messaging, download, and website attacks.</li><li>Enforce effective password policies, including a policy that prohibits writing down passwords.</li><li>Train employees to identify both internal and external threats.</li><li>Ensure that employees are aware of the company&#39;s security policies.</li></ul><h3 id="countermeasures" tabindex="-1"><a class="header-anchor" href="#countermeasures"><span>Countermeasures</span></a></h3><p>A countermeasure is a way to mitigate a potential risk. Countermeasures reduce the risk of a threat agent exploiting a vulnerability. An appropriate countermeasure:</p><ul><li>Provides a security solution to an identified problem.</li><li>Is not dependent on secrecy.</li><li>Is testable and verifiable.</li><li>Provides uniform or consistent protection for all assets and users.</li><li>Is independent of other safeguards.</li><li>Requires minimal human intervention.</li><li>Is tamper-proof.</li><li>Has overrides and fail-safe defaults.</li></ul><h2 id="_1-2-4section-quiz" tabindex="-1"><a class="header-anchor" href="#_1-2-4section-quiz"><span>1.2.4Section Quiz</span></a></h2><h3 id="exam-information" tabindex="-1"><a class="header-anchor" href="#exam-information"><span>Exam Information</span></a></h3><ul><li>No time limit</li><li>10 questions</li><li>80% passing score</li></ul><h3 id="exam-features" tabindex="-1"><a class="header-anchor" href="#exam-features"><span>Exam Features</span></a></h3><ul><li>Questions are presented in original order.</li><li>You can skip questions and return to previous questions.</li></ul><h3 id="after-finishing-the-exam" tabindex="-1"><a class="header-anchor" href="#after-finishing-the-exam"><span>After Finishing the Exam</span></a></h3><ul><li>You can view your score in the exam report.</li><li>You can receive feedback for all questions by clicking “View results by: Individual Responses” on the Exam Report screen.</li><li>If you did not feel comfortable with the concepts and tasks in the test, consider re-studying the prerequisite material.</li></ul><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test"><span>Test</span></a></h3><ol><li><p>The Application layer of the security model includes which of the following? (Select two.)</p><ol><li><p>Log management</p></li><li><p><u>Web application security</u></p></li><li><p>Environmental controls</p></li><li><p><u>User management</u></p></li><li><p>User education</p></li><li><p><strong>Explanation</strong></p><p>The Application layer includes <strong>user management</strong> and <strong>web application security</strong>.</p><p>The Policies, Procedures, and Awareness layer includes user education.</p><p>The Physical layer includes environmental controls.</p><p>The Host layer includes log management.</p></li></ol></li><li><p>When training your employees on how to identify various attacks, which of the following policies should you be sure to have and enforce? (Select two.)</p><ol><li><p><u>Password policies</u></p></li><li><p><u>Clean desk policies</u></p></li><li><p>Encryption policies</p></li><li><p>Usage policies</p></li><li><p>Group policies</p></li><li><p><strong>Explanation</strong></p><p>Be sure to have an effective password policy and clean desk policy in place, and don&#39;t forget to enforce them. Be sure to train your employees on how to identify all the various attacks that could target them. Train them on how to spot suspicious emails, instant messages, downloads, attachments, and websites.</p><p>Encryption policies should protect you in the event you experience a physical security breach. For example, if a hard drive were stolen, the thief wouldn&#39;t be able to access the information stored on it.</p><p>An Acceptable Use Policy (AUP) determines the rules for using a website or internet service.</p><p>You can use Windows group policies to administer your Windows systems.</p></li></ol></li><li><p>Which of the following reduces the risk of a threat agent being able to exploit a vulnerability?</p><ol><li><p>Implementation of VLANs</p></li><li><p><u>Countermeasures</u></p></li><li><p><s>Secure data transmissions</s></p></li><li><p>Manageable network plans</p></li><li><p><strong>Explanation</strong></p><p>A <u>countermeasure</u> is a means of mitigating potential risk. Countermeasures reduce the risk of a threat agent being able to exploit a vulnerability. An appropriate countermeasure:</p><ul><li>Must provide a security solution to an identified problem</li><li>Should not depend on secrecy</li><li>Must be testable and verifiable</li><li>Must provide uniform or consistent protection for all assets and users</li><li>Should be independent of other safeguards</li><li>Should require minimal human intervention</li><li>Should be tamper-proof</li><li>Should have overrides and fail-safe defaults</li></ul></li></ol></li><li><p>Which of the following items would be implemented at the Data layer of the security model?</p><ol><li><p>Authentication</p></li><li><p>Group policies</p></li><li><p><u>Cryptography</u></p></li><li><p>Auditing</p></li><li><p><strong>Explanation</strong></p><p>Cryptography is implemented at the Data layer.</p><p>Authentication, authorization, and group policies are implemented at the <strong>Application layer</strong>.</p><p>Auditing is implemented at the Host layer.</p></li></ol></li><li><p>Which of the following items would you secure in the Perimeter layer of the security model?</p><ol><li><p>VLANs</p></li><li><p><u>Firewalls</u></p></li><li><p>Routers</p></li><li><p>Switches</p></li><li><p><strong>Explanation</strong></p><p><strong>Firewalls</strong> using <strong>ACLs</strong> are secured in the <strong>Perimeter layer</strong>.</p><p>Switches, routers, and VLANs are secured in the <strong>Network layer.</strong></p></li></ol></li><li><p>Which of the following is the single greatest threat to network security?</p><ol><li><p>Email phishing</p></li><li><p>Weak passwords</p></li><li><p><u>Employees</u></p></li><li><p>Unsecure physical access to network resources</p></li><li><p><strong>Explanation</strong></p><p>Employees are the single greatest threat to network security. Therefore, user education is very important.</p><ul><li>Employees need to be aware that they are the primary targets in most attacks.</li><li>Phishing attacks are one of the most common attacks directed toward employees.</li><li>Employees should be able to identify attacks through email, instant messages, downloads, and websites.</li><li>Effective password policies should be enforced, and passwords should not be written down.</li><li>Employees should be able to identify both internal and external threats.</li><li>Employees need to be aware of the company&#39;s security policies.</li></ul></li></ol></li><li><p>Which of the following is a security approach that combines multiple security controls and defenses?</p><ol><li><p>Network security</p></li><li><p>Cumulative security</p></li><li><p><u>Layered security</u></p></li><li><p>Perimeter security</p></li><li><p>Countermeasure security</p></li><li><p><strong>Explanation</strong></p><p><strong>Layered security</strong>, sometimes called <strong>defense in depth security</strong>, is a security approach that combines multiple security controls and defenses to create a cumulative effect.</p><p><strong>Perimeter security</strong> includes <strong>firewalls</strong> with ACLs and a <strong>wireless network</strong>. <strong>Network security</strong> includes the <strong>installation</strong> and <strong>configuration</strong> of <strong>switches</strong> and routers, the implementation of VLANs, <strong>penetration testing</strong>, and the utilization of <strong>virtualization</strong>. A countermeasure is a means of mitigating a potential risk. Countermeasures reduce the risk of a threat agent exploiting a vulnerability.</p></li></ol></li><li><p>Which of the following items would be implemented at the Network layer of the security model?</p><ol><li><p>Wireless networks</p></li><li><p>Network plans</p></li><li><p>Firewalls using ACLs</p></li><li><p><strong><u>Penetration testing</u></strong></p></li><li><p>The installation and configuration of switches and routers, the implementation of VLANs, penetration testing, and virtualization are implemented at the Network layer.</p><p>Firewalls with ACLs and wireless networks are secured in the Perimeter layer.</p><p>Network plans are implemented at the Policies, Procedures, and Awareness layer.</p></li></ol></li><li><p>Which of the following is one of the MOST common attacks on employees?</p><ol><li><p>Password attack</p></li><li><p>DNS attack</p></li><li><p>Remote attack</p></li><li><p>Phishing attack</p></li><li><p><strong>Explanation</strong></p><p>Phishing attacks are one of the most common attacks directed at employees. In most cases, employees are lured into clicking a link or downloading an attachment from a seemingly legitimate email.</p></li></ol></li><li><p>The Policies, Procedures, and Awareness layer of the security model includes which of the following? (Select two.)</p><ol><li><p><u><strong>Employee onboarding</strong></u></p></li><li><p>Motion detectors</p></li><li><p>Server cages</p></li><li><p>Environmental controls</p></li><li><p><u><strong>User education</strong></u></p></li><li><p><strong>Explanation</strong></p><p>User education and employee onboarding and off-boarding procedures are included in the Policies, Procedures, and Awareness layer.</p><p>The Physical layer deals with server cages, motion detectors, and environmental controls.</p></li></ol></li></ol>',16)]))}const p=a(o,[["render",r],["__file","01.02DefensePlanning.html.vue"]]),u=JSON.parse('{"path":"/01/01.02DefensePlanning.html","title":"Section 1.2 Defense Planning","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 1.2 Defense Planning","description":"some description"},"headers":[{"level":2,"title":"1.2.1 The Layered Security Model","slug":"_1-2-1-the-layered-security-model","link":"#_1-2-1-the-layered-security-model","children":[]},{"level":2,"title":"1.2.2 User Education","slug":"_1-2-2-user-education","link":"#_1-2-2-user-education","children":[]},{"level":2,"title":"1.2.3 Defense Planning Facts","slug":"_1-2-3-defense-planning-facts","link":"#_1-2-3-defense-planning-facts","children":[{"level":3,"title":"The Seven Layers of Security","slug":"the-seven-layers-of-security","link":"#the-seven-layers-of-security","children":[]},{"level":3,"title":"User Education","slug":"user-education","link":"#user-education","children":[]},{"level":3,"title":"Countermeasures","slug":"countermeasures","link":"#countermeasures","children":[]}]},{"level":2,"title":"1.2.4Section Quiz","slug":"_1-2-4section-quiz","link":"#_1-2-4section-quiz","children":[{"level":3,"title":"Exam Information","slug":"exam-information","link":"#exam-information","children":[]},{"level":3,"title":"Exam Features","slug":"exam-features","link":"#exam-features","children":[]},{"level":3,"title":"After Finishing the Exam","slug":"after-finishing-the-exam","link":"#after-finishing-the-exam","children":[]},{"level":3,"title":"Test","slug":"test","link":"#test","children":[]}]}],"git":{"updatedTime":1735512302000},"filePathRelative":"01/01.02DefensePlanning.md"}');export{p as comp,u as data};
