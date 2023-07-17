import Image from 'next/image';
import deleteButton from '../../../../public/delete-button.svg';
import editButton from '../../../../public/edit-button.svg';

export default function ListItem() {
  return (
    <div className="bg-NAVBAR_COLOR">
      <main className="flex flex-col items-center sm:bg-bgWeb w-4/5 max-sm:w-full">
        <div className=" font-montserrat text-white flex flex-row justify-between items-center w-1/2">
          <h1 className="">Name</h1>
          <div className=" w-20">
            <button className=" pr-4 w-auto h-auto" onClick={() => {}}>
              <Image src={editButton} alt={'edit button'}></Image>
            </button>

            <button className=" w-auto h-auto" onClick={() => {}}>
              <Image src={deleteButton} alt={'delete button'}></Image>
            </button>
          </div>
        </div>
        <div className=" max-md:w-5/6 h-px m-3 bg-slate-700 self-center sm:w-7/12"></div>
      </main>
    </div>
  );
}
