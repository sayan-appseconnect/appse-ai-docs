---
title: "On-Premise Agent Setup"
slug: /platform/key-concepts/on-premise-agent/on-premise-agent-setup
description: Step-by-step guide to create, download, and install an On-Prem Agent in appse ai for securely connecting on-premise systems and applications.
---

## Setup and install an On-Prem Agent

The On-Prem Agent in appse ai enables secure communication between your on-premise systems and the appse ai platform.

With the On-Prem Agent, you can:

- Securely connect on-premise applications
- Execute workflows against on-premise environments
- Monitor and manage agent connectivity directly from appse ai

---

### Prerequisites

Before creating an On-Prem Agent, ensure that:

- You have access to the appse ai portal
- Your organization has permission to create On-Prem Agents
- Required on-prem plugins are available for your organization
- The target machine has internet connectivity

---

### Step 1: Access the On-Site Connector

- Log in to the appse ai portal
- Click **On-Site Connector** from the left navigation menu

<img src="/img/platform/key-concepts/key-concepts/on-premise-agent/navigate-on-site-connector.png" alt="Navigate to On-Site Connector" width="700"/>

---

### Step 2: Open the Agent Creation Screen

The **On-Prem Agents** page displays all available agents for your organization.

If no agents are available, the empty state screen is displayed.

- Click **Create First Agent** or **Create Agent**

<img src="/img/platform/key-concepts/on-premise-agent/click-create-agent.png" alt="On-Prem Agents Page" width="700"/>

---

### Step 3: Configure the Agent

In the **Create On-Prem Agent** popup:

- Enter a unique **Agent Name**

<img src="/img/platform/key-concepts/on-premise-agent/provide-agent-name.png" alt="Provide Agent Name" width="700"/>

- Click **Create Agent**

<img src="/img/platform/key-concepts/on-premise-agent/create-agent.png" alt="Create On-Prem Agent" width="700"/>

#### Required Fields

| Field | Description |
|---|---|
| Agent Name | Unique name used to identify the On-Prem Agent |

#### Example

```text
onprem-agent
```

:::info
All available on-prem plugins are automatically included in the generated installation bundle.
:::

---

### Step 4: Complete Agent Registration

Once the agent is created successfully:

- The agent is registered in your organization
- A success confirmation popup is displayed

<img src="/img/platform/key-concepts/on-premise-agent/success-pop-up.png" alt="Agent Created Successfully" width="700" height="400"/>

- Click **Done** to continue

---

### Step 5: View the Created Agent

After closing the popup, the newly created agent is displayed in the On-Site Connector page.

- The agent status is displayed as **Offline**

<img src="/img/platform/key-concepts/on-premise-agent/offline-status.png" alt="Offline Agent Status" width="700"/>

---

### Step 6: Download the Agent Bundle

Once the agent is created, the **Download Bundle** option becomes available.

- Click **Download Bundle**

<img src="/img/platform/key-concepts/on-premise-agent/download-bundle.png" alt="Download Agent Bundle" width="700"/>

The bundle status is displayed as **Preparing...**

<img src="/img/platform/key-concepts/on-premise-agent/preparing-state.png" alt="Preparing Agent Bundle" width="700"/>

:::info
Bundle generation may take a few moments depending on plugin configuration and package size.
:::

The ZIP package is downloaded to your local machine.

---

### Step 7: Open the Downloaded Package

- Navigate to the folder where the ZIP package was downloaded

<img src="/img/platform/key-concepts/on-premise-agent/zip-folder.png" alt="Downloaded ZIP Package" width="700"/>

---

### Step 8: Extract the ZIP Package

- Right-click the ZIP package
- Click **Extract All**

<img src="/img/platform/key-concepts/on-premise-agent/extract-file.png" alt="Extract ZIP Package" width="700" height="400"/>

- Choose the extraction location
- Click **Extract**

<img src="/img/platform/key-concepts/on-premise-agent/extract-file-to-destination.png" alt="Select Extraction Location" width="700" height="400"/>

---

### Step 9: Open the Installer Directory

- Open the extracted folder
- Navigate to the **installer** directory

<img src="/img/platform/key-concepts/on-premise-agent/installer.png" alt="Installer Directory" width="700" height="400"/>

---

### Step 10: Launch the Installer

- Locate the **appseai** application file inside the installer folder
- Right-click the file
- Select **Run as administrator**

<img src="/img/platform/key-concepts/on-premise-agent/run-as-admin.png" alt="Run Installer as Administrator" width="700" height="400"/>

#### Windows Security Prompt

After selecting **Run as administrator**, Windows Defender SmartScreen may display a security warning for the installer.

- Click **More info**

<img src="/img/platform/key-concepts/on-premise-agent/windows-protected-your-pc.png" alt="Windows Protected Your PC Warning" width="700" height="400"/>

- Click **Run anyway** to continue the installation

<img src="/img/platform/key-concepts/on-premise-agent/run-anyway.png" alt="Run Anyway Option" width="700" height="400"/>

:::info
This prompt may appear because the installer is being executed from a locally downloaded package.
:::

#### Windows User Account Control

Windows may display a **User Account Control (UAC)** prompt asking for permission to allow the application to make changes to the device.

- Click **Yes** to continue the installation

:::info
Administrator permission is required to install and configure the On-Prem Agent services on the machine.
:::

---

### Step 11: Accept License Terms

- Enable **I agree to the license terms and conditions**

<img src="/img/platform/key-concepts/on-premise-agent/terms-and-condition.png" alt="Accept License Terms" width="700" height="400"/>

- Click **Install**

<img src="/img/platform/key-concepts/on-premise-agent/install.png" alt="Install On-Prem Agent" width="700" height="400"/>

---

### Step 12: Wait for Installation

During installation:

- The Windows service is created
- Required plugins are configured automatically
- Installation progress is displayed on the screen

<img src="/img/platform/key-concepts/on-premise-agent/processing.png" alt="Installing On-Prem Agent" width="700" height="400"/>

:::info
Installation duration may vary depending on machine configuration and plugin setup.
:::

---

### Step 13: Complete the Installation

After the installation is completed successfully:

- Click **Close** to finish the installation process

<img src="/img/platform/key-concepts/on-premise-agent/installed.png" alt="Installation Completed Successfully" width="700" height="400"/>

---

### Step 14: Verify Agent Connectivity

- Return to the **On-Prem Agents** page in appse ai

Once the installed agent successfully connects to the platform, the status automatically changes from **Offline** to **Online**.

<img src="/img/platform/key-concepts/on-premise-agent/agent-online-status.png" alt="Online Agent Status" width="700"/>

:::info
The Online status is reflected automatically after successful agent registration and connectivity.
:::

---

## Supported On-Prem Applications

The On-Prem Agent supports connectivity for the following applications and systems.

| Application | Documentation |
|---|---|
| SAP Business One DIS | [View Documentation](/app-integrations/sap-business-one-dis/) |

---

## Agent Status Reference

| Status | Description |
|---|---|
| Offline | Agent is created but not connected |
| Preparing | Installation bundle is being generated |
| Online | Agent is installed and connected successfully |

---

## Additional Information

- Multiple On-Premise Agents can be created within the same organization
- Each agent has its own downloadable installation bundle
- Plugin dependencies are automatically included in the generated package

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)

