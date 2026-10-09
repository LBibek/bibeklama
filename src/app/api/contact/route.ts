import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { Resend } from "resend";
import { ContactInquiryEmail } from "@/emails/ContactInquiryEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, organization, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailComponent = ContactInquiryEmail({
      name,
      email,
      subject: subject || "Business IT Consulting & Architecture",
      organization: organization || undefined,
      message,
      submittedAt: submissionTime,
      isReceipt: false,
    });

    // Render the React Email to standard HTML string
    const emailHtml = await render(emailComponent);

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || "bibeklamatamg@gmail.com";
    const sender = process.env.FROM_EMAIL || "Portfolio Inquiry <onboarding@resend.dev>";

    let resendResult = null;

    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
          from: sender,
          to: recipient,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${subject || "Consulting Request"} - ${name}`,
          html: emailHtml,
        });

        if (error) {
          console.warn("Resend API notification:", error);
        } else {
          resendResult = data;
        }
      } catch (err) {
        console.error("Error dispatching email with Resend:", err);
      }
    } else {
      console.log(
        `[React Email Notification Generated] To: ${recipient} | From: ${name} (${email}) | Subject: ${subject}`
      );
    }

    return NextResponse.json({
      success: true,
      delivered: !!resendResult,
      emailId: resendResult?.id || "react-email-rendered",
      timestamp: submissionTime,
      previewGenerated: true,
    });
  } catch (error: any) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
