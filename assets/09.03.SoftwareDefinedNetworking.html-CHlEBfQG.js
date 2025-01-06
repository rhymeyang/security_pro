import{_ as o,c as r,a as e,d as t,b as a,o as i}from"./app-BE6tyQZv.js";const s={};function l(c,n){return i(),r("div",null,n[0]||(n[0]=[e("p",null,"As you study this section, answer the following questions:",-1),e("ul",null,[e("li",null," Which three layers exist in the software-defined networking (SDN) architecture? "),e("li",null," What is the function of the controller? "),e("li",null," What technology allows network and security professionals to manage, control, and make changes to a network? "),e("li",null," What are the advantages of SDN? "),e("li",null," What are the disadvantages of SDN? ")],-1),e("p",null,"Key terms for this section include the following:",-1),e("table",{class:"terms"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Term "),e("th",{scope:"col",class:"fw-bold"}," Definition ")])]),e("tbody",null,[e("tr",null,[e("td",null,[t(" Software-defined "),e("br"),t(" networking ")]),e("td",null," An architecture that allows network and security professionals to manage, control, and make changes to a network. ")])])],-1),e("p",null,"This section helps you prepare for the following certification exam objectives:",-1),e("table",{class:"objectives"},[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," Exam "),e("th",{scope:"col",class:"fw-bold"}," Objective ")])]),e("tbody",null,[e("tr",null,[e("td",null," TestOut Security Pro "),e("td",null,[t(" 2.0 Physical and Network Security "),e("blockquote",null," 2.2 Harden Network Devices ")])]),e("tr",null,[e("td",null," CompTIA Security+ SY0-601 "),e("td",null,[e("p",null," 2.2. Summarize virtualization and cloud computing concepts. "),e("ul",null,[e("li",null,[t(" Infrastructure as code "),e("ul",null,[e("li",null," Software-defined networking (SDN) "),e("li",null," Software-defined visibility (SDV) ")])]),e("li",null," Transit gateway ")])])])])],-1),a('<h2 id="_9-3-1-software-defined-networking-basics" tabindex="-1"><a class="header-anchor" href="#_9-3-1-software-defined-networking-basics"><span>9.3.1 Software-Defined Networking Basics</span></a></h2><h3 id="software-defined-networking-basics-00-00-00-35" tabindex="-1"><a class="header-anchor" href="#software-defined-networking-basics-00-00-00-35"><span>Software-Defined Networking Basics 00:00-00:35</span></a></h3><p>Even though software-defined networking, also know as SDN, is a relatively new approach to networking, its use has grown exponentially the last few years.</p><p>The idea behind SDN is that network engineers should be able to use software to configure and intelligently control the network, rather than relying on the individual static configuration files that are located on each network device. By using SDN, network engineers are given the ability and flexibility to control their networks programmatically in order to accommodate rapidly changing environments.</p><h3 id="sdn-controller-00-35-02-00" tabindex="-1"><a class="header-anchor" href="#sdn-controller-00-35-02-00"><span>SDN Controller 00:35-02:00</span></a></h3><p>For example, let&#39;s say you work in a datacenter. In this datacenter, you need a lot of equipment to create a network—&quot;servers, switches, bridges, load balancers, cables, et cetera.</p><p>All of these devices are highly capable of making truly intelligent decisions within their individual capabilities. However, they require individual configurations on each of the devices. And if you need to make a change that affects multiple devices, then you need to manually make that change on each of these devices. In addition, making all of these devices work together perfectly can be a bit of a headache. For example, devices from different vendors might not work properly with each other.</p><p>With SDN, however, the configuration, management, and communication of all these devices is standardized and centralized. Software-defined networking takes all of these devices and combines them in much the same way a computer combines internal hardware components. It does this by using what&#39;s called a software-defined network controller.</p><p>An SDN controller functions a lot like traditional desktop operating system. It is able to inventory hardware components in the network, gather network statistics, make routing decisions based on gathered data, and facilitate communication between devices from different vendors. It can also be used to make wide-spread configuration changes on just one device. In essence, it&#39;s sort of like an operating system for the network.</p><h3 id="communication-02-00-03-12" tabindex="-1"><a class="header-anchor" href="#communication-02-00-03-12"><span>Communication 02:00-03:12</span></a></h3><p>For example, take our datacenter here. Let&#39;s say this datacenter suddenly gets an influx of user connections, and it needs to spin up new virtual machines to handle the load. Or perhaps it needs to offload some of these connections to another datacenter.</p><p>In a traditional networking environment, spinning up new VMs, routing connections to these VMs, and propagating these changes throughout the network could take too much time, and users wouldn&#39;t be able to use their resources.</p><p>With SDN, however, this influx of users is identified by the controller. The network administrator can then make configuration changes on the controller to redirect users to the new VMs. And because all these configurations are controlled at a central location—&quot;the controller—&quot;they are propagated out to the network almost instantaneously, allowing the users to have no interruption in their connections. When the influx of user connections returns to normal, the controller can then return the network to the state it was in before.</p><p>One of the primary advantages to using an SDN controller is that it can also act autonomously in situations like this. For example, if this scenario occurs again, the controller can remember the actions that were taken and perform them automatically.</p><h3 id="summary-03-12-03-34" tabindex="-1"><a class="header-anchor" href="#summary-03-12-03-34"><span>Summary 03:12-03:34</span></a></h3><p>So, it&#39;s pretty easy to see why software-defined networking is here to stay.</p><p>That&#39;s it for this lesson. In this lesson, we learned the basics of software-defined networking, including how it works and how the controller communicates with network devices and responds to events like an influx of user connections.</p><h2 id="_9-3-2-sdn-infrastructure-and-architecture" tabindex="-1"><a class="header-anchor" href="#_9-3-2-sdn-infrastructure-and-architecture"><span>9.3.2 SDN Infrastructure and Architecture</span></a></h2><h3 id="sdn-infrastructure-and-architecture-00-00-00-23" tabindex="-1"><a class="header-anchor" href="#sdn-infrastructure-and-architecture-00-00-00-23"><span>SDN Infrastructure and Architecture 00:00-00:23</span></a></h3><p>In this lesson, we&#39;re going to take a deeper look at software-defined networking, or SDN. We&#39;ll go over how software-defined networking can enhance your infrastructure to be more responsive, scalable, and secure.</p><p>In a previous lesson, we looked at how the SDN controller can respond to changing network conditions and make changes to data flow.</p><h3 id="sdn-layer-architecture-00-23-01-52" tabindex="-1"><a class="header-anchor" href="#sdn-layer-architecture-00-23-01-52"><span>SDN Layer Architecture 00:23-01:52</span></a></h3><p>Let&#39;s take a look at the underlying SDN architecture to see how this is done.</p><p>So, we have our controller right here. Remember, the controller itself is just a software platform that contains other applications—&quot;it&#39;s the network&#39;s operating system.</p><p>The SDN architecture consists of three layers. In the middle, there&#39;s the control layer. This is where the controller resides.</p><p>Above that is the application layer. This is where various applications reside. One of these could be an app that creates a network map of all the devices in your network. Another one could be a load balancer that stops and starts VMs as resource use increases.</p><p>The application layer and these various apps communicate with the control layer through what&#39;s called the northbound interface. These are sometimes called northbound APIs.</p><p>Below the control layer is the physical layer. This is where the physical networking devices reside. Even though it&#39;s called the physical layer, it&#39;s also where the virtual networking devices reside. The physical layer communicates to the control layer through the southbound interface. The individual networking devices use southbound APIs to communicate with the control plane, and vice versa.</p><p>Understand that this control layer, the control plane, removes that control plane from the physical networking devices. In traditional networks, each of these devices would have an integrated control plane located on the device. However, SDN removes this from the devices and creates a single control plane.</p><h3 id="controller-security-01-52-02-21" tabindex="-1"><a class="header-anchor" href="#controller-security-01-52-02-21"><span>Controller Security 01:52-02:21</span></a></h3><p>There&#39;s one last thing to be aware of regarding software-defined networks. As with the implementation of any new feature or technology, the transition comes with some inherent challenges.</p><p>For example, a centralized controller introduces a new target for attackers. Imagine a third-party application that uses the northbound API to gain complete knowledge of your entire network. That could be very dangerous. Therefore, it&#39;s important to be aware of proper security techniques and how these interfaces can be compromised.</p><h3 id="summary-02-21-02-38" tabindex="-1"><a class="header-anchor" href="#summary-02-21-02-38"><span>Summary 02:21-02:38</span></a></h3><p>That&#39;s it for this lesson. In this lesson, we took a deeper look into software-defined networking, or networking programmability. We also talked about some of the security concerns you need to be aware of with SDN.</p><h2 id="_9-3-3-sdn-facts" tabindex="-1"><a class="header-anchor" href="#_9-3-3-sdn-facts"><span>9.3.3 SDN Facts</span></a></h2><p>This lesson covers the following topics:</p><ul><li>Software defined networking (SDN)</li><li>SDN advantages and disadvantages</li></ul><h3 id="software-defined-networking-sdn" tabindex="-1"><a class="header-anchor" href="#software-defined-networking-sdn"><span>Software Defined Networking (SDN)</span></a></h3><p>Software defined networking (SDN) is a recent technology that allows network and security professionals to manage, control, and make changes to a network. The idea is that network engineers are able to use software to configure and intelligently control the network rather than relying on the individual static configuration files that are located on each network device.</p><p>SDN uses a controller to manage the devices. The controller is software that is able to inventory hardware components in the network, gather network statistics, make routing decisions based on gathered data, and facilitate communication between devices from different vendors. It can also be used to make wide-spread configuration changes on just one device.</p><p>The SDN architecture consists of three layers. The table below shows the functions:</p>',41),e("table",null,[e("thead",null,[e("tr",null,[e("th",{class_:"firstTableHeader",scope:"col",class:"fw-bold"}," SDN Layer "),e("th",{scope:"col",class:"fw-bold"}," Function ")])]),e("tbody",null,[e("tr",null,[e("td",null," Application layer "),e("td",null," The Application layer communicates with the Control layer through what is called the northbound interface. These are sometimes called northbound APIs. ")]),e("tr",null,[e("td",null," Control layer "),e("td",null," The Control layer receives its requests from the Application layer and then provides the Physical layer with its configuration and instructions. ")]),e("tr",null,[e("td",null," Physical layer "),e("td",null,[e("p",{align:"left"}," The Physical layer, also known as the Infrastructure layer, communicates to the Control layer through the southbound interface. The individual networking devices use southbound APIs to communicate with the control plane and vice versa. Even though this layer is called the Physical layer, it is where both physical and virtual network devices sit. ")])])])],-1),a('<h3 id="sdn-advantages-and-disadvantages" tabindex="-1"><a class="header-anchor" href="#sdn-advantages-and-disadvantages"><span>SDN Advantages and Disadvantages</span></a></h3><p>Some advantages of SDN include:</p><ul><li> Centralized management </li><li> More granular control </li><li> Lower overall cost and labor </li><li> Give new life to old networking hardware </li><li> Gather network information and statistics </li><li> Facilitate communication between hardware from different vendors </li></ul><p>Some disadvantages of SDN include:</p><ul><li> Is currently a new technology </li><li> Lack of vendor support </li><li> Standards are still being developed </li><li> Centralized control opens a new target for security threats </li></ul>',5)]))}const h=o(s,[["render",l],["__file","09.03.SoftwareDefinedNetworking.html.vue"]]),u=JSON.parse('{"path":"/09/09.03.SoftwareDefinedNetworking.html","title":"Section 9.3 Software-Defined Networking","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Section 9.3 Software-Defined Networking","description":"some description"},"headers":[{"level":2,"title":"9.3.1 Software-Defined Networking Basics","slug":"_9-3-1-software-defined-networking-basics","link":"#_9-3-1-software-defined-networking-basics","children":[{"level":3,"title":"Software-Defined Networking Basics 00:00-00:35","slug":"software-defined-networking-basics-00-00-00-35","link":"#software-defined-networking-basics-00-00-00-35","children":[]},{"level":3,"title":"SDN Controller 00:35-02:00","slug":"sdn-controller-00-35-02-00","link":"#sdn-controller-00-35-02-00","children":[]},{"level":3,"title":"Communication 02:00-03:12","slug":"communication-02-00-03-12","link":"#communication-02-00-03-12","children":[]},{"level":3,"title":"Summary 03:12-03:34","slug":"summary-03-12-03-34","link":"#summary-03-12-03-34","children":[]}]},{"level":2,"title":"9.3.2 SDN Infrastructure and Architecture","slug":"_9-3-2-sdn-infrastructure-and-architecture","link":"#_9-3-2-sdn-infrastructure-and-architecture","children":[{"level":3,"title":"SDN Infrastructure and Architecture 00:00-00:23","slug":"sdn-infrastructure-and-architecture-00-00-00-23","link":"#sdn-infrastructure-and-architecture-00-00-00-23","children":[]},{"level":3,"title":"SDN Layer Architecture 00:23-01:52","slug":"sdn-layer-architecture-00-23-01-52","link":"#sdn-layer-architecture-00-23-01-52","children":[]},{"level":3,"title":"Controller Security 01:52-02:21","slug":"controller-security-01-52-02-21","link":"#controller-security-01-52-02-21","children":[]},{"level":3,"title":"Summary 02:21-02:38","slug":"summary-02-21-02-38","link":"#summary-02-21-02-38","children":[]}]},{"level":2,"title":"9.3.3 SDN Facts","slug":"_9-3-3-sdn-facts","link":"#_9-3-3-sdn-facts","children":[{"level":3,"title":"Software Defined Networking (SDN)","slug":"software-defined-networking-sdn","link":"#software-defined-networking-sdn","children":[]},{"level":3,"title":"SDN Advantages and Disadvantages","slug":"sdn-advantages-and-disadvantages","link":"#sdn-advantages-and-disadvantages","children":[]}]}],"git":{"updatedTime":1736192501000},"filePathRelative":"09/09.03.SoftwareDefinedNetworking.md"}');export{h as comp,u as data};