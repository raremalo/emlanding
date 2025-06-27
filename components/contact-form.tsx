"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Form values", values);

    // TODO: Add EmailJS integration here
    // Example:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
    //   .then((response) => {
    //      console.log('SUCCESS!', response.status, response.text);
    //      setIsSubmitted(true);
    //   }, (err) => {
    //      console.log('FAILED...', err);
    //   });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-100 rounded-lg">
        <h3 className="text-2xl font-bold text-green-800">Danke für deine Nachricht!</h3>
        <p className="text-green-600 mt-2">Ich melde mich so schnell wie möglich bei dir.</p>
      </div>
    )
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-green">Noch Fragen?</h2>
          <p className="text-lg text-warm-gray mt-4">
            Schreib mir eine Nachricht und ich werde mich so schnell wie möglich bei dir melden.
          </p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div>
            <Input 
              {...form.register("name")}
              placeholder="Dein Name"
              className="w-full p-4 border rounded-lg"
            />
            {form.formState.errors.name && <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>}
          </div>
          <div>
            <Input 
              {...form.register("email")}
              type="email"
              placeholder="Deine E-Mail"
              className="w-full p-4 border rounded-lg"
            />
            {form.formState.errors.email && <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>}
          </div>
          <div>
            <Textarea
              {...form.register("message")}
              placeholder="Deine Nachricht"
              className="w-full p-4 border rounded-lg"
              rows={6}
            />
            {form.formState.errors.message && <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>}
          </div>
          <div className="text-center">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-golden hover:bg-golden/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Sende...' : 'Nachricht senden'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
