import React, { useState } from "react";
import Input from "../components/ui/Input";
import FileUpload from "../components/ui/FileUpload";
import Button from "../components/ui/Button";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill all fields!");
      return;
    }
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "", file: null });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <Input
          label="Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          label="Subject"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
        />
        <Input
          label="Message"
          type="textarea"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <FileUpload onChange={(e) => handleChange("file", e.target.files[0])} />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Contact;
