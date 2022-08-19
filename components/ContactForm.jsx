import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ContactForm = () => {
  const [reCaptchaPassed, setRecaptchaPassed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hideElement, setHideElement] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(50, 'Name must be less than 50 character'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    subject: Yup.string()
      .required('Subject is required')
      .max(100, 'Subject must be less than 100 character'),
    message: Yup.string().required('M essage is required'),
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
    setRecaptchaPassed(!!value);
  };

  const submitForm = async (data) => {
    console.log('data');
    console.log(data);

    console.log('reCaptchaPassed');
    console.log(reCaptchaPassed);

    const { email, name, subject, message } = data;
    try {
      const res = await fetch('/api/email-sendgrid', {
        body: JSON.stringify({
          email,
          name,
          subject,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      console.log('res');
      console.log(res);
      if (!res.ok) {
        throw new Error();
      }
      setFormSubmitted(true);
      console.log('Succesfully submitted!');
    } catch (err) {
      console.error(err);
      return;
    }
  };

  console.log('isDirty');
  console.log(isDirty);

  console.log('isValid');
  console.log(isValid);

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Name</label>
        <input
          disabled={formSubmitted}
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          {...register('name')}
        />
        <p className="mt-1 text-red-500">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          disabled={formSubmitted}
          className="border-2 rounded-lg p-3 flex border-gray-300"
          {...register('email')}
          type="email"
        />
        <p className="mt-1 text-red-500">{errors.email?.message}</p>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          disabled={formSubmitted}
          className="border-2 rounded-lg p-3 flex border-gray-300"
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
          className="border-2 rounded-lg p-3 border-gray-300"
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
            />
          </div>

          <button
            disabled={!isDirty || !isValid || !reCaptchaPassed}
            className="w-full p-4 text-gray-100 mt-4"
          >
            Send Message
          </button>
        </>
      )}
      {formSubmitted && (
        <div className="text-center mt-2 text-[#5651e5]">
          <p>Thanks for contacting me. I&apos;'ll be in touch soon.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
