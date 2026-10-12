"use client";

import React, { useState } from "react";
import {
  QrCode,
  CreditCard,
  Heart,
  GraduationCap,
  Sparkles,
  Check,
  Copy,
  ArrowRight,
  Send,
  Building,
  CheckCircle2,
  ShieldCheck,
  Download,
  ExternalLink,
  Loader2,
  Info,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";

type PaymentPurpose = "scholarship" | "workshop";

interface WorkshopOption {
  id: string;
  title: string;
  fee: string;
  badge: string;
}

const WORKSHOP_OPTIONS: WorkshopOption[] = [
  {
    id: "nextjs",
    title: "Next.js Full-Stack Mastery",
    fee: "NRS. 25,000",
    badge: "Discount Active (Save NRS. 5,000)",
  },
  {
    id: "dotnet",
    title: "Enterprise .NET Core & Web APIs",
    fee: "NRS. 25,000",
    badge: "Discount Active (Save NRS. 5,000)",
  },
  {
    id: "genai",
    title: "Prompt Engineering & Generative AI",
    fee: "NRS. 25,000",
    badge: "Discount Active (Save NRS. 5,000)",
  },
];

export function PaymentSection() {
  const [purpose, setPurpose] = useState<PaymentPurpose>("scholarship");
  const [selectedWorkshop, setSelectedWorkshop] = useState(WORKSHOP_OPTIONS[0].id);
  const [customAmount, setCustomAmount] = useState("");
  const [scholarshipTier, setScholarshipTier] = useState("5000");

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [receiptData, setReceiptData] = useState<{
    name: string;
    email: string;
    phone?: string;
    purpose: string;
    details: string;
    amount: string;
    transactionId: string;
    timestamp?: string;
  } | null>(null);

  const [copiedAccount, setCopiedAccount] = useState(false);

  const bankDetails = {
    bankName: "NIC ASIA Bank",
    accountName: "Bibek Lama",
    app: "NIC ASIA MoBank / Fonepay Network",
    remarksGuide: purpose === "scholarship" ? "Scholarship Support" : "Workshop Enrollment",
  };

  const getAmountString = () => {
    if (purpose === "workshop") {
      const ws = WORKSHOP_OPTIONS.find((w) => w.id === selectedWorkshop);
      return ws ? ws.fee : "NRS. 25,000";
    }
    if (scholarshipTier === "custom") {
      return customAmount ? `NRS. ${Number(customAmount).toLocaleString()}` : "Custom Contribution";
    }
    return `NRS. ${Number(scholarshipTier).toLocaleString()}`;
  };

  const getDetailsString = () => {
    if (purpose === "workshop") {
      const ws = WORKSHOP_OPTIONS.find((w) => w.id === selectedWorkshop);
      return `Workshop: ${ws?.title || "Cohort Training"} (${ws?.fee})`;
    }
    return `Tech Scholarship Fund Contribution: ${getAmountString()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId.trim()) {
      setErrorMessage("Please enter your transaction reference ID from NIC ASIA MoBank or mobile banking.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const subjectString =
      purpose === "workshop"
        ? `[Payment Verification] Workshop Enrollment - ${WORKSHOP_OPTIONS.find((w) => w.id === selectedWorkshop)?.title}`
        : `[Payment Verification] Tech Scholarship Contribution - ${getAmountString()}`;

    const detailedMessage = `=== PAYMENT SUBMISSION RECORD ===
Purpose: ${purpose === "workshop" ? "Student Workshop Booking" : "Tech Scholarship Fund Contribution"}
Reference / Transaction ID: ${transactionId.trim()}
Amount: ${getAmountString()}
Payment Date: ${paymentDate || "Today"}
Program / Item: ${getDetailsString()}
Phone / WhatsApp: ${phone || "Not provided"}
Remarks / Notes: ${notes || "None provided"}
=================================`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          subject: subjectString,
          organization: purpose === "workshop" ? "Student / Trainee" : "Scholarship Supporter",
          message: detailedMessage,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit verification. Please verify details or notify on WhatsApp.");
      }

      setReceiptData({
        name: fullName,
        email,
        phone,
        purpose: purpose === "workshop" ? "Student Workshop Class Booking" : "Tech Scholarship Contribution",
        details: getDetailsString(),
        amount: getAmountString(),
        transactionId: transactionId.trim(),
        timestamp: data.timestamp,
      });

      setSubmitted(true);
      // Reset form fields
      setTransactionId("");
      setNotes("");
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please reach out via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="payment" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            <QrCode className="w-3.5 h-3.5" />
            <span>NIC ASIA MoBank & Fonepay Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Digital Payment & Verification
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Scan the official bank QR to enroll in hands-on student workshops or contribute directly to the Need-Based Tech Scholarship fund. Enter your transaction ID below for immediate confirmation.
          </p>

          {/* Toggle Tab Pill */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-white/10 max-w-md w-full sm:w-auto shadow-inner">
            <button
              type="button"
              onClick={() => {
                setPurpose("scholarship");
                setSubmitted(false);
              }}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                purpose === "scholarship"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Tech Scholarship Fund</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setPurpose("workshop");
                setSubmitted(false);
              }}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                purpose === "workshop"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Workshop Classes</span>
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Left QR Display & Right Transaction Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: QR Scan Card & MoBank Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>Instant Scan & Pay</span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Nepal Fonepay Ready
                </span>
              </div>

              {/* QR Code Presentation Box */}
              <div className="relative mx-auto my-3 p-4 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center border-4 border-neutral-800 max-w-[280px] sm:max-w-[320px]">
                <img
                  src="/payment-qr.jpg"
                  alt="NIC ASIA MoBank QR Code for Bibek Lama"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="mt-3 text-center">
                  <div className="text-[11px] font-bold text-neutral-900 tracking-tight">
                    Scan via any Mobile Banking / eSewa / Khalti / MoBank
                  </div>
                  <div className="text-[9px] font-mono text-neutral-600">
                    Merchant / Personal: Bibek Lama
                  </div>
                </div>
              </div>

              {/* Bank Details Table */}
              <div className="mt-6 space-y-2.5 text-xs border-t border-white/5 pt-5">
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">Bank & System:</span>
                  <span className="font-semibold text-white">{bankDetails.bankName} (MoBank)</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">Account Holder:</span>
                  <span className="font-semibold text-white">{bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">Recommended Remarks:</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 font-mono text-[11px]">
                    {purpose === "scholarship" ? "Scholarship Fund" : "Workshop Class"}
                  </span>
                </div>
              </div>

              {/* Security Banner */}
              <div className="mt-6 p-3.5 rounded-xl bg-neutral-950 border border-white/5 flex items-start gap-3 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  All payments are verified directly by Bibek Lama and the Going Genius finance desk. An official confirmation email and WhatsApp message are generated upon submission.
                </span>
              </div>

              {/* WhatsApp Help Button */}
              <div className="mt-4">
                <a
                  href={`https://wa.me/9779768527869?text=${encodeURIComponent(
                    `Hello Bibek, I have scanned your NIC ASIA QR code for ${purpose === "scholarship" ? "the Tech Scholarship fund" : "booking workshop classes"}. Inquiring for assistance.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Assistance via WhatsApp (+977-9768527869)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Submission & Verification Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-neutral-900/60 border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {purpose === "scholarship"
                  ? "Support Tech Scholarships"
                  : "Book Workshop Classes"}
              </h3>
              <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                purpose === "scholarship"
                  ? "bg-rose-500/10 text-rose-300 border-rose-500/20"
                  : "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
              }`}>
                Step 2: Submit Txn ID
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              {purpose === "scholarship"
                ? "Every rupee helps empower deserving students with tuition waivers, modern cloud dev tooling, and 1-on-1 mentorship. Scan the QR code, complete the transfer, and record your transaction ID below."
                : "Reserve your seat in our hands-on Next.js, .NET Core, or Prompt Engineering cohorts. Scan the QR code for NRS. 25,000, and submit your transaction ID to confirm enrollment."}
            </p>

            {/* Purpose-Specific Selector */}
            {purpose === "scholarship" ? (
              <div className="mb-6 p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-3">
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Select Scholarship Contribution Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { label: "NRS. 2,500", value: "2500", desc: "Dev Tools / Cloud" },
                    { label: "NRS. 5,000", value: "5000", desc: "Partial Tuition" },
                    { label: "NRS. 10,000", value: "10000", desc: "Semester Support" },
                    { label: "NRS. 25,000", value: "25000", desc: "Full Cohort Grant" },
                  ].map((tier) => (
                    <button
                      key={tier.value}
                      type="button"
                      onClick={() => setScholarshipTier(tier.value)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        scholarshipTier === tier.value
                          ? "bg-rose-500/15 border-rose-500 text-white shadow-md shadow-rose-500/20"
                          : "bg-neutral-900 border-white/5 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-bold">{tier.label}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{tier.desc}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setScholarshipTier("custom")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      scholarshipTier === "custom"
                        ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                        : "bg-neutral-900 text-neutral-400 border-white/5 hover:text-white"
                    }`}
                  >
                    Custom Amount
                  </button>

                  {scholarshipTier === "custom" && (
                    <div className="flex-1">
                      <input
                        type="number"
                        placeholder="Enter amount in NRS (e.g. 15000)"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-900 border border-rose-500/30 text-white text-xs focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="mb-6 p-4 rounded-2xl bg-neutral-950 border border-white/5 space-y-3">
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Select Workshop Cohort to Book
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {WORKSHOP_OPTIONS.map((ws) => (
                    <button
                      key={ws.id}
                      type="button"
                      onClick={() => setSelectedWorkshop(ws.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedWorkshop === ws.id
                          ? "bg-indigo-600/15 border-indigo-500 text-white shadow-md shadow-indigo-500/20"
                          : "bg-neutral-900 border-white/5 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight mb-1">{ws.title}</div>
                      <div className="text-sm font-black text-indigo-400">{ws.fee}</div>
                      <div className="text-[9px] text-emerald-400 font-medium mt-1">{ws.badge}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-950/50">
                  <Check className="w-7 h-7" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Payment Receipt Generated & Dispatched</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  Transaction ID Logged Successfully
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{receiptData?.name}</strong>. Your payment reference has been recorded and submitted via React Email directly to Bibek Lama for immediate reconciliation.
                </p>

                {/* Receipt Card */}
                {receiptData && (
                  <div className="p-5 rounded-2xl bg-neutral-950/90 border border-white/10 text-left max-w-lg mx-auto mb-6 text-xs space-y-2">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-400">Transaction ID:</span>
                      <span className="text-emerald-400 font-mono font-bold">{receiptData.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Payer Name:</span>
                      <span className="text-neutral-200">{receiptData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Email Address:</span>
                      <span className="text-neutral-200 font-mono">{receiptData.email}</span>
                    </div>
                    {receiptData.phone && (
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Phone / WhatsApp:</span>
                        <span className="text-neutral-200 font-mono">{receiptData.phone}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Purpose:</span>
                      <span className="text-cyan-300 font-medium">{receiptData.purpose}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Details:</span>
                      <span className="text-neutral-200">{receiptData.details}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-2">
                      <span className="text-neutral-400 font-semibold">Total Amount:</span>
                      <span className="text-white font-black text-sm">{receiptData.amount}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/9779768527869?text=${encodeURIComponent(
                      `Hello Bibek, I have submitted payment for "${receiptData?.purpose}".\nTxn ID: ${receiptData?.transactionId}\nAmount: ${receiptData?.amount}\nName: ${receiptData?.name} (${receiptData?.phone || receiptData?.email}). Kindly confirm!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>WhatsApp Instant Receipt</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <span>Submit Another Payment</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-center justify-between">
                    <span>{errorMessage}</span>
                    <button
                      type="button"
                      onClick={() => setErrorMessage(null)}
                      className="text-rose-400 underline ml-2 text-xs"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aashish Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Transaction ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +977 98XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Transaction / Reference ID *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1029384756 or MoBank Ref"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-emerald-500/40 text-emerald-400 font-mono text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Optional Remarks / Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Payment Date
                    </label>
                    <input
                      type="date"
                      value={paymentDate}
                      onChange={(e) => setPaymentDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Payable Amount Summary
                    </label>
                    <div className="px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white font-bold text-xs sm:text-sm flex items-center justify-between">
                      <span className="text-neutral-400 font-normal">Calculated Total:</span>
                      <span className="text-emerald-400 font-mono">{getAmountString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Remarks / Student Details / Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention any specific student notes, preferred cohort batch, or sponsorship dedication..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Transaction Verification...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Transaction ID for Verification</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
