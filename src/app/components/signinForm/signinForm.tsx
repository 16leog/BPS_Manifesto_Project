import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import InputField from '../BPS-Input/Input';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
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
  InitialData?: FormData;
}

export default function SigninForm({ InitialData }: any) {
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

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const valid = Boolean(
      formData.fullName &&
        formData.phoneNumber &&
        formData.email &&
        formData.emergencyContactName &&
        formData.emergencyContactNumber &&
        !fullNameError &&
        !phoneNumberError &&
        !emailError &&
        !emergencyContactNameError &&
        !emergencyContactNumberError
    );
    setIsFormValid(valid);
  }, [
    formData,
    fullNameError,
    phoneNumberError,
    emailError,
    emergencyContactNameError,
    emergencyContactNumberError,
  ]);

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
    <>
      <form
        className="m-4 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex-col justify-center ">
          <div className={inter.className}>
            {/* INPUT NAME */}
            <InputField
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              error={fullNameError}
            />
          </div>
          <div className={inter.className}>
            <InputField
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              error={phoneNumberError}
            />
          </div>
          <div className={inter.className}>
            <InputField
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              error={emailError}
            />
          </div>
          <div className={inter.className}>
            <InputField
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              placeholder="Emergency Contact Name"
              error={emergencyContactNameError}
            />
          </div>
          <div className={inter.className}>
            <InputField
              type="text"
              name="emergencyContactNumber"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              placeholder="Emergency Contact Number"
              error={emergencyContactNumberError}
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-SAVE_AND_SIGN_BUTTON_COLOR w-44 h-12 mb-12"
            type="submit"
            disabled={!isFormValid}
          >
            <h1 className="text-white">
              <a className={inter.className}>Save and Sign</a>
            </h1>
          </button>
        </div>
      </form>
    </>
  );
}
