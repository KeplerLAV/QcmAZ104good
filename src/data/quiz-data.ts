export const quizData = [
  {
    id: 1,
    question: "You need to deploy an Azure virtual machine. The solution must ensure that the virtual machine can be accessed from the internet over HTTPS. What should you configure?",
    options: [
      "A network security group (NSG) rule",
      "An application security group",
      "Azure Bastion",
      "A route table"
    ],
    correctAnswer: 0,
    explanation: "A network security group (NSG) contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, several types of Azure resources. You need to configure an NSG rule to allow HTTPS (port 443) traffic from the internet."
  },
  {
    id: 2,
    question: "You have an Azure subscription that contains a storage account. You need to ensure that users can access the storage account only from specific IP addresses. What should you configure?",
    options: [
      "Azure Active Directory conditional access",
      "Storage account firewall",
      "Network security group",
      "Azure Private Link"
    ],
    correctAnswer: 1,
    explanation: "The storage account firewall allows you to restrict access to your storage account from specific IP addresses or IP ranges. This is the most direct way to limit access based on source IP addresses."
  },
  {
    id: 3,
    question: "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. What should you do?",
    options: [
      "Deploy the virtual machines to a single availability zone",
      "Deploy the virtual machines to two or more availability zones",
      "Deploy the virtual machines to a scale set",
      "Deploy the virtual machines to two or more resource groups"
    ],
    correctAnswer: 1,
    explanation: "Availability zones are unique physical locations within an Azure region. Each zone is made up of one or more data centers equipped with independent power, cooling, and networking. Deploying VMs across multiple availability zones protects applications from data center-level failures."
  },
  {
    id: 4,
    question: "You have an Azure virtual machine named VM1. You need to ensure that VM1 can resolve the IP addresses of the servers on the on-premises network. What should you configure on VM1?",
    options: [
      "A network security group",
      "A custom DNS server",
      "Azure DNS",
      "A route table"
    ],
    correctAnswer: 1,
    explanation: "To resolve on-premises server names from Azure VMs, you need to configure a custom DNS server on the virtual network that can forward queries to your on-premises DNS infrastructure. Azure DNS only resolves Azure resources by default."
  },
  {
    id: 5,
    question: "You need to be notified when the CPU utilization of an Azure virtual machine exceeds 80 percent for 10 minutes. What should you create?",
    options: [
      "An alert rule",
      "An action group",
      "A diagnostic setting",
      "A runbook"
    ],
    correctAnswer: 0,
    explanation: "An alert rule in Azure Monitor defines the conditions that trigger an alert. You can create an alert rule that monitors CPU percentage and triggers when it exceeds 80% for a sustained period. Action groups define what happens when an alert is triggered."
  },
  {
    id: 6,
    question: "You have an Azure subscription that contains 100 virtual machines. You need to view the Azure Monitor metrics for all virtual machines from a single pane. What should you use?",
    options: [
      "Azure Monitor workbooks",
      "Azure Advisor",
      "Azure Service Health",
      "Log Analytics workspace"
    ],
    correctAnswer: 0,
    explanation: "Azure Monitor workbooks provide a flexible canvas for data analysis and the creation of rich visual reports. They allow you to combine multiple data sources and visualizations into a single pane, making it ideal for viewing metrics across multiple VMs."
  },
  {
    id: 7,
    question: "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains two subnets named Subnet1 and Subnet2. You need to ensure that virtual machines in Subnet1 can communicate with virtual machines in Subnet2, but virtual machines in Subnet2 cannot initiate communication with virtual machines in Subnet1. What should you configure?",
    options: [
      "Network security group rules",
      "Azure Firewall",
      "User-defined routes",
      "Service endpoints"
    ],
    correctAnswer: 0,
    explanation: "Network security group (NSG) rules can control traffic flow between subnets. You can configure rules on Subnet2's NSG to deny outbound traffic to Subnet1, while allowing inbound traffic from Subnet1. This creates asymmetric communication as required."
  },
  {
    id: 8,
    question: "You have an Azure Storage account that contains 1000 blobs. You need to ensure that all blobs are moved to the Cool access tier after 30 days. What should you configure?",
    options: [
      "A lifecycle management policy",
      "Object replication",
      "Blob inventory",
      "Soft delete"
    ],
    correctAnswer: 0,
    explanation: "Azure Storage lifecycle management offers a rule-based policy that you can use to transition blob data to cooler tiers or delete data at the end of the data lifecycle. You can create a policy to automatically move blobs to the Cool tier after 30 days."
  },
  {
    id: 9,
    question: "You plan to deploy an Azure web app. The web app will be accessed by users worldwide and must meet the following requirements: Support automatic scaling, minimize latency, and provide high availability. What should you use?",
    options: [
      "Azure Front Door",
      "Azure Application Gateway",
      "Azure Load Balancer",
      "Azure Traffic Manager"
    ],
    correctAnswer: 0,
    explanation: "Azure Front Door is a global, scalable entry point that uses Microsoft's global edge network to create fast, secure, and widely scalable web applications. It provides global load balancing, SSL offload, and automatic failover with low latency routing to the closest backend."
  },
  {
    id: 10,
    question: "You have an Azure subscription that contains a resource group named RG1. RG1 contains a virtual machine named VM1. You need to ensure that VM1 is deleted automatically if it is stopped for more than 24 hours. What should you use?",
    options: [
      "Azure Automation runbook with a schedule",
      "Azure Policy",
      "Azure Logic Apps",
      "Azure Monitor action group"
    ],
    correctAnswer: 0,
    explanation: "Azure Automation runbooks can contain PowerShell or Python scripts to perform automated tasks. You can create a scheduled runbook that checks for VMs in a stopped state for more than 24 hours and deletes them. This provides the most flexible and reliable solution for this requirement."
  },
  {
    id: 11,
    question: "You need to deploy an Azure resource by using an Azure Resource Manager (ARM) template. What format should you use for the template?",
    options: [
      "JSON",
      "XML",
      "YAML",
      "CSV"
    ],
    correctAnswer: 0,
    explanation: "Azure Resource Manager templates use JSON (JavaScript Object Notation) format. ARM templates are declarative JSON files that define the infrastructure and configuration for your Azure deployment."
  },
  {
    id: 12,
    question: "You have an Azure subscription that contains a virtual machine named VM1. VM1 is deployed from a custom image. You need to ensure that VM1 is automatically updated with the latest security updates. What should you enable?",
    options: [
      "Azure Update Management",
      "Azure Security Center",
      "Azure Backup",
      "Azure Site Recovery"
    ],
    correctAnswer: 0,
    explanation: "Azure Update Management (now part of Azure Automation) provides a way to manage and install operating system updates for Windows and Linux virtual machines deployed in Azure, on-premises, or in other cloud providers."
  },
  {
    id: 13,
    question: "You have an Azure subscription that contains a virtual network named VNet1. You need to deploy Azure Bastion to VNet1. What should you create first?",
    options: [
      "A subnet named AzureBastionSubnet",
      "A network security group",
      "A public IP address",
      "A virtual network gateway"
    ],
    correctAnswer: 0,
    explanation: "Azure Bastion requires a dedicated subnet named 'AzureBastionSubnet' with a minimum size of /27 or larger. This subnet must be created before deploying Azure Bastion to the virtual network."
  },
  {
    id: 14,
    question: "You have an Azure subscription that contains an Azure key vault named Vault1. You need to ensure that applications can use Vault1 to get secrets without requiring the applications to authenticate to Azure Active Directory. What should you configure?",
    options: [
      "A managed identity",
      "A service principal",
      "An access policy",
      "A shared access signature"
    ],
    correctAnswer: 0,
    explanation: "Managed identities provide Azure services with an automatically managed identity in Azure AD. Your applications can use managed identities to access Key Vault without needing to manage credentials or authenticate explicitly."
  },
  {
    id: 15,
    question: "You have an Azure subscription that contains a storage account. You need to prevent the deletion of the storage account. What should you configure?",
    options: [
      "A resource lock",
      "Azure Policy",
      "Role-based access control (RBAC)",
      "A lifecycle management policy"
    ],
    correctAnswer: 0,
    explanation: "A resource lock prevents accidental deletion or modification of Azure resources. A 'CanNotDelete' lock allows all operations but prevents deletion, which is exactly what's needed to protect the storage account from accidental deletion."
  }
]
