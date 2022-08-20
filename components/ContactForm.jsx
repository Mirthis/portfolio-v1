import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ContactForm = () => {
  const [reCaptchaValue, setRecaptchaValue] = useState(undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(50, 'Name must be less than 50 character'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    subject: Yup.string()
      .required('Subject is required')
      .max(100, 'Subject must be less than 100 character'),
    message: Yup.string().required('Message is required'),
  });

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const onChange = (value) => {
    if (value) {
      setRecaptchaValue(value);
    }
  };

  const submitForm = async (data) => {
    const { email, name, subject, message } = data;
    try {
      const res = await fetch('/api/contact', {
        body: JSON.stringify({
          email,
          name,
          subject,
          message,
          recaptcha: reCaptchaValue,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!res.ok) {
        throw new Error();
      }
      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Name</label>
        <input
          disabled={formSubmitted}
          className="border-2 rounded-lg p-3 flex border-slate-600 bg-slate-900"
          type="text"
          {...register('name')}
        />
        <p className="mt-1 text-red-500">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          disabled={formSubmitted}
          className="border-2 rounded-lg p-3 flex border-slate-600 bg-slate-900"
          {...register('email')}
          type="email"
        />
        <p className="mt-1 text-red-500">{errors.email?.message}</p>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          disabled={formSubmitted}
          className="border-2 rounded-lg p-3 flex border-slate-600 bg-slate-900"
          type="text"
          {...register('subject')}
        />
        <p className="mt-1 text-red-500">{errors.subject?.message}</p>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          disabled={formSubmitted}
          {...register('message')}
          className="border-2 rounded-lg p-3 border-slate-600 bg-slate-900"
          rows="10"
        ></textarea>
        <p className="mt-1 text-red-500">{errors.message?.message}</p>
      </div>
      {!formSubmitted && (
        <>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onChange}
              theme="dark"
            />
          </div>

          <button
            disabled={!isDirty || !isValid || !reCaptchaValue}
            className="w-full p-4 text-gray-100 mt-4"
          >
            Send Message
          </button>
        </>
      )}
      {formSubmitted && (
        <div className="text-center mt-2 text-[#5651e5]">
          <p>Thanks for contacting me. I&apos;ll be in touch soon.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
