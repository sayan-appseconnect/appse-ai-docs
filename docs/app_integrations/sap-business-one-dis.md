---
title: "SAP Business One DIS"
description: Step-by-step guide to set up SAP Business One DIS credentials for appse ai integration
slug: /app-integrations/sap-business-one-dis
---

SAP Business One DIS is an on-premise integration for SAP Business One that connects your local SAP instance to appse ai through a dedicated On-Prem agent.

:::info

- The **On-Prem agent** must be active and reachable for the remaining fields to load and for the credential to connect successfully.
- Make sure the selected agent has access to the SAP Business One environment and the license server.

:::

## Setup Credential

To configure the credential, follow the steps below.

### 1. Select an active On-prem agent

- Use the **On-Prem Agent** dropdown to choose an active On-Prem agent.
- Only after selecting an active agent will the remaining configuration fields appear.

### 2. Provide connection details

Fill in the following required fields once the agent is selected:

| Field | Description |
|------|-------------|
| Connection Name | A name for this SAP Business One DIS connection to be identified in appse ai. |
| SAP Server Address | The hostname or IP address of the SAP Business One server. |
| Company Database | The SAP Business One company database name (for example, `SBODemoUS`). |
| Username | SAP Business One username with access to the target company. |
| Password | Password for the SAP Business One user account. |
| License Server | The address and port of your SAP license server (for example, `sapserver:30000`). |
| Database Type | The database platform used by SAP Business One (for example, Microsoft SQL 2019). |

### 3. Save the credential

- After all required fields are filled, click Save to store the credential.
- If the connection is valid, the credential will be saved and displayed with a green tick
- User will able to use the credential in workflows as per need.

## More Details

### SAP Server Address

- The hostname or IP of the machine running the SAP Business One server components.
- Navigate to choose company, select your company and find the SAP Server Address in the Current Server section. Example: `sapserver.company.local` or `192.0.2.10`.

<img src="\img\credentials\sap-business-one-dis\serveraddress.png" alt="find server address" width="700"/>

### Company Database

- The company database in your DBMS (for example, `SBODemoUS`).
- Navigate to choose company, select your company and find Company Database in the Database section.

<img src="\img\credentials\sap-business-one-dis\database.png" alt="find company database" width="700"/>

### Username

- This is the SAP Business One user account with access to the target company.

<img src="\img\credentials\sap-business-one-dis\username.png" alt="username" width="700"/>

### Password

- The password for the SAP Business One user account used.

<img src="\img\credentials\sap-business-one-dis\password.png" alt="password" width="700"/>

### License Server

- The address (and port) of the SAP License Server that issue licenses to SAP Business One clients. Confirm this by respective SAP admin.

<img src="\img\credentials\sap-business-one-dis\serveraddress.png" alt="licenseserver" width="700"/>

### Database Type

- The database platform used for SAP Business One (for example, `Microsoft SQL 2019`).

- Supported options (select the one matching your installation):

`Microsoft SQL (Legacy)`,`Microsoft SQL 2012`,`Microsoft SQL 2014`,`Microsoft SQL 2016`,`Microsoft SQL 2017`,`Microsoft SQL 2019`,`SAP HANA`

<img src="\img\credentials\sap-business-one-dis\databasetype.png" alt="licenseserver" width="700"/>

## Actions

The SAP Business One DIS integration currently supports the following actions. Use these actions in workflows to create, update, query, and retrieve SAP Business One records via DIS.

| Action | Description |
| --- | --- |
| **Create business partner** | Creates a new business partner record in SAP Business One. Use this to add customers, vendors, or other partner entities. |
| **Update business partner** | Updates an existing business partner record with the latest details such as contact information, address, or classification. |
| **Create item** | Creates a new item in the SAP Business One inventory catalog. Useful for adding products or materials. |
| **Update item** | Updates an existing item record with new pricing, stock levels, descriptions, or other metadata. |
| **Create order** | Creates a new order document in SAP Business One, such as a sales order or purchase order depending on the configured document type. |
| **Execute query** | Runs a custom DIS query against SAP Business One data and returns the results for use in workflow logic or validation. |
| **Get record by key** | Retrieves a single SAP Business One record by its primary key for lookup, validation, or conditional workflow decisions. Supported modules: `oBusinessPartners` (Business Partner), `oItems` (Item), `oOrders` (Sales Order), `oInvoices` (Invoice A/R), `oDeliveryNotes` (Delivery Note), `oQuotations` (Quotation), `oCreditNotes` (Credit Note), `oPurchaseOrders` (Purchase Order), `oJournalEntries` (Journal Entry), `oIncomingPayments` (Incoming Payment). |

## Triggers

The SAP Business One DIS integration currently supports the following triggers. Use these triggers to start workflows when data changes occur in SAP Business One.

| Trigger | Description |
| --- | --- |
| **Item inventory updated (OnHand)** | Fetches data records when an item on-hand quantity changes in SAP Business One. |
| **Item price updated** | Fetches data records when an item price is updated. |
| **New business partners created** | Fetches data records when new business partners are created. |
| **New delivery notes created** | Fetches data records when new delivery notes are created. |
| **New items created** | Fetches data records when new items are created. |

:::info
## Troubleshoot
If the following error is displayed for SAP DIS

<img src="\img\credentials\sap-business-one-dis\quickfix.png" alt="password" width="700"/>

Delete the file at location `C:\Windows\Temp\SM_OBS_DLL\1000120` from your local system and try again.
:::

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)