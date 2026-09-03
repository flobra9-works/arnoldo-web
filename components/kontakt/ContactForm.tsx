"use client";

import { FormEvent, useState } from "react";
import { mailtoHref } from "@/lib/maps";
import { Button } from "@/components/ui/button";

// YAGNI: v1 submits via mailto:gelateria@arnoldo.at (opens the visitor's mail client).
// Replace this with a form endpoint later without changing the field layout.

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const href = mailtoHref({
      subject: `Nachricht von ${name || "Website"}`,
      body: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    });
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm">
        Name
        <input
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-gold/40 bg-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio"
        />
      </label>
      <label className="grid gap-1 text-sm">
        E-Mail
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-gold/40 bg-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Nachricht
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-gold/40 bg-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio"
        />
      </label>
      <Button type="submit">Nachricht senden</Button>
      <p className="text-xs text-espresso/65">
        Öffnet Ihr E-Mail-Programm an gelateria@arnoldo.at. Kein Versand über unseren Server.
      </p>
    </form>
  );
}
