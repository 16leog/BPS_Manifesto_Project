'use client';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import BackButton from '../../../public/back-button.svg';
import SignInSkyline from '../../../public/signin-skyline.svg';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-montserrat',
});

interface FormData {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
}

interface SignInProps {
  initialData?: FormData;
}

export default function SignIn({ initialData }: SignInProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    id: 0, // Initial ID can be 0
    fullName: '',
    phoneNumber: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
  });

  useEffect(() => {
    // Retrieve the id of the FormData object to be edited from localStorage
    const id = localStorage.getItem('editingFormId');

    if (id) {
      // Retrieve the corresponding FormData object from localStorage
      const storedFormData = localStorage.getItem('formData');
      const formDataList = storedFormData ? JSON.parse(storedFormData) : [];
      console.log(formDataList);
      const formDataToEdit = formDataList.find(
        (formData: FormData) => formData.id === parseInt(id)
      );

      if (formDataToEdit) {
        // Populate the form fields with the data of the FormData object to be edited
        setFormData(formDataToEdit);
      }
    }
  }, []);

  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emergencyContactNameError, setEmergencyContactNameError] =
    useState('');
  const [emergencyContactNumberError, setEmergencyContactNumberError] =
    useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const storedFormData = localStorage.getItem('formData');
    const formDataList = storedFormData ? JSON.parse(storedFormData) : [];

    const id = localStorage.getItem('editingFormId');
    if (!id) {
      // It's a new submission
      formData.id = formDataList.length; // Use the length of the array as id
      formDataList.push(formData);
    } else {
      // It's an edit
      // Here you are modifying the original object directly,
      // so there's no need to assign id to formData again.
      const index = formDataList.findIndex(
        (data: FormData) => data.id === parseInt(id)
      );
      if (index !== -1) {
        formDataList[index] = formData;
      }

      // Remove the id of the FormData object to be edited from localStorage
      localStorage.removeItem('editingFormId');
    }

    localStorage.setItem('formData', JSON.stringify(formDataList));
    router.push('/');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'fullName') {
      if (value.length < 2 || value.length > 12 || /[^a-zA-Z\s]/.test(value)) {
        setFullNameError(
          'Must be 2-12 characters long and have no special characters.'
        );
      } else {
        setFullNameError('');
      }
    }

    if (name === 'phoneNumber') {
      if (!/^\d{10}$/.test(value)) {
        setPhoneNumberError('Must enter 10 digit number.');
      } else {
        setPhoneNumberError('');
      }
    }

    if (name === 'email') {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setEmailError('We do not recognize that as an email. Try again.');
      } else {
        setEmailError('');
      }
    }

    if (name === 'emergencyContactName') {
      if (value.length < 2 || value.length > 12 || /[^a-zA-Z\s]/.test(value)) {
        setEmergencyContactNameError(
          'Must be 2-12 characters long and have no special characters.'
        );
      } else {
        setEmergencyContactNameError('');
      }
    }

    if (name === 'emergencyContactNumber') {
      if (!/^\d{10}$/.test(value)) {
        setEmergencyContactNumberError('Must enter 10 digit number.');
      } else {
        setEmergencyContactNumberError('');
      }
    }
  };

  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className="max-h-screen bg-SIGNIN_BGCOLOR flex flex-col">
        <div>
          <button onClick={() => router.back()}>
            <div className="flex items-center ml-4 mt-4">
              <Image src={BackButton} alt="BackButton" />
              <span className="ml-2 font-medium text-MANIFESTO_COLOR font">
                <a className={montserrat.className}>Back</a>
              </span>
            </div>
          </button>
        </div>
        <div className=" bg-SIGNIN_FORM_BGCOLOR mx-5 flex-grow-0 flex flex-col items-center justify-end">
          <div className="justify-center">
            <form
              className="m-4 flex flex-col justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex-col justify-center">
                <div className={inter.className}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`outline outline-1 rounded mt-8 mx-8 h-12 w-72 ${
                      fullNameError ? 'outline-red-500' : ''
                    }`}
                    placeholder="Full Name"
                    style={{ paddingLeft: '8px' }}
                  />
                  {fullNameError && (
                    <div className="text-red-500 my-0 text-sm mx-8">
                      {fullNameError}
                    </div>
                  )}
                </div>
                <div className={inter.className}>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`outline outline-1 rounded mt-8 mx-8 h-12 w-72 ${
                      phoneNumberError ? 'outline-red-500' : ''
                    }`}
                    placeholder="Phone Number"
                    style={{ paddingLeft: '8px' }}
                  />
                  {phoneNumberError && (
                    <div className="text-red-500 my-0 text-sm mx-8">
                      {phoneNumberError}
                    </div>
                  )}
                </div>
                <div className={inter.className}>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`outline outline-1 rounded mt-8 mx-8 h-12 w-72 ${
                      emailError ? 'outline-red-500' : ''
                    }`}
                    placeholder="Email"
                    style={{ paddingLeft: '8px' }}
                  />
                  {emailError && (
                    <div className="text-red-500 my-0 text-sm mx-8">
                      {emailError}
                    </div>
                  )}
                </div>
                <div className={inter.className}>
                  <input
                    type="text"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className={`outline outline-1 rounded mt-8 mx-8 h-12 w-72 ${
                      emergencyContactNameError ? 'outline-red-500' : ''
                    }`}
                    placeholder="Emergency Contact Name"
                    style={{ paddingLeft: '8px' }}
                  />
                  {emergencyContactNameError && (
                    <div className="text-red-500 my-0 text-sm mx-8">
                      {emergencyContactNameError}
                    </div>
                  )}
                </div>
                <div className={inter.className}>
                  <input
                    type="text"
                    name="emergencyContactNumber"
                    value={formData.emergencyContactNumber}
                    onChange={handleChange}
                    className={`outline outline-1 rounded mt-8 mx-8 h-12 w-72 ${
                      emergencyContactNumberError ? 'outline-red-500' : ''
                    }`}
                    placeholder="Emergency Contact Number"
                    style={{ paddingLeft: '8px' }}
                  />

                  {emergencyContactNumberError && (
                    <div className="text-red-500 my-0 text-sm mx-8">
                      {emergencyContactNumberError}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center mt-12">
                <button
                  className="bg-SAVE_AND_SIGN_BUTTON_COLOR w-44 h-12 mb-12"
                  type="submit"
                >
                  <h1 className="text-white">
                    <a className={inter.className}>Save and Sign</a>
                  </h1>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex-shrink-0">
          <Image
            className="w-full h-1/6"
            src={SignInSkyline}
            alt="SignInSkyline"
          />
        </div>
      </body>
    </html>
  );
}
