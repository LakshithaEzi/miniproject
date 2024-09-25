import { useState } from 'react';
import Head from 'next/head';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me via the form below" />
      </Head>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" required />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
