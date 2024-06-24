import React from 'react';
import { FaBars, FaHome, FaUser, FaHeart, FaTrash, FaEnvelope, FaCog } from 'react-icons/fa';

const LeftSidebar = ({ isOpen }) => {
  return (
    <div className={`flex flex-col bg-white p-4 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:relative z-10 md:translate-x-0 h-full w-64`}>
      <div className="flex items-center mb-6 ml-5">
        <svg width="21" height="32" className="mr-4 ml-4 mt-1" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_14_208)">
            <path d="M12.7058 22.8824C13.3333 23.9608 13.647 25.2745 13.647 26.8235L13.647 28.7059L12.7058 28.7059L12.7058 29.6471C12.7058 29.7745 12.5906 29.8848 12.3602 29.9779C12.1298 30.0711 11.8529 30.1176 11.5294 30.1176C11.2941 30.1176 11.0539 30.0833 10.8088 30.0147C10.7892 30.5833 10.7377 31.0564 10.6544 31.4338C10.571 31.8113 10.4705 32 10.3529 32C10.2352 32 10.1347 31.8113 10.0514 31.4338C9.96808 31.0564 9.91661 30.5833 9.897 30.0147C9.6519 30.0833 9.4117 30.1176 9.17641 30.1176C8.85288 30.1176 8.57592 30.0711 8.34553 29.9779C8.11514 29.8848 7.99994 29.7745 7.99994 29.6471L7.99994 28.7059L7.05876 28.7059L7.05876 26.8235C7.05876 25.2745 7.37249 23.9608 7.99994 22.8824L7.99994 6.51471C8.06857 6.10294 8.1568 5.58088 8.26464 4.94853C8.37249 4.31618 8.44111 3.92157 8.47053 3.76471C8.61758 2.89216 8.81611 2.15686 9.06611 1.55882C9.31611 0.960785 9.54896 0.551469 9.76464 0.330883C9.98033 0.110294 10.1764 -4.44828e-07 10.3529 -4.52541e-07C10.5293 -4.60255e-07 10.7254 0.110294 10.9411 0.330883C11.1568 0.551469 11.3896 0.960784 11.6396 1.55882C11.8896 2.15686 12.0882 2.89216 12.2352 3.76471C12.2646 3.92157 12.3333 4.31617 12.4411 4.94853C12.549 5.58088 12.6372 6.10294 12.7058 6.51471L12.7058 22.8824ZM8.99994 6.42647C9.35288 5.90686 9.80386 5.64706 10.3529 5.64706C10.9019 5.64706 11.3529 5.90686 11.7058 6.42647L12.147 5.23529C11.6764 4.56863 11.0784 4.23529 10.3529 4.23529C9.62739 4.23529 9.02935 4.56863 8.55876 5.23529L8.99994 6.42647ZM12.9411 22.8088L12.9411 7.88235C13.3137 10.0098 13.7058 12.2451 14.1176 14.5882C14.1176 15.1471 14.2352 15.701 14.4705 16.25C14.7058 16.799 14.9411 17.2059 15.1764 17.4706L15.5294 17.8824L19.7646 22.1176C20.0195 22.3725 20.2401 22.7181 20.4264 23.1544C20.6127 23.5907 20.7058 24.0294 20.7058 24.4706L20.7058 25.8824L13.8823 27.25L13.8823 26.8235C13.8823 25.2843 13.5686 23.9461 12.9411 22.8088ZM6.82347 26.8235L6.82347 27.25L-6.13026e-05 25.8824L-6.13643e-05 24.4706C-6.1384e-05 24.0196 0.0930758 23.5784 0.27935 23.1471C0.465625 22.7157 0.686213 22.3725 0.941115 22.1176L5.17641 17.8824C5.21562 17.8431 5.2671 17.7892 5.33082 17.7206C5.39455 17.652 5.50729 17.5025 5.66906 17.2721C5.83082 17.0417 5.97298 16.8039 6.09553 16.5588C6.21808 16.3137 6.33082 16.0123 6.43376 15.6544C6.5367 15.2966 6.58817 14.9412 6.58817 14.5882L7.76464 7.88235L7.76464 22.8088C7.13719 23.9461 6.82347 25.2843 6.82347 26.8235Z" fill="#5CB1FF" />
          </g>
          <defs>
            <clipPath id="clip0_14_208">
              <rect width="32" height="20.7059" fill="white" transform="translate(-6.10352e-05 32) rotate(-90)" />
            </clipPath>
          </defs>
        </svg>

        <h2 className="text-2xl font-bold">Spacexi</h2>
      </div>
      <nav>
        <ul className="p-3 ml-3 text-lg">
          <li className="mb-4 p-2 hover:bg-[#5CB1FF] hover:rounded-2xl hover:duration-100"><a href="#" className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" fill="#c7c5c0" stroke="#c7c5c0" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" fill="#c7c5c0" stroke="#c7c5c0" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" fill="#c7c5c0" stroke="#c7c5c0" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" fill="#c7c5c0" stroke="#c7c5c0" />
          </svg>
            Dashboard</a></li>
          <li className="mb-4 p-2 hover:bg-[#5CB1FF] hover:rounded-2xl hover:duration-100"><a href="#" className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9883 9.77022C19.125 8.30463 18.8585 6.19503 17.3929 5.05828C15.9273 3.92154 13.8177 4.18811 12.6809 5.6537C11.5442 7.11928 11.8108 9.22889 13.2764 10.3656C14.7419 11.5024 16.8515 11.2358 17.9883 9.77022Z" stroke="#888888" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.84784 19.9999C8.84784 16.4222 11.7561 13.5139 15.3338 13.5139C18.9116 13.5139 21.8198 16.4222 21.8198 19.9999" stroke="#888888" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.59992 9.8364C9.21266 8.69315 8.7826 7.26965 7.63936 6.65691C6.49611 6.04417 5.07261 6.47423 4.45987 7.61747C3.84713 8.76072 4.27719 10.1842 5.42043 10.797C6.56368 11.4097 7.98718 10.9796 8.59992 9.8364Z" stroke="#888888" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 17.3113C2 14.8091 4.0303 12.7788 6.53252 12.7788C8.38723 12.7788 9.97855 13.8872 10.6809 15.4895" stroke="#888888" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Shared File</a></li>
          <li className="mb-4 p-2 hover:bg-[#5CB1FF] hover:rounded-2xl hover:duration-100"><a href="#" className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0172 3C15.0298 3 13.3113 4.20845 12.5048 5.94188C11.6983 4.20845 9.98938 3 7.99241 3C5.23699 3 3 5.30794 3 8.15077C3 12.2219 8.74127 17.442 11.2951 19.5617C12.0055 20.1461 13.004 20.1461 13.7049 19.5617C16.2683 17.432 22 12.2119 22 8.15077C22.0096 5.30794 19.7726 3 17.0172 3Z" stroke="#888888" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Favorite</a></li>
          <li className="mb-4 p-2 hover:bg-[#5CB1FF] hover:rounded-2xl hover:duration-100"><a href="#" className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.95455 4.5H14.0455C14.0455 3.91984 13.83 3.36344 13.4464 2.9532C13.0628 2.54297 12.5425 2.3125 12 2.3125C11.4575 2.3125 10.9372 2.54297 10.5536 2.9532C10.17 3.36344 9.95455 3.91984 9.95455 4.5ZM8.72727 4.5C8.72727 3.57174 9.07208 2.6815 9.68583 2.02513C10.2996 1.36875 11.132 1 12 1C12.868 1 13.7004 1.36875 14.3142 2.02513C14.9279 2.6815 15.2727 3.57174 15.2727 4.5H20.3864C20.5491 4.5 20.7052 4.56914 20.8203 4.69221C20.9354 4.81528 21 4.9822 21 5.15625C21 5.3303 20.9354 5.49722 20.8203 5.62029C20.7052 5.74336 20.5491 5.8125 20.3864 5.8125H19.3145L18.3188 18.5901C18.2464 19.5197 17.8499 20.3861 17.2081 21.0177C16.5663 21.6493 15.726 21.9999 14.8538 22H9.14618C8.27399 21.9999 7.43368 21.6493 6.79187 21.0177C6.15006 20.3861 5.75362 19.5197 5.68118 18.5901L4.68545 5.8125H3.61364C3.45089 5.8125 3.29481 5.74336 3.17973 5.62029C3.06465 5.49722 3 5.3303 3 5.15625C3 4.9822 3.06465 4.81528 3.17973 4.69221C3.29481 4.56914 3.45089 4.5 3.61364 4.5H8.72727ZM6.90436 18.4808C6.95115 19.0822 7.2076 19.6429 7.62285 20.0517C8.03809 20.4604 8.58181 20.6874 9.14618 20.6875H14.8538C15.4182 20.6874 15.9619 20.4604 16.3772 20.0517C16.7924 19.6429 17.0488 19.0822 17.0956 18.4808L18.084 5.8125H5.91682L6.90436 18.4808ZM10.1591 8.875C10.3218 8.875 10.4779 8.94414 10.593 9.06721C10.7081 9.19028 10.7727 9.3572 10.7727 9.53125V16.9688C10.7727 17.1428 10.7081 17.3097 10.593 17.4328C10.4779 17.5559 10.3218 17.625 10.1591 17.625C9.99634 17.625 9.84026 17.5559 9.72518 17.4328C9.61011 17.3097 9.54545 17.1428 9.54545 16.9688V9.53125C9.54545 9.3572 9.61011 9.19028 9.72518 9.06721C9.84026 8.94414 9.99634 8.875 10.1591 8.875ZM14.4545 9.53125C14.4545 9.3572 14.3899 9.19028 14.2748 9.06721C14.1597 8.94414 14.0037 8.875 13.8409 8.875C13.6782 8.875 13.5221 8.94414 13.407 9.06721C13.2919 9.19028 13.2273 9.3572 13.2273 9.53125V16.9688C13.2273 17.1428 13.2919 17.3097 13.407 17.4328C13.5221 17.5559 13.6782 17.625 13.8409 17.625C14.0037 17.625 14.1597 17.5559 14.2748 17.4328C14.3899 17.3097 14.4545 17.1428 14.4545 16.9688V9.53125Z" fill="#888888" />
          </svg>
            Recycle Bin</a></li>
          <li className="mb-4 p-2 hover:bg-[#5CB1FF] hover:rounded-2xl hover:duration-100"><a href="#" className="flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.09 18.21H5.5C4.4 18.21 3.5 17.31 3.5 16.21V6.5C3.5 5.95 3.95 5.5 4.5 5.5H19.09C19.64 5.5 20.09 5.95 20.09 6.5V16.21C20.09 17.31 19.19 18.21 18.09 18.21Z" stroke="#888888" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.8501 6.12988L11.2401 11.2699C11.5701 11.4999 12.0201 11.4999 12.3501 11.2699L19.7401 6.12988" stroke="#888888" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Messages</a></li>
          <li className="mb-4 p-2 hover:bg-[#5CB1FF] hover:rounded-2xl hover:duration-100"><a href="#" className="flex items-center gap-2"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.93063 11.8138C10.3083 11.8138 11.425 10.697 11.425 9.31936C11.425 7.94174 10.3083 6.82495 8.93063 6.82495C7.553 6.82495 6.43622 7.94174 6.43622 9.31936C6.43622 10.697 7.553 11.8138 8.93063 11.8138Z" stroke="#888888" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.6376 9.31936C15.6376 9.30827 15.6376 9.30827 15.6376 9.29719C15.6376 8.11096 16.1254 6.99124 17.0789 6.29281L17.1565 6.23738L15.7042 3.70971C14.6288 4.19751 13.3871 4.13099 12.3672 3.54342L12.2009 3.44364C11.181 2.87824 10.5047 1.82505 10.3828 0.649902H7.46707C7.34512 1.82505 6.66885 2.86715 5.64892 3.46581L5.48262 3.5545C4.46269 4.14207 3.22103 4.20859 2.14566 3.7208L0.693359 6.24847L0.770963 6.3039C1.73547 6.99124 2.22326 8.12204 2.21218 9.30827C2.21218 9.31936 2.21218 9.31936 2.21218 9.33045C2.21218 9.34153 2.21218 9.34153 2.21218 9.35262C2.21218 10.5388 1.72438 11.6586 0.770963 12.357L0.693359 12.3903L2.14566 14.9179L2.22326 14.8847C3.29863 14.3969 4.52921 14.5299 5.54914 15.1286C5.56023 15.1396 5.57131 15.1396 5.5824 15.1507C6.61342 15.7383 7.33403 16.7361 7.45598 17.9112L7.46707 17.9999H10.3828L10.3938 17.9112C10.5158 16.7361 11.2364 15.7383 12.2674 15.1507C12.2785 15.1396 12.2896 15.1396 12.3007 15.1286C13.3206 14.541 14.5512 14.3969 15.6266 14.8847L15.7042 14.9179L17.1565 12.3903L17.0789 12.3348C16.1144 11.6475 15.6266 10.5167 15.6376 9.33045C15.6376 9.33045 15.6376 9.31936 15.6376 9.31936Z" stroke="#888888" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round" />
          </svg>
            Settings</a></li>
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-blue-100 rounded text-center">
        <h3 className="mb-2">Upgrade Account</h3>
        <p>Upgrade to pro for unlimited storage</p>
        <button className="py-2 px-4 bg-[#5CB1FF] text-white rounded mt-4">Upgrade Now</button>
      </div>
    </div>
  );
};

export default LeftSidebar;
