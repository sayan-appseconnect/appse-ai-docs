---
title: Active Flows
slug: /platform/billing/active-flows
sidebar_position: 2
description: Learn what Active Flows are, how the concurrent flow limit works, and what happens when the limit is reached.
---

# Active Flows

**Active Flows** represent the number of workflows that can be enabled and running concurrently at any given time. Each plan includes a fixed concurrent flow limit — once that limit is reached, you cannot activate additional workflows until you either deactivate an existing one or purchase more flows.

---

## Flow Limits by Plan

| Plan | Active Flows Included |
|------|-----------------------|
| Free | Not included — workflow execution requires a paid plan |
| Starter | 3 flows |
| Growth | 5 flows |
| Enterprise | 5 flows |

You can monitor your current active flow usage at any time by navigating to **Billing → Usage → Active Flows**.

<br/>

<img src="\img\platform\billing\active-flows-usage.png" alt="Active flows usage screen" width="700"/>

---

## What Happens When the Flow Limit Is Reached

:::warning
When your active flow limit is reached, **you will not be able to activate any additional workflows**. Existing active workflows continue to run unaffected.
:::

Attempting to activate a workflow beyond your plan's limit displays the following prompt:

> *"Your plan has reached the active Flow limit. Buy more Flows to keep activating workflows."*

<br/>

<img src="\img\platform\billing\flow-limit-reached.png" alt="Flow limit reached modal" width="500"/>

To activate a new workflow, you can either:
- **Deactivate** an existing active workflow to free up a slot, or
- **Buy more flows** to increase your concurrent limit.

---

## Buying Extra Flows

You can increase your concurrent flow limit at any time by purchasing additional flows.

### Pricing

Extra flows are priced at **$10 per flow per month**, billed annually at **$120 per flow per year**.

- **Due today**: The charge is prorated based on the number of months remaining in your current billing period.
- **From next renewal**: The extra flows are permanently added to your plan and billed as part of your annual subscription going forward.

:::info
Unlike AI Credit packs, extra flows are a **recurring add-on** — not a one-time purchase. Once bought, they are included in your plan at every renewal until removed.
:::

### How to Buy Extra Flows

1. Navigate to **Billing → Usage** in the platform.
2. Scroll to the **Active Flows** section and click **Buy more**.
3. Enter the number of additional flows you need.
4. Review the **Due Today** and **From Next Renewal** cost summary.
5. Agree to the Terms & Conditions and click **Proceed to Checkout**.

<br/>

<img src="\img\platform\billing\buy-extra-flows.png" alt="Buy extra flows modal showing prorated pricing and renewal cost" width="700"/>

---

## Need Help?

If you have questions about your flow limits or billing, reach out to our support team at hello@appse.ai
