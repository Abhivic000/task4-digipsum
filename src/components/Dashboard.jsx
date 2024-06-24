import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dashboard = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="p-6 flex-1 bg-[#F5F5F5]">
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Search..." className="border p-2 rounded w-3/4" />
        <button className="py-2 px-4 bg-blue-500 text-white rounded">Backup File</button>
      </div>
      <div {...getRootProps()} className={`bg-blue-50 p-4 text-center border-dashed border-2 ${isDragActive ? 'bg-blue-100' : ''}`}>
        <svg width="40" height="40" className="mx-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white" />
          <path d="M25.2701 28.1599H14.9501C14.2301 28.1599 13.6501 27.5799 13.6501 26.8599V13.9499C13.6501 13.2299 14.2301 12.6499 14.9501 12.6499H25.2701C25.9901 12.6499 26.5701 13.2299 26.5701 13.9499V26.8599C26.5701 27.5799 25.9901 28.1599 25.2701 28.1599Z" fill="#5CB1FF" />
          <path d="M17.0699 18.4299H21.1499" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.0699 22.3799H23.1499" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <input {...getInputProps()} />
        {isDragActive ? <p className="text-lg font-semibold">Drop the files here ...</p> : <p className="text-lg font-semibold">Drag and drop file here, or click to select files</p>}
        <p className="text-gray-400">Support zip and rar files</p>
        <button className="py-2 px-4 bg-[#5CB1FF] text-white rounded mt-2">Browse File</button>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">My Folder</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded">
            <div className="flex flex-row"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.04 10.2266L15.1467 7.74659C15.0667 7.50659 14.8267 7.33325 14.56 7.33325H6.62667C6.28 7.33325 6 7.61325 6 7.95992V23.3333C6 24.7199 7.13333 25.8533 8.52 25.8533H24.44C25.8267 25.8533 26.96 24.7199 26.96 23.3333V13.1733C26.96 11.7866 25.8267 10.6533 24.44 10.6533H16.64C16.3733 10.6533 16.1333 10.4799 16.04 10.2266Z" fill="#5CB1FF" />
              <line x1="16.5" y1="14.5" x2="24.5" y2="14.5" stroke="white" stroke-linecap="round" />
            </svg>
              <div className="mt-1">Tugas Bahasa Inggris</div></div></div>
          <div className="bg-white p-4 rounded">
            <div className="flex flex-row"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.04 10.2266L15.1467 7.74659C15.0667 7.50659 14.8267 7.33325 14.56 7.33325H6.62667C6.28 7.33325 6 7.61325 6 7.95992V23.3333C6 24.7199 7.13333 25.8533 8.52 25.8533H24.44C25.8267 25.8533 26.96 24.7199 26.96 23.3333V13.1733C26.96 11.7866 25.8267 10.6533 24.44 10.6533H16.64C16.3733 10.6533 16.1333 10.4799 16.04 10.2266Z" fill="#49d82a" />
              <line x1="16.5" y1="14.5" x2="24.5" y2="14.5" stroke="white" stroke-linecap="round" />
            </svg>
              <div className="mt-1">Tugas Bahasa Inggris</div></div></div>
          <div className="bg-white p-4 rounded">
            <div className="flex flex-row"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.04 10.2266L15.1467 7.74659C15.0667 7.50659 14.8267 7.33325 14.56 7.33325H6.62667C6.28 7.33325 6 7.61325 6 7.95992V23.3333C6 24.7199 7.13333 25.8533 8.52 25.8533H24.44C25.8267 25.8533 26.96 24.7199 26.96 23.3333V13.1733C26.96 11.7866 25.8267 10.6533 24.44 10.6533H16.64C16.3733 10.6533 16.1333 10.4799 16.04 10.2266Z" fill="#6A29FF" />
              <line x1="16.5" y1="14.5" x2="24.5" y2="14.5" stroke="white" stroke-linecap="round" />
            </svg>
              <div className="mt-1">Tugas Bahasa Inggris</div></div></div>
          <div className="bg-white p-4 rounded">
            <div className="flex flex-row"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.04 10.2266L15.1467 7.74659C15.0667 7.50659 14.8267 7.33325 14.56 7.33325H6.62667C6.28 7.33325 6 7.61325 6 7.95992V23.3333C6 24.7199 7.13333 25.8533 8.52 25.8533H24.44C25.8267 25.8533 26.96 24.7199 26.96 23.3333V13.1733C26.96 11.7866 25.8267 10.6533 24.44 10.6533H16.64C16.3733 10.6533 16.1333 10.4799 16.04 10.2266Z" fill="#FFCF26" />
              <line x1="16.5" y1="14.5" x2="24.5" y2="14.5" stroke="white" stroke-linecap="round" />
            </svg>
              <div className="mt-1">Tugas Bahasa Inggris</div></div></div>
          <div className="bg-white p-4 rounded">
            <div className="flex flex-row"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.04 10.2266L15.1467 7.74659C15.0667 7.50659 14.8267 7.33325 14.56 7.33325H6.62667C6.28 7.33325 6 7.61325 6 7.95992V23.3333C6 24.7199 7.13333 25.8533 8.52 25.8533H24.44C25.8267 25.8533 26.96 24.7199 26.96 23.3333V13.1733C26.96 11.7866 25.8267 10.6533 24.44 10.6533H16.64C16.3733 10.6533 16.1333 10.4799 16.04 10.2266Z" fill="#5CB1FF" />
              <line x1="16.5" y1="14.5" x2="24.5" y2="14.5" stroke="white" stroke-linecap="round" />
            </svg>
              <div className="mt-1">Tugas Bahasa Inggris</div></div></div>
          <div className="bg-white p-4 rounded">
            <div className="flex flex-row"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.04 10.2266L15.1467 7.74659C15.0667 7.50659 14.8267 7.33325 14.56 7.33325H6.62667C6.28 7.33325 6 7.61325 6 7.95992V23.3333C6 24.7199 7.13333 25.8533 8.52 25.8533H24.44C25.8267 25.8533 26.96 24.7199 26.96 23.3333V13.1733C26.96 11.7866 25.8267 10.6533 24.44 10.6533H16.64C16.3733 10.6533 16.1333 10.4799 16.04 10.2266Z" fill="#EE2727" />
              <line x1="16.5" y1="14.5" x2="24.5" y2="14.5" stroke="white" stroke-linecap="round" />
            </svg>
              <div className="mt-1">Tugas Bahasa Inggris</div></div></div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">Recent View</h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="bg-gray-300 p-4 rounded h-36"></div>
            <div><h1>Buku Panduan.png </h1> <p className="text-sm text-gray-500">Edited 3 min ago</p></div>
          </div>
          <div>
            <div className="bg-gray-300 p-4 rounded h-36"></div>
            <div><h1>Buku Panduan.png </h1> <p className="text-sm text-gray-500">Edited 3 min ago</p></div>
          </div>
          <div>
            <div className="bg-gray-300 p-4 rounded h-36"></div>
            <div><h1>Buku Panduan.png </h1> <p className="text-sm text-gray-500">Edited 3 min ago</p></div>
          </div>
          <div>
            <div className="bg-gray-300 p-4 rounded h-36"></div>
            <div><h1>Buku Panduan.png </h1> <p className="text-sm text-gray-500">Edited 3 min ago</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
