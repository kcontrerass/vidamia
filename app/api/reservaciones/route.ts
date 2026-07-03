import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log("Forwarding reservation payload to webhook:", payload);

    const response = await fetch("https://workflow.aumenta.do/api/webhook/NdJ0CPPBsJeLfpWB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Read the response content as text
    const text = await response.text();
    console.log("Webhook response status:", response.status, "body:", text);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: `Webhook responded with status ${response.status}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: text });
  } catch (error: any) {
    console.error("Error in API route forwarding reservation:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
