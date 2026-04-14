---
slug: /platform/key-concepts/nodes/built-in/base64-decode
title: Base64 Decode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Base64 Decode node in APPSe AI is a built-in node that allows you to convert a Base64 string back into its original format. Many applications and APIs return files in a Base64 string format. This node helps decode that data into a text format that can be used in other nodes in your workflow.


1. From the selection screen, choose the Base64 Decode node.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\selection-screen.png" alt="selection screen" width="700"/>

2. Connect it with a node that provides a Base64 string output.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\select-a-desired-node.png" alt="select a desired node" width="700"/>

## Configuration

### Type

Select the type of file you want to decode.

<Tabs>
<TabItem value="pdf" label="PDF" default>

## Steps to Use the Base64 Node for PDF Files

3. Under Type, select the format of the file you want to decode.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\select-type.jpg" alt="select type" width="700"/>

### Base64 String
Enter or map the field containing the Base64-encoded string that you want to decode. Make sure the string is properly encoded — invalid or incomplete Base64 data will result in an error.

4. In the Base64 String field, enter or map the field that contains the Base64 string.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\continue.jpg" alt="continue" width="700"/>

:::note

The Base64 node currently supports only the PDF files that are **NOT** protected by a password.

:::

#### Example Input

Use a valid Base64 string for the selected PDF file type (sample shown below).

<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\Input of PDF.jpg" width="700" />


5. Click **Continue**, then run the node to decode the data.

6. After execution, the decoded content will be available as output for the next node in your workflow.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\PDF-Output.jpg" alt="output" width="700"/>

----------------

</TabItem>
<TabItem value="image" label="Image">

## Steps to Use the Base64 Node for Image Files

3. Under Type, select the format of the file you want to decode.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\Base64N-IMGSLCT3.jpg" width="700" />

### Base64 String
Enter or map the field containing the Base64-encoded string that you want to decode. Make sure the string is properly encoded — invalid or incomplete Base64 data will result in an error.

4. In the Base64 String field, enter or map the field that contains the Base64 string.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\Base64N-CNTNUE5.jpg" width="700" />

:::note
The Base64 node supports the following image file types: **PNG, JPG, JPEG, GIF, BMP, WEBP**.

:::

#### Example Input

Use a valid Base64 string for the selected Image file type (sample shown below).

<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\Image-Input.jpg" width="700" />

5. Click **Continue**, then run the node to decode the data.

6. After execution, the decoded content will be available as output for the next node in your workflow.
<img src="\img\platform\key-concepts\nodes\built-in\base64-decode\Base64N-Result6.jpg" width="700" />

</TabItem>
</Tabs>


