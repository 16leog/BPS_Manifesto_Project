'use client';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import deleteButton from '../../public/delete-button.svg';
import editButton from '../../public/edit-button.svg';
import ManifestoBanner from '../../public/manifesto-banner.svg';
import FormData from '../../types';
import NoOne from './components/Homescreen/NoOne';

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

// signinList;

export default function Home() {
  const router = useRouter();
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    const formDataList = storedFormData ? JSON.parse(storedFormData) : [];
    setFormDataList(formDataList);
  }, []);

  const handleEdit = (id: number) => {
    // Save the id of the FormData object to be edited in localStorage
    localStorage.setItem('editingFormId', id.toString());

    // Redirect to the /signin page
    router.push('/signin');
  };

  const handleDelete = (index: number) => {
    // Display a confirmation dialog to the user
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this item?'
    );

    // If the user clicked "OK", delete the item
    if (confirmDelete) {
      // Make a copy of the formData array
      const newFormDataList = [...formDataList];

      // Remove the item at the specified index
      newFormDataList.splice(index, 1);

      // Update the formDataList state
      setFormDataList(newFormDataList);

      // Update the localStorage
      localStorage.setItem('formData', JSON.stringify(newFormDataList));
    }
  };

  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className="min-h-screen bg-HOMEPAGE_BGCOLOR">
        <div className="">
          <Image
            className="w-full mt-9"
            src={ManifestoBanner}
            alt="ManifestoBanner"
          />
        </div>
        <div className="w-full flex flex-col  h-72 sm:h-58 ">
          {formDataList.length === 0 ? (
            <NoOne />
          ) : (
            <>
              <div className="flex items-center justify-around mt-14 mb-8">
                <h1 className="text-white">
                  <a className={montserrat.className}>
                    Sign in at the registry.
                  </a>
                </h1>
              </div>
              <div className="overflow-y-auto">
                {formDataList.map((formData, index) => (
                  <div key={index} className=" mx-1 justify-center">
                    <div className=" text-white flex flex-row justify-between items-center w-11/12">
                      <h1 className="ml-8">
                        <a className={montserrat.className}>
                          {formData.fullName}
                        </a>
                      </h1>
                      <div className="w-20">
                        <button
                          className="pr-4 w-auto h-auto"
                          onClick={() => handleEdit(formData.id)}
                        >
                          <Image src={editButton} alt={'edit button'} />
                        </button>
                        <button
                          className="w-auto h-auto"
                          onClick={() => handleDelete(index)}
                        >
                          <Image src={deleteButton} alt={'delete button'} />
                        </button>
                      </div>
                    </div>
                    <div className="ml-8 max-md:w-5/6 h-px m-3 bg-gray-400 self-center sm:w-7/12"></div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center mt-44">
          <button
            onClick={() => {
              localStorage.removeItem('editingFormId');
              router.push('/signin');
            }}
            className="bg-MANIFESTO_COLOR w-44 h-12"
          >
            <h1 className="text-NAVBAR_COLOR">
              <a className={inter.className}>Sign In</a>
            </h1>
          </button>
        </div>
      </body>
    </html>
  );
}
