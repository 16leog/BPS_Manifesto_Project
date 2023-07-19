'use client';
import {
  Inter,
  Montserrat,
  Old_Standard_TT,
  Open_Sans,
} from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BackButton from '../../public/back-button.svg';
import deleteButton from '../../public/delete-button.svg';
import editButton from '../../public/edit-button.svg';
import ManifestoBanner from '../../public/manifesto-banner.svg';
import manifestoWebSkyline from '../../public/manifestoWebSkyline.svg';
import FormData from '../../types';
import NoOne from './components/Homescreen/NoOne';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-old-standard-tt',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: '600',
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
    <main className="sm:scroll-smooth bg-HOMEPAGE_BGCOLOR">
      <div className="min-h-screen bg-HOMEPAGE_BGCOLOR sm:bg-NAVBAR_COLOR">
        <div className="bg-HOMEPAGE_BGCOLOR h-9 block sm:hidden"></div>
        <div className="block sm:hidden">
          <Image
            className="w-full "
            src={ManifestoBanner}
            alt="ManifestoBanner"
          />
        </div>
        <div className="hidden sm:block mb-auto">
          <button onClick={() => router.back()}>
            <div className="flex items-center ml-4 mt-4">
              <Image src={BackButton} alt="BackButton" />
              <span className="ml-2 font-medium text-MANIFESTO_COLOR font">
                <a className={montserrat.className}>Back</a>
              </span>
            </div>
          </button>
        </div>
        <div className="relative hidden sm:block max-w-[1350px] mx-auto mt-auto  items-center">
          <div className="absolute left-0 right-0 top-0 bottom-8 z-10 flex flex-col items-center justify-center ">
            <h1 className="text-MANIFESTO_COLOR text-75px  sm:relative max-sm:text-center ">
              <a className={oldStandard.className}>M</a>
            </h1>
            <p className={openSans.className}>
              <a className="text-white text-30px">Manifesto</a>
            </p>
          </div>
          <Image
            className="object-center"
            src={manifestoWebSkyline}
            alt="manifestoWebSkyline"
          />
        </div>

        <div className="bg-HOMEPAGE_BGCOLOR max-w-[1350px] mx-auto">
          <div className=" max-w-[540px] h-[616px] mx-auto mb-28">
            <div className="flex flex-col justify-center h-[350px] ">
              {formDataList.length === 0 ? (
                <NoOne />
              ) : (
                <>
                  <div className="flex items-center justify-around mt-12 mb-8">
                    <h1 className="text-white text-xl">
                      <a className={montserrat.className}>
                        Sign in at the registry.
                      </a>
                    </h1>
                  </div>
                  <div className="justify-center overflow-y-auto">
                    <div className="overflow-y-auto ">
                      {formDataList.map((formData, index) => (
                        <div key={index} className="justify-center mx-8">
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
                                <Image
                                  src={deleteButton}
                                  alt={'delete button'}
                                />
                              </button>
                            </div>
                          </div>
                          <div className="mx-8 max-md:w-5/6 h-px m-3 bg-gray-400 self-center sm:w-11/12"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-center max-sm:mt-44 md:mt-20">
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
          </div>
        </div>
      </div>
    </main>
  );
}
