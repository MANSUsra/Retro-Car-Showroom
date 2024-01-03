import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ArticleDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  // Add any other necessary props for displaying the details
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ isOpen, onClose }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={onClose}>
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='p-6 h-96 overflow-y-auto'>
                <h2 className='text-2xl font-bold mb-4'>The Heart of Power and Precision: Unveiling the Ferrari V12 Engine</h2>
                <p className='text-gray-700'>
The Ferrari V12 engine stands as a testament to the Italian automaker's commitment to performance, precision, and the relentless pursuit of automotive excellence. Renowned for its iconic status and a rich racing heritage, the Ferrari V12 is more than just a powerplant; it's a symbol of engineering prowess and a source of automotive euphoria.

A Symphony of Power:
At the core of Ferrari's most prestigious models, the V12 engine is revered for its harmonious blend of power and sophistication. Crafted with meticulous attention to detail, each V12 powerplant is a symphony of perfectly tuned cylinders, delivering a distinctive and spine-tingling exhaust note that resonates with enthusiasts and petrolheads alike.

Heritage and Evolution:
The legacy of the Ferrari V12 dates back to the early days of the company, where it found its place on the racetracks of the 1940s and 1950s. Over the decades, this iconic engine has evolved, adapting to new technologies while staying true to its high-performance DNA. Today, the V12 engine remains a hallmark of Ferrari's commitment to uncompromising performance, manifesting in models like the 812 Superfast and the limited-edition gems like the LaFerrari.

Technical Marvel:
Beyond its symphonic roar, the Ferrari V12 is a technical marvel. With features like dual overhead camshafts, advanced valve control systems, and cutting-edge materials, this powerhouse is designed to extract maximum performance. The V12's ability to seamlessly blend power with precision creates an exhilarating driving experience, catapulting Ferrari's top-tier models to the forefront of automotive performance.

Innovation and Efficiency:
Ferrari continues to push the boundaries of innovation, infusing their V12 engines with hybrid technology to enhance efficiency without compromising power. By embracing electrification, Ferrari ensures that the V12 engine remains not only a symbol of performance but also a trailblazer in the era of sustainable driving.

The Ferrari V12 engine is not merely an assembly of metal and components; it's a masterpiece that encapsulates the spirit of the prancing horse. As a focal point of power, precision, and passion, the Ferrari V12 cements its place in automotive history, reminding us that the pursuit of excellence is a journey that continues to evolve, with every roar of the engine marking another chapter in the legacy of Ferrari.
                </p>
              </div>
              <div className='bg-gray-100 p-6'>
                <button className='text-black-500 hover:underline' onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ArticleDetails;
