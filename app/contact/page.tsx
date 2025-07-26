"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    data.access_key = "d508b54f-acee-4450-b91c-e026fd724846";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!");
        reset();
        setSubmitted(true);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label>Name</label>
                <input
                  type="text"
                  className="contactInput"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{String(errors.name?.message) || "Name is required"}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="contactInput"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {String(errors.phoneNumber?.message) || "Phone number is required"}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="email"
                  className="contactInput"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{String(errors.email?.message) || "Email is required"}</p>
                )}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label>Subject</label>
                <input
                  type="text"
                  className="contactInput"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {String(errors.subject?.message) || "Subject is required"}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label>Message</label>
                <textarea
                  rows={5}
                  className="contactInput"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.message?.message) || "Message is required" }
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Optional Success Message */}
              {submitted && (
                <p className="text-green-600 text-sm mt-2">
                  Your message was sent successfully.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.473993148033!2d77.284055!3d28.521932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3db32e049ef%3A0xa178ae1230b908c9!2sKanchan%20Kunj%2C%20Madanpur%20Khadar%2C%20New%20Delhi%2C%20Delhi%20110076!5e0!3m2!1sen!2sin!4v1721657032075!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={false}
            ></iframe>

            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <p>G-2 Ground Floor, Kanchan Kunj, Delhi, 110076</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <p>+91 9639030355</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <p>info@asfurniture.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
